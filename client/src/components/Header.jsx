import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import { NotificationDropdown, ProfileDropdown } from "./";

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const styles = {
    root: {
        bgcolor: "black.main",
        color: "white.main",
        px: "clamp(50px, 7%, 200px)",
        py: "clamp(5px, 1%, 20px)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    contents: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    icons: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    }
}

export default function Header() {

    const [profileEl, setProfileEl] = React.useState(null);
    const [notifEl, setNotifEl] = React.useState(null);
    const openProfile = Boolean(profileEl);
    const openNotif = Boolean(notifEl);
    const handleProfileClick = (e) => setProfileEl(e.currentTarget);
    const handleNotifClick = (e) => setNotifEl(e.currentTarget);
    const handleProfileClose = () => setProfileEl(null);
    const handleNotifClose = () => setNotifEl(null);

    return (
        <Box sx={styles.root}>
            <Typography variant="brand">
                <span style={{ color: "#FF5656" }}>Food</span><span>n</span><span style={{ color: "#6A7EFC" }}>Date</span>
            </Typography>

            <Box sx={styles.contents}>
                <Box sx={styles.icons}>
                    <IconButton onClick={handleNotifClick} sx={{ mr: 2 }}>
                        <NotificationsNoneIcon sx={{ color: "white.main" }} fontSize="large" />
                    </IconButton>
                    <NotificationDropdown handleClose={handleNotifClose} open={openNotif} anchorEl={notifEl} />
                    <Typography variant="navlink">Hi, @user</Typography>
                    <IconButton onClick={handleProfileClick} sx={{ mt: 0.5 }}>
                        <AccountCircleOutlinedIcon sx={{ color: "secondary.main", fontSize: "3rem", bgcolor: "white.main", borderRadius: 200, }} fontSize="large" />
                        <KeyboardArrowDownIcon sx={{ color: "white.main" }} fontSize="large" />
                    </IconButton>
                    <ProfileDropdown handleClose={handleProfileClose} open={openProfile} anchorEl={profileEl} />
                </Box>
            </Box>
        </Box>
    )
}
