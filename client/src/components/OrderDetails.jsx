import React from 'react'
import { Paper, Box, Typography, Divider } from "@mui/material";
import { makeStyles } from '@mui/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import theme from '../Theme';

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: theme.palette.white.main,
        color: theme.palette.black.main,
        border: "none", height: 2, margin: "10px 0",
    },

}));

export default function OrderDetails(props) {
    const classes = useStyles();

    let orderDetails = [
        { label: "Order ID:", content: "" },
        { label: "Order By:", content: "@user" },
        { label: `${"@user"}'s address:`, content: "" },
        { label: `SO's name:`, content: "" },
        { label: `${"SO's"} address:`, content: "" },
        { label: "Payment Method:", content: "" },
        { label: "Schedule:", content: "" },
    ];
    return (
        <Paper square
            sx={{
                color: "white.main", bgcolor: "secondary.main",
                minHeight: "90vh", height: "100%", px: 3, py: 1.5
            }}>
            <Box display="flex" alignItems="center" gap={3}>
                <Typography variant="h3">Order Details</Typography>
            </Box>
            <Divider classes={{
                root: classes.divider
            }} sx={{ my: 2 }} />
            <Box>
                {
                    orderDetails.map(order => {
                        return (
                            <Box display="flex" alignItems="center" gap={2}>
                                <Typography variant="subtitle1" fontWeight={300}>
                                    {order.label}
                                </Typography>
                                <Typography variant="subtitle1" fontWeight={700}>
                                    {order.content}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
            <Divider classes={{
                root: classes.divider
            }} sx={{ my: 2 }} />

            <Box display="flex" flexDirection="column" mt={2}>
                <Box width="100%" display="flex" alignItems="center" gap={3} >
                    <Typography variant="h4">Cart</Typography>
                    <ShoppingCartIcon fontSize="large" />
                </Box>
                <Paper sx={{ mt:2, height: 300, p:2, overflowY: "auto"}}>
                    <Typography>
                        Food Ordered:
                    </Typography>
                    
                    
                </Paper>
            </Box>
        </Paper>
    )
}
