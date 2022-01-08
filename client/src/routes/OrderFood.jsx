import React from 'react'
import { Link } from 'react-router-dom';

import {
    Paper, Box, Typography, Chip, Grid, Divider, Button,
    ImageList, ImageListItem, ImageListItemBar, CardMedia
} from "@mui/material";
import { makeStyles } from '@mui/styles';

import theme from '../Theme';
import { OrderDetails, OrderBreadcrumbs } from "../components";
import { foodMenu } from '../constants';
import { beefStew } from '../assets/images/images';

const useStyles = makeStyles(() => ({
    orderFood: {
        minHeight: "60vh",
        color: theme.palette.black.main,
    },
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
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} className={classes.orderFood}>
                    <OrderBreadcrumbs current="orderFood" />
                    <Paper elevation={12} sx={{ mx: 5, borderRadius: 5, p: 5 }}>
                        <Typography sx={{ mb: 2, color: "black.main" }} variant="h4" align="center" fontWeight={700}>
                            Food Menu
                        </Typography>
                        <Divider classes={{ root: classes.mainDivider }} />
                        <Box sx={{ maxHeight: "clamp(300px,60vh,800px)", overflowY: "auto", overflowX: "hidden" }}>
                            {
                                foodMenu.map((food) => {
                                    return (
                                        <Box>
                                            <Box width="100%" display="flex" justifyContent="center">
                                            <Chip sx={{ mt: 5, mb:2 }} color="primary" variant="outlined" label={
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
                                                            <ImageListItem sx={{ border: "2px solid", borderColor: "secondary.main", mx: 2 }}>
                                                                <CardMedia
                                                                    component="img"
                                                                    height="150"
                                                                    src={beefStew}
                                                                />
                                                                <ImageListItemBar
                                                                    classes={{ titleWrap: classes.imgTextRoot, title: classes.imgTitle, subtitle: classes.imgSubtitle }}
                                                                    sx={{ height: 100, p: 1 }} title={
                                                                        <Typography variant="body2" fontWeight={500} align="center">
                                                                            {title}
                                                                        </Typography>
                                                                    } subtitle={
                                                                        <Button color="secondary" variant="outlined">
                                                                            Add to Cart
                                                                        </Button>
                                                                    } position="below" />
                                                            </ImageListItem>
                                                        )
                                                    })
                                                }
                                            </ImageList>
                                            <Divider />
                                        </Box>
                                    )
                                })
                            }
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