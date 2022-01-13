import React, { useContext } from 'react'
import { Box, useMediaQuery, Tabs, Tab, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { AdminTable } from '../components';
import { UserContext } from '../context/UserContext';

import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

const useStyles = makeStyles(() => ({
    root: {

    },
    tabs: {
        backgroundColor: theme.palette.white.main,
        border: "2px solid",
        borderColor: theme.palette.black.main,
        borderRadius: "20px 20px 0 0",
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ padding: '10px clamp(50px, 7%, 200px)', }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function Admin() {
    const user = useContext(UserContext);
    const classes = useStyles();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (e, newValue) => {
        setTabValue(newValue);
    }
    
    if (user.userInfo.access !== "admin") {
        swal("Unauthorized Entry", "You don't have the access role required to enter the page.", "error");
        return <Navigate to="/" />;
    }
    return (
        <Box>
            <Box sx={{ zIndex: 10, bgcolor: "neutral.main" }} >
                <Tabs value={tabValue} onChange={handleTabChange}
                    variant="fullWidth">
                    <Tab className={classes.tabs} sx={{ mt: 2, mx: 0.5 }} label={<Typography variant="h5">Orders</Typography>} />
                    <Tab className={classes.tabs} sx={{ mt: 2, mx: 0.25 }} label={<Typography variant="h5">Appointments</Typography>} />
                    <Tab className={classes.tabs} sx={{ mt: 2, mx: 0.25 }} label={<Typography variant="h5">Transactions</Typography>} />
                    <Tab className={classes.tabs} sx={{ mt: 2, mx: 0.5 }} label={<Typography variant="h5">Users</Typography>} />
                </Tabs>
            </Box>
            <TabPanel value={tabValue} index={0}>
                <AdminTable type="order" />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <AdminTable type="appointment" />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <AdminTable type="transaction" />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <AdminTable type="user" />
            </TabPanel>
        </Box>
    )
}
