import React from 'react'
import { Paper, Divider, Menu, MenuItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';

const useStyles = makeStyles(() => ({
    root: {
        "& .MuiMenu-paper": {
            backgroundColor: `${theme.palette.black.main} !important`,
            color: theme.palette.white.main
        }
    }

}));

export default function NotificationDropdown(props) {
    const classes = useStyles();
    return (
        <Menu
            className={classes.root}
            anchorEl={props.anchorEl}
            open={props.open}
            onClose={props.handleClose}
            sx={{ width: 300, maxWidth: "70%" }}
        >
            <Typography variant="h5" sx={{ mx: 2, my: 1 }}>Notifications</Typography>
            <Divider />
            <MenuItem onClick={props.handleClose} sx={{ mt: 2 }}>
                No Notifications yet.
            </MenuItem>

        </Menu>
    )
}
