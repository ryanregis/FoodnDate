import React from 'react'
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

export default function ProfileDropdown(props) {
    const classes = useStyles();
    const profileContents = [
        { name: "My Profile", icon: <AccountCircleOutlinedIcon color='white' fontSize="large" /> },
        { name: "My Appointments", icon: <EventIcon color='white' fontSize="large" /> },
        { name: "My Orders", icon: <ShoppingCartIcon color='white' fontSize="large" /> },
        { name: "About Us", icon: <InfoIcon color='white' fontSize="large" /> },
        { name: "Contact Us", icon: <ContactPageIcon color='white' fontSize="large" /> },
        { name: "Logout", icon: <LogoutIcon color='white' fontSize="large" /> },
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
                            <MenuItem onClick={props.handleClose}>
                                <ListItemIcon  >
                                    {content.icon}
                                </ListItemIcon>
                                <ListItemText sx={{ ml: 3 }}>
                                    {content.name}
                                </ListItemText>
                            </MenuItem>
                        )
                    })
                }
            </Menu>
        </Paper>
    )
}
