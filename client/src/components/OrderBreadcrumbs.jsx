import React from 'react'
import { Breadcrumbs, Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    root: { justifyContent: "center" },
}));

export default function OrderBreadcrumbs(props) {
    const classes = useStyles();
    const breadcrumbs = [
        <Button color={props.current === "orderFood" ? "secondary" : "inherit"}>Order Food</Button>,
        <Button color={props.current === "setSchedule" ? "secondary" : "inherit"}>Set Schedule/Delivery</Button>,
        <Button color={props.current === "shipping" ? "secondary" : "inherit"}>Shipping</Button>,
        <Button color={props.current === "payment" ? "secondary" : "inherit"}>Payment</Button>,
    ];

    return (
        <Breadcrumbs sx={{ my: 2 }} classes={{ ol: classes.root }} separator={<NavigateNextIcon fontSize="small" />}>
            {breadcrumbs}
        </Breadcrumbs>
    )
}
