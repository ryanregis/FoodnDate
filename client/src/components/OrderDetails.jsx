import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { ACTIONS, OrderContext } from '../context/OrderContext';

import { Paper, Box, Typography, Divider, Button, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import { makeStyles } from '@mui/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ClearIcon from '@mui/icons-material/Clear';

import theme from '../Theme';
import swal from 'sweetalert';
import Clear from '@mui/icons-material/Clear';

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
    const { userName, userAddress, forADate, sOName, sOAddress, paymentMethod, schedule, items } = state;



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

    const handleAdd = (e, foodItem) => {
        dispatch({ type: ACTIONS.addQuantity, payload: foodItem });
    }
    const handleMinus = (e, foodItem) => {
        dispatch({ type: ACTIONS.minusQuantity, payload: foodItem });
    }
    const handleRemoveFromCart = (e, foodItem) => {
        dispatch({ type: ACTIONS.removeFromCart, payload: foodItem });
    }

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
                    <Box width="100%">
                        {
                            items.length >= 1 ?
                                items.map((item, index) => {
                                    return (
                                        <Card key={item.name + index} sx={{
                                            height: 120,
                                            my: 2,
                                            display: "flex", justifyContent: "space-between", alignItems: "stretch"
                                        }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 130 }}
                                                image={item.img}
                                                alt={item.name}
                                            />
                                            <Box width="60%" >
                                                <CardContent display="flex" flexDirection="column" justifyContent="space-between">
                                                    <Box>
                                                        <Typography variant="subtitle1">
                                                            {item.name}
                                                        </Typography>
                                                        <Typography variant="body2">
                                                            {item.course}
                                                        </Typography>
                                                    </Box>
                                                    <Box display="flex" justifyContent="space-between" alignItems="center">
                                                        <Typography>
                                                            Quantity: {item.quantity}
                                                        </Typography>
                                                        <Box>
                                                            <IconButton onClick={(e) => handleMinus(e, item)}>
                                                                <IndeterminateCheckBoxOutlinedIcon
                                                                    fontSize="medium" color="black" />
                                                            </IconButton>
                                                            <IconButton onClick={(e) => handleAdd(e, item)}>
                                                                <AddBoxOutlinedIcon
                                                                    fontSize="medium" color="black" />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                </CardContent>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                <IconButton onClick={(e) => handleRemoveFromCart(e, item)}>
                                                    <ClearIcon color="primary" fontSize="large" />
                                                </IconButton>
                                            </Box>
                                        </Card>
                                    )
                                })
                                :
                                <Typography>
                                    No items added yet.
                                </Typography>
                        }
                    </Box>
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
