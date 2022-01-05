import { Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

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
        width: "40%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    icons: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    }
}

export default function Header() {
    return (
        <Box sx={styles.root}>
            <Typography variant="brand">
                <span style={{ color: "#FF5656" }}>Food</span><span>n</span><span style={{ color: "#6A7EFC" }}>Date</span>
            </Typography>

            <Box sx={styles.contents}>
                <Typography variant="navlink">About Us</Typography>
                <Typography variant="navlink">Contact Us</Typography>
                <IconButton sx={{p: 0}}>
                    <NotificationsNoneIcon sx={{ color: "white.main" }} fontSize="large" />
                </IconButton>
                <Box sx={styles.icons}>
                    <Typography variant="navlink">Hi, @user</Typography>
                    <IconButton sx={{ mt: 0.5 }}>
                        <AccountCircleOutlinedIcon sx={{ color: "secondary.main", fontSize: "3rem", bgcolor: "white.main", borderRadius: 200, }} fontSize="large" />
                        <KeyboardArrowDownIcon sx={{ color: "white.main" }} fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    )
}
