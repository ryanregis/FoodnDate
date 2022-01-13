//for daily.co
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
require("dotenv").config();
const fetch = require("node-fetch");
const logger = require("morgan");

const express = require("express");
const mysql = require('mysql2');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const cors = require('cors');

var options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'onlyGodknowswhatitis99',
    database: 'food_n_date'
};

var db = mysql.createConnection(options);

var sessionStore = new MySQLStore({
    expiration: 10800000,
    createDatabaseTable: true,
    schema: {
        tableName: "sessiontbl",
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data',
        }
    }
}, db.promise());

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(session({
    secret: "FoodnDateSecretHeheheXD",
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: 'none'
    }
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//for daily.co
app.use(logger("dev"));
const API_KEY = process.env.daily_API_KEY;
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + API_KEY,
  };
  
  const getRoom = (room) => {
    return fetch(`https://api.daily.co/v1/rooms/${room}`, {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.error("error:" + err));
  };
  
  const createRoom = (room) => {
    return fetch("https://api.daily.co/v1/rooms", {
      method: "POST",
      headers,
      body: JSON.stringify({
        name: room,
        properties: {
          enable_screenshare: true,
          enable_chat: true,
          start_video_off: true,
          start_audio_off: false,
          lang: "en",
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        return json;
      })
      .catch((err) => console.log("error:" + err));
  };
  
  app.get("/video-call/:id", async function (req, res) {
    const roomId = req.params.id;
  
    const room = await getRoom(roomId);
    if (room.error) {
      const newRoom = await createRoom(roomId);
      res.status(200).send(newRoom);
    } else {
      res.status(200).send(room);
    }
  });
  

app.use(cors());
app.post("/api", (req, res) => {
    console.log("Connected to React!!!");
    // res.redirect("/");
});

app.post("/api/register", (request, response) => {
    console.log(request.body);
    const {
        first_name, last_name, contact_number, address,
        email, password, has_allergy, allergens, relationship_status,
        gender, sexual_orientation, checked_promotions
    } = request.body;

    db.query(
        `SELECT email FROM user_login WHERE email = ?`, [email],
        async (err, result) => {
            if (err) {
                console.log(err);
                return response.json({ message: err });
            }
            if (result.length > 0) return response.json({ stat: "error", message: "Email entered is already in use." });

            const hashedPassword = await bcrypt.hash(password, 8);
            db.beginTransaction((err) => {
                if (err) console.log(err);

                db.query(`ALTER TABLE user_profile DROP FOREIGN KEY fk_user_login_id;`, (err) => {
                    if (err) console.log(err);
                    else {
                        db.query(`ALTER TABLE user_profile DROP FOREIGN KEY fk_user_other_details_id;`, (err) => {
                            if (err) console.log(err);
                            else {
                                db.query(`INSERT INTO user_login (email, password, access) VALUES (?, ?, 'user');`, [email, hashedPassword], (err) => {
                                    if (err) db.rollback(() => console.log(err));
                                    else {
                                        db.query(`INSERT INTO user_other_details (relationship_status, sexual_orientation_id, has_allergy, allergens, checked_promotions) VALUES (?,?,?,?,?)`, [relationship_status, sexual_orientation, has_allergy, allergens, checked_promotions], (err) => {
                                            if (err) db.rollback(() => console.log(err));
                                            else {
                                                db.query(`INSERT INTO user_profile (first_name, last_name, contact_number, address, gender_id, user_login_id, user_other_details_id) VALUES (?, ?, ?, ?, ?, LAST_INSERT_ID(), LAST_INSERT_ID());`, [first_name, last_name, contact_number, address, gender], (err) => {
                                                    if (err) db.rollback(() => console.log(err));
                                                    else {
                                                        db.query(`ALTER TABLE food_n_date.user_profile ADD CONSTRAINT fk_user_login_id FOREIGN KEY (user_login_id) REFERENCES food_n_date.user_login (user_login_id) ON DELETE NO ACTION ON UPDATE NO ACTION, ADD CONSTRAINT fk_user_other_details_id FOREIGN KEY (user_other_details_id) REFERENCES food_n_date.user_other_details (user_other_details_id) ON DELETE NO ACTION ON UPDATE NO ACTION;`, (err) => {
                                                            if (err) console.log(err);
                                                            else {
                                                                db.commit((err) => {
                                                                    if (err) db.rollback(() => console.log(err))
                                                                    else return response.json({stat: "success", message: "User is successfully registered!"});
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }

            )
            // db.query(
            //     `START TRANSACTION;INSERT INTO user_login (email, password, access) VALUES (?, ?, 'user');INSERT INTO user_other_details (relationship_status, sexual_orientation_id, has_allergy, allergens, checked_promotions) VALUES (?,?,?,?,?);INSERT INTO user_profile (first_name, last_name, contact_number, address, email, password, gender_id, user_login_id, user_other_details_id) VALUES (?, ?, ?, ?, ?, ?, ?, LAST_INSERT_ID(), LAST_INSERT_ID());COMMIT;`, [email, hashedPassword, relationship_status, sexual_orientation, has_allergy, allergens, checked_promotions, first_name, last_name, contact_number, address, email, password, gender],
            //     (err) => {
            //         if(err) {
            //             console.log(err);
            //             return response.json({stat: "error", message: err});
            //         }
            //         else return response.json({stat: "success", message: "User is successfully registered!"});
            //     }
            // )
        }

    )
});

const PORT = process.env.PORT || 5000;

// const buildPath = path.join(__dirname, '../client/dist');
// app.use(express.static(buildPath));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    db.connect((err) => {
        if (err) console.log('Error:', err);
        else console.log('DB Connected.');
    })
});


