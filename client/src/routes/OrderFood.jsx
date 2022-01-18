import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { ACTIONS, OrderContext } from "../context/OrderContext";
import { UserContext } from '../context/UserContext';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    ImageList, ImageListItem, ImageListItemBar, CardMedia
} from "@mui/material";

import { makeStyles } from '@mui/styles';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import swal from "sweetalert";

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";
import { foodMenu } from '../constants';

const useStyles = makeStyles(() => ({
    mainDivider: {
        backgroundColor: theme.palette.secondary.main,
        border: "none", height: 2, margin: "10px 0",
    },
    imgTextRoot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10
    },
    imgTitle: {
        textOverflow: "unset",
        whiteSpace: "break-spaces"
    },
    imgSubtitle: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}));

function OrderFood() {
    const user = useContext(UserContext);
    const navigate = useNavigate();
    const classes = useStyles();
    const { state, dispatch } = useContext(OrderContext);

    useEffect(() => {
        dispatch({
            type: ACTIONS.changeAllUser, 
            payload: {
                ...state,
                userName: user.userInfo[0].first_name,
                userAddress: user.userInfo[0].address,
            }
        });
    }, [])

    const handleAddToCart = (e, foodItem) => {
        dispatch({ type: ACTIONS.addToCart, payload: { ...foodItem, quantity: 1, subtotal: foodItem.price * 1 } })
    }

    const handleNext = () => {
        if (state.items.length >= 1 && state.items.every(item => item.quantity >= 1)) {
            navigate("/order/schedule");
        } else {
            swal("Please select food to order", "", "warning");
        }
    };


    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} sx={{ mb: 5 }}>
                    <OrderBreadcrumbs current="orderFood" />
                    <Paper elevation={12} sx={{ minHeight: "60vh", mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Food Menu
                        </Typography>
                        {/* <Divider classes={{ root: classes.mainDivider }} /> */}
                        <Box sx={{ border: "2px solid", borderColor: "secondary.main", maxHeight: "clamp(300px,60vh,800px)", overflowY: "auto" }}>
                            {
                                foodMenu.map((food) => {
                                    return (
                                        <Box>
                                            <Box width="100%" display="flex" justifyContent="center">
                                                <Chip sx={{ mt: 7, mb: 2 }} color="primary" variant="outlined" label={
                                                    <Typography variant="h6">
                                                        {food.course}
                                                    </Typography>
                                                } />
                                            </Box>
                                            <ImageList
                                                sx={{
                                                    gridAutoFlow: "column",
                                                    gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr)) !important",
                                                    gridAutoColumns: "minmax(350px, 1fr)",
                                                }}>
                                                {
                                                    food.titles.map((title) => {
                                                        return (
                                                            <ImageListItem key={title.id} sx={{ border: "2px solid", borderColor: "secondary.main", mx: 2, mb: 2 }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="150"
                                                                    src={title.img}
                                                                />
                                                                <ImageListItemBar
                                                                    classes={{ titleWrap: classes.imgTextRoot, title: classes.imgTitle, subtitle: classes.imgSubtitle }}
                                                                    sx={{ height: "100%", p: 1, }} title={
                                                                        <Typography variant="body2" fontWeight={500} align="center">
                                                                            {title.name}
                                                                        </Typography>
                                                                    } subtitle={
                                                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2}>
                                                                            <Typography variant="body2">&#8369; {title.price}</Typography>
                                                                            <Button
                                                                                disabled={state.items.some(item => item.id === title.id)} color="secondary" variant="outlined" onClick={(e) => handleAddToCart(e, {
                                                                                    id: title.id, name: title.name, course: food.course, img: title.img, price: title.price
                                                                                })}>
                                                                                Add to Cart
                                                                            </Button>
                                                                        </Box>
                                                                    } position="below" />
                                                            </ImageListItem>
                                                        )
                                                    })
                                                }
                                            </ImageList>

                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <Box mt={5} width="100%" display="flex" justifyContent="space-between" alignItems="center">
                            <Button component={Link} to="/order" color="secondary" variant="contained" size='large'>
                                <NavigateBeforeIcon fontSize="large" />
                                <Typography variant="h6">View My Orders</Typography>
                            </Button>
                            <Button onClick={handleNext} color="secondary" variant="contained" size='large'>
                                <Typography variant="h6">Set Schedule/Delivery</Typography>
                                <NavigateNextIcon fontSize="large" />
                            </Button>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <OrderDetails />
                </Grid>
            </Grid>
        </Box>

    )
}

export default OrderFood;