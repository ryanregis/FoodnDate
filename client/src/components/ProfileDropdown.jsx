import React from 'react';
import { Link } from 'react-router-dom';

import { Paper, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EventIcon from '@mui/icons-material/Event';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LogoutIcon from '@mui/icons-material/Logout';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiMenu-paper": {
            backgroundColor: `${theme.palette.black.main} !important`,
            color: theme.palette.white.main
        }
    }
}));

const handleLogout = () => {

};

export default function ProfileDropdown(props) {
    const classes = useStyles();
    const profileContents = [
        { name: "My Profile", dest: "/profile", icon: <AccountCircleOutlinedIcon color='white' fontSize="large" /> },
        { name: "My Appointments", dest: "/appointment", icon: <EventIcon color='white' fontSize="large" /> },
        { name: "My Orders", dest: "/order", icon: <ShoppingCartIcon color='white' fontSize="large" /> },
        { name: "About Us", dest: "/about", icon: <InfoIcon color='white' fontSize="large" /> },
        { name: "Contact Us", dest: "/contact", icon: <ContactPageIcon color='white' fontSize="large" /> },
        { name: "Logout", dest: "/login", icon: <LogoutIcon color='white' fontSize="large" /> },
    ];

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
                            <MenuItem key={content.name} component={Link} to={String(content.dest)}
                                onClick={
                                    content.name === "Logout" ? handleLogout : props.handleClose
                                }>
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
