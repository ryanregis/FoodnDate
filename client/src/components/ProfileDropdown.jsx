import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Paper, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventIcon from '@mui/icons-material/Event';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';

import axios from 'axios';
import { UserContext } from '../context/UserContext';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiMenu-paper": {
            backgroundColor: `${theme.palette.black.main} !important`,
            color: theme.palette.white.main
        }
    }
}));

export default function ProfileDropdown(props) {
    const navigate = useNavigate();
    const classes = useStyles();
    const user = useContext(UserContext);
    const profileContents = [
        { name: "Admin Page", dest: "/admin", icon: <AdminPanelSettingsIcon color="primary" fontSize="large" /> },
        { name: "My Profile", dest: "/profile", icon: <AccountCircleOutlinedIcon color='white' fontSize="large" /> },
        { name: "My Appointments", dest: "/appointment", icon: <EventIcon color='white' fontSize="large" /> },
        { name: "My Orders", dest: "/order", icon: <ShoppingCartIcon color='white' fontSize="large" /> },
        { name: "About Us", dest: "/about", icon: <InfoIcon color='white' fontSize="large" /> },
        { name: "Contact Us", dest: "/contact", icon: <ContactPageIcon color='white' fontSize="large" /> },
        { name: "Logout", dest: "/login", icon: <LogoutIcon color='white' fontSize="large" /> },
    ];

    const handleLogout = (e) => {
        axios.post("http://localhost:5000/api/logout").then((response) => {
            console.log(response);
        }).catch(err => console.log(err)).then(() => {
            window.location.reload();
            // navigate("/login");
        });
    };

    return (
        <Paper>
            <Menu
                className={classes.root}
                anchorEl={props.anchorEl}
                open={props.open}
                onClose={props.handleClose}
            >
                {
                    profileContents.map((content) => {
                        return (
                            content.name === "Logout" ?
                                <MenuItem key={content.name} onClick={handleLogout}>
                                    <ListItemIcon  >
                                        {content.icon}
                                    </ListItemIcon>
                                    <ListItemText sx={{ ml: 3 }}>
                                        <Typography variant="h6">{content.name}</Typography>
                                    </ListItemText>
                                </MenuItem>
                                :
                                (content.name === "Admin Page" && user.userInfo[0].access === "admin") ?
                                    <MenuItem key={content.name} component={Link} to={String(content.dest)}
                                        onClick={props.handleClose}>
                                        <ListItemIcon  >
                                            {content.icon}
                                        </ListItemIcon>
                                        <ListItemText sx={{ ml: 3 }}>
                                            <Typography variant="h6" sx={{color: "primary.main"}}>{content.name}</Typography>
                                        </ListItemText>
                                    </MenuItem>

                                    : content.name !== "Admin Page" && <MenuItem key={content.name} component={Link} to={String(content.dest)}
                                        onClick={props.handleClose}>
                                        <ListItemIcon  >
                                            {content.icon}
                                        </ListItemIcon>
                                        <ListItemText sx={{ ml: 3 }}>
                                            <Typography variant="h6">{content.name}</Typography>
                                        </ListItemText>
                                    </MenuItem>
                        )
                    })
                }
            </Menu>
        </Paper>
    )
}
