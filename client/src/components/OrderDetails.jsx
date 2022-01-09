import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { OrderContext } from '../context/OrderContext';

import { Paper, Box, Typography, Divider, Button } from "@mui/material";
import { makeStyles } from '@mui/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import theme from '../Theme';
import swal from 'sweetalert';

const useStyles = makeStyles(() => ({
    divider: {
        backgroundColor: theme.palette.white.main,
        color: theme.palette.black.main,
        border: "none", height: 2, margin: "10px 0",
    },
}));


export default function OrderDetails(props) {
    const classes = useStyles();
    const navigate = useNavigate();
    const { state, dispatch } = useContext(OrderContext);
    const { userName, userAddress, forADate, sOName, sOAddress, paymentMethod, schedule } = state;


    const orderDetails = [
        // { label: "Order ID:", content: "" },
        { label: "Order By:", content: userName },
        { label: `${userName}'s address:`, content: userAddress },
        { label: `SO's name:`, content: sOName },
        { label: `${sOName}'s address:`, content: sOAddress },
        { label: "Payment Method:", content: paymentMethod },
        { label: "Schedule:", content: schedule },
    ];

    const handleOrder = (e) => {
        swal("Success!", "Hope you enjoy your food", "success");
        navigate("/order");
    };

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
                    orderDetails.map((order) => {
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

            <Box display="flex" flexDirection="column" mt={2} mb={5}>
                <Box width="100%" display="flex" alignItems="center" gap={3} >
                    <Typography variant="h4">Cart</Typography>
                    <ShoppingCartIcon fontSize="large" />
                </Box>
                <Paper sx={{ mt: 2, height: 300, p: 2, overflowY: "auto" }}>
                    <Typography>
                        Food Ordered:
                    </Typography>
                </Paper>
            </Box>
            <Divider classes={{
                root: classes.divider
            }} />

            {props.type === "review" &&
                <Box mt={6} width="100%" display="flex" justifyContent="center">
                    <Button variant="contained" size='large' onClick={handleOrder} >
                        SUBMIT ORDER
                    </Button>
                </Box>
            }
        </Paper>
    )
}
