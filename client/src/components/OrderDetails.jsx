import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { ACTIONS, OrderContext } from '../context/OrderContext';
import { UserContext } from "../context/UserContext";

import { Paper, Box, Stack, Typography, Divider, Button, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import { makeStyles } from '@mui/styles';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import ClearIcon from '@mui/icons-material/Clear';

import axios from "axios";

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
    const user = useContext(UserContext);
    const { state, dispatch } = useContext(OrderContext);
    const { userName, userAddress, forADate, sOEmail, sOName, sOAddress, paymentMethod, schedule, items } = state;
    const [total, setTotal] = useState();
    const [init, setInit] = useState(false);

    useEffect(() => {
        let localCreds = JSON.parse(localStorage.getItem('userDetails')) || { userName, userAddress, forADate, sOEmail, sOName, sOAddress, paymentMethod, schedule };
        let localItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        dispatch({ type: ACTIONS.initCart, payload: localItems });
        dispatch({ type: ACTIONS.changeAllUser, payload: localCreds });
        setInit(true);
    }, []);

    useEffect(() => {
        // console.log(items);
        if (init) {
            localStorage.setItem("userDetails", JSON.stringify({ userName, userAddress, forADate, sOEmail, sOName, sOAddress, paymentMethod, schedule }));
            localStorage.setItem("cartItems", JSON.stringify(items));
            setTotal(items.reduce((acc, curr) => acc + Number(curr.subtotal), 0));
        };
    }, [state, dispatch])

    const orderDetails = [
        // { label: "Order ID:", content: "" },
        { label: "Order By:", content: userName },
        { label: `${userName}'s address:`, content: userAddress },
        { label: `SO's name:`, content: sOName },
        { label: `${sOName}'s address:`, content: sOAddress },
        { label: "Payment Method:", content: paymentMethod === "COD" ? "COD (Cash On Delivery)" : "e-Wallet (GCash)" },
        { label: "Schedule:", content: schedule },
    ];

    const handleOrder = (e) => {
        const data = {
            user_profile_id: user.userInfo[0].user_profile_id,
            items,
            amount: total,
            dates_email: sOEmail,
            dates_address: sOAddress,
            payment_type: paymentMethod,
            date_scheduled: schedule
        };
        axios.post("/api/order", data).then(response => {
            if (response.data.stat === "success") {
                swal("Hope you enjoy your food!", response.data.message, "success");
                localStorage.setItem("userDetails", JSON.stringify({
                    userName: user.userInfo[0].first_name,
                    userAddress: user.userInfo[0].address,
                    forADate: null,
                    sOEmail: "@SOEmail",
                    sOName: "@SO",
                    sOAddress: "Somewhere else",
                    paymentMethod: "COD",
                    schedule: "",
                }));
                localStorage.setItem("cartItems", JSON.stringify([]));
                dispatch({ type: ACTIONS.initCart, payload: [] });
                dispatch({
                    type: ACTIONS.changeAllUser, payload: {
                        userName: user.userInfo[0].first_name,
                        userAddress: user.userInfo[0].address,
                        forADate: null,
                        sOEmail: "@SOEmail",
                        sOName: "@SO",
                        sOAddress: "Somewhere else",
                        paymentMethod: "",
                        schedule: "",
                    }
                });
                navigate("/order");
            } else {
                swal("Error!", response.data.message, "error");
                navigate("/order");
            }
        }).catch(err => console.log(err));


    };

    const handleAdd = (e, foodItem) => {
        dispatch({ type: ACTIONS.addQuantity, payload: foodItem });
        dispatch({ type: ACTIONS.computeSubtotal, payload: foodItem });

    }
    const handleMinus = (e, foodItem) => {
        dispatch({ type: ACTIONS.minusQuantity, payload: foodItem });
        dispatch({ type: ACTIONS.computeSubtotal, payload: foodItem });
    }
    const handleRemoveFromCart = (e, foodItem) => {
        dispatch({ type: ACTIONS.removeFromCart, payload: foodItem });
    }

    const handleClearCart = () => {
        swal({ title: "This will clear whole cart. Continue?", icon: "warning", buttons: true, dangerMode: true })
            .then((value) => {
                if (value) {
                    dispatch({ type: ACTIONS.clearCart });
                }
            })
    }
    const handleBack = () => {
        navigate("/order/menu");
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
                                {
                                    order.content !== "Not available" &&
                                    <>
                                        <Typography variant="subtitle1" fontWeight={300}>
                                            {order.label}
                                        </Typography>
                                        <Typography variant="subtitle1" fontWeight={700}>
                                            {order.content}
                                        </Typography>
                                    </>
                                }
                            </Box>
                        )
                    })
                }
            </Box>

            <Divider classes={{
                root: classes.divider
            }} sx={{ my: 2 }} />

            <Box display="flex" flexDirection="column" mt={2} mb={5}>
                <Box width="100%" display="flex" alignItems="center" gap={1} >
                    <Typography variant="h4">Cart</Typography>
                    <ShoppingCartIcon fontSize="large" />
                    {(items.length !== 0 && props.type !== "review") &&
                        <IconButton onClick={handleClearCart}>
                            <ClearIcon color="primary" fontSize="large" />
                            <Typography color="white.main" variant="button">Clear Cart</Typography>
                        </IconButton>}
                </Box>
                <Paper sx={{ mt: 2, height: 300, p: 1, overflowY: "auto", }}>
                    <Box width="100%">
                        {
                            items.length ?
                                items.map((item, index) => {
                                    return (
                                        <Card key={item.name + index} sx={{
                                            border: "2px ridge " + theme.palette.neutral.main,
                                            height: 120,
                                            my: 2,
                                            display: "flex", justifyContent: "space-between", alignItems: "stretch"
                                        }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ width: 100 }}
                                                image={item.img}
                                                alt={item.name}
                                            />
                                            <Box width="100%" >
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
                                                        <Typography sx={{ display: "flex", alignItems: "center" }}>
                                                            Quantity: {item.quantity}
                                                            <IconButton sx={{ mr: -2 }} onClick={(e) => handleMinus(e, item)}>
                                                                <IndeterminateCheckBoxOutlinedIcon
                                                                    fontSize="medium" color="black" />
                                                            </IconButton>
                                                            <IconButton onClick={(e) => handleAdd(e, item)}>
                                                                <AddBoxOutlinedIcon
                                                                    fontSize="medium" color="black" />
                                                            </IconButton>
                                                        </Typography>
                                                        <Typography>
                                                            Item Price: &#8369;{item.price}
                                                            <br />Total Price: &#8369;{item.price * item.quantity}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                            </Box>
                                            {props.type !== "review" &&
                                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                                    <IconButton onClick={(e) => handleRemoveFromCart(e, item)}>
                                                        <ClearIcon color="primary" fontSize="large" />
                                                    </IconButton>
                                                </Box>
                                            }
                                        </Card>
                                    )
                                })
                                :
                                <Typography sx={{ width: "100%", height: "100%" }} align="center">
                                    No items added yet.
                                </Typography>
                        }
                    </Box>
                </Paper>
            </Box>
            <Divider classes={{
                root: classes.divider
            }} />
            <Stack sx={{ width: props.type === "review" ? "40%" : "100%", mx: "auto" }}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">Subtotal:</Typography>
                    <Typography variant="h6">&#8369; {total} </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1">Delivery Fee:</Typography>
                    <Typography variant="subtitle1">+ &#8369; 200</Typography>
                </Box>
                <Box mt={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4">Total:</Typography>
                    <Typography variant="h4">&#8369; {total + 200} </Typography>
                </Box>

            </Stack>


            {
                props.type === "review" &&
                <Box mt={6} width="100%" display="flex" justifyContent="center" gap={5}>
                    <Button variant="contained" size='large' color="neutral" onClick={handleBack}>
                        EDIT ORDER
                    </Button>
                    <Button variant="contained" size='large' onClick={handleOrder} >
                        SUBMIT ORDER
                    </Button>
                </Box>
            }
        </Paper >
    )
}
