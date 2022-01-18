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
// const cors = require('cors');

var options = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
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


app.use(session({
    secret: process.env.SESSION_SECRET,
    store: sessionStore,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        sameSite: 'strict',
        httpOnly: false,
    }
}));

// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger("dev"));

const buildPath = path.join(__dirname, '../client/dist');
app.use(express.static(buildPath));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

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

app.get("/api/video-call/:id", async function (req, res) {
    const roomId = req.params.id;

    const room = await getRoom(roomId);
    if (room.error) {
        const newRoom = await createRoom(roomId);
        res.status(200).send(newRoom);
    } else {
        res.status(200).send(room);
    }
});

app.post("/api", (req, res) => {
    console.log("Connected to React!!!");
    // res.redirect("/");
});

app.post("/api/register", (request, response) => {
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
                if (err) return response.json({ stat: "error", message: err });;

                db.query(`ALTER TABLE user_profile DROP FOREIGN KEY fk_user_login_id;`, (err) => {
                    if (err) return response.json({ stat: "error", message: err });
                    else {
                        db.query(`ALTER TABLE user_profile DROP FOREIGN KEY fk_user_other_details_id;`, (err) => {
                            if (err) return response.json({ stat: "error", message: err });
                            else {
                                db.query(`INSERT INTO user_login (email, password, access) VALUES (?, ?, 'user');`, [email, hashedPassword], (err) => {
                                    if (err) db.rollback(() => {
                                        console.log(err);
                                        return response.json({ stat: "error", message: err });
                                    });
                                    else {
                                        db.query(`INSERT INTO user_other_details (relationship_status, sexual_orientation_id, has_allergy, allergens, checked_promotions) VALUES (?,?,?,?,?)`, [relationship_status, sexual_orientation, has_allergy, allergens, checked_promotions], (err) => {
                                            if (err) db.rollback(() => {
                                                console.log(err);
                                                return response.json({ stat: "error", message: err });
                                            });
                                            else {
                                                db.query(`INSERT INTO user_profile (first_name, last_name, contact_number, address, gender_id, user_login_id, user_other_details_id) VALUES (?, ?, ?, ?, ?, LAST_INSERT_ID(), LAST_INSERT_ID());`, [first_name, last_name, contact_number, address, gender], (err) => {
                                                    if (err) db.rollback(() => {
                                                        console.log(err);
                                                        return response.json({ stat: "error", message: err });
                                                    });
                                                    else {
                                                        db.query(`ALTER TABLE food_n_date.user_profile ADD CONSTRAINT fk_user_login_id FOREIGN KEY (user_login_id) REFERENCES food_n_date.user_login (user_login_id) ON DELETE NO ACTION ON UPDATE NO ACTION, ADD CONSTRAINT fk_user_other_details_id FOREIGN KEY (user_other_details_id) REFERENCES food_n_date.user_other_details (user_other_details_id) ON DELETE NO ACTION ON UPDATE NO ACTION;`, (err) => {
                                                            if (err) {
                                                                console.log(err);
                                                                return response.json({ stat: "error", message: err });
                                                            }
                                                            else {
                                                                db.commit((err) => {
                                                                    if (err) db.rollback(() => {
                                                                        console.log(err);
                                                                        return response.json({ stat: "error", message: err });
                                                                    })
                                                                    else return response.json({ stat: "success", message: "User is successfully registered!" });
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
            })
        })
});

app.post("/api/login", (request, response) => {
    const { email, password } = request.body;

    db.query(
        `SELECT * FROM user_profile JOIN user_login ON user_profile.user_login_id = user_login.user_login_id JOIN user_other_details ON user_profile.user_other_details_id=user_other_details.user_other_details_id WHERE user_login.email = ?;`, email, async (err, result) => {
            if (err) return response.json({ stat: "error", message: err });

            if (result.length > 0) {
                if (await bcrypt.compare(password, result[0].password)) {
                    delete result[0].password;
                    request.session.userInfo = result;
                    return response.json({ stat: "success", message: "Successfully Logged In!", userInfo: result });
                } else return response.json({ stat: "error", message: "Wrong password! Please try again" });
            } else return response.json({ stat: "error", message: "User doesn't exist. Please register." })
        }
    )
});

app.get("/api/login", (request, response) => {
    console.log(request.session.userInfo);
    if (request.session.userInfo) {
        return response.json({ stat: "success", isLoggedIn: true, userInfo: request.session.userInfo });
    } else {
        return response.json({ stat: "warning", isLoggedIn: false, message: "You're not logged in. / Session has expired." });
    }
});

app.post("/api/order", (request, response) => {
    const {
        user_profile_id,
        items,
        amount,
        dates_email,
        dates_address,
        payment_type,
        date_scheduled,
    } = request.body;
    let payment_id;

    db.beginTransaction((err) => {
        if (err) return response.json({ stat: "error", message: err });
        db.query(
            `INSERT INTO payment (payment_type, amount) VALUES (?,?)`, [payment_type, amount],
            (err) => {
                if (err) {
                    db.rollback(() => console.log(err));
                    return response.json({ stat: "error", message: err });
                }
                db.query(
                    `SELECT LAST_INSERT_ID()`, (err, result) => {
                        if (err) {
                            db.rollback(() => console.log(err));
                            return response.json({ stat: "error", message: err });
                        }
                        console.log(result[0]);
                        payment_id = result[0]['LAST_INSERT_ID()'];

                        db.query(
                            `INSERT INTO orders (user_profile_id, food_id, payment_id, quantity) VALUES ?`,
                            [items.map((item) => [user_profile_id, item.id, payment_id, item.quantity])], (err) => {
                                if (err) {
                                    db.rollback(() => console.log(err));
                                    return response.json({ stat: "error", message: err });
                                }

                                db.query(
                                    `INSERT INTO appointment (user_profile_id, dates_email, dates_address, date_scheduled) VALUES (?,?,?,?)`,
                                    [user_profile_id, dates_email || "Not Available", dates_address, date_scheduled],
                                    (err) => {
                                        if (err) {
                                            db.rollback(() => console.log(err));
                                            return response.json({ stat: "error", message: err });
                                        }

                                        db.commit((err) => {
                                            if (err) {
                                                db.rollback(() => console.log(err));
                                                return response.json({ stat: "error", message: err });
                                            }

                                            return response.json({ stat: "success", message: "Successfully submitted your order" });
                                        })
                                    }
                                )
                            })
                    })
            })
    })
})

app.post("/api/orders", (request, response) => {
    const { user_profile_id } = request.body;

    db.query(
        `SELECT * FROM orders JOIN food ON orders.food_id = food.food_id JOIN payment ON orders.payment_id = payment.payment_id WHERE orders.user_profile_id = ?`, [user_profile_id],
        (err, result) => {
            if (err) {
                console.log(err);
                return response.json({ stat: "error", message: err });
            }
            console.log(result);
            return response.json({ stat: "success", orders: result });
        }
    )
})

app.post("/api/logout", (request, response) => {
    request.session.destroy((err) => {
        if (err) return response.json({ stat: "error", message: err });
        sessionStore.close();
        // response.clearCookie("FoodnDateSession");
        return response.json({ stat: "success", message: "Successfully Logged Out!" });
    })
})



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    db.connect((err) => {
        if (err) console.log('Error:', err);
        else console.log('DB Connected.');
    })
});