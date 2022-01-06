import React from 'react'
import { Grid, Box, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import theme from '../Theme';
import Carousel from 'react-material-ui-carousel';
import "../App.css";
import beefStew from '../assets/images/images';

const useStyles = makeStyles(() => ({
    viewScheds: {
        borderRadius: '20px',
        border: '5px solid #9B9DA4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        gap:'10px',
        fontSize: 'clamp(1.5rem, 1vw, 1.5rem)',
    },
    buttonOrder: {
        borderRadius: '20px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
        fontSize: 'clamp(1rem, 1vw, 1.5rem)',
    },
    buttonAppoint: {
        borderRadius: '20px',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white.main,
        fontSize: 'clamp(1rem, 1vw, 1.5rem)',
    },
    bestSeller: {
        border: '5px solid #FF5656',
        borderRadius: '25px',
    }
}))
export default function Home() {
    const promo = [
        {
            bgImg: "holiday-promo",
            description: "Get Our Free Delivery Coupon This Holiday",
            date: "Starts at December 25, 2021 Valid until January 31, 2022"
        },
        {
            bgImg: "feb-promo",
            description: "Dont miss out on Our Food Promo for Your Valentine",
            date: "Coming soon this February 14, 2022"
            
        },
        {
            bgImg: "bundle-promo",
            description: "Stay Updated to Our Food Package Promos",
            date: "Subscribe to our Newsletter Today"
        }
      ];
    const besSel = [
        {
            imgSrc: <beefStew/>,
            title: 'Boeuf Bourguignon (Beef Stew)',
            type: 'Main Dish',
            description: 'The staple for those looking for a comfort food. And gives the fresh aroma of the herbs with its melt in the mouth gelatinous texture of the meat',
        },
        {
            imgSrc: 'https://www.thespruceeats.com/thmb/yrx_72PbGi5aXCC6vGgy-gQAaBs=/3000x1687/smart/filters:no_upscale()/french-boeuf-bourguignon-recipe-1375523-d9ae2ba0ea394f71bc2576a3a0ea277e.jpg',
            title: 'Cheese Souffle',
            type: 'Appetizer',
            description: 'Top pick for the fans of cheese',
        },
        {
            imgSrc: 'https://www.thespruceeats.com/thmb/yrx_72PbGi5aXCC6vGgy-gQAaBs=/3000x1687/smart/filters:no_upscale()/french-boeuf-bourguignon-recipe-1375523-d9ae2ba0ea394f71bc2576a3a0ea277e.jpg',
            title: 'Mousse Au Chocolat',
            type: 'Dessert',
            description: 'The number 1 choice for chocolate lovers',
        },
        {
            imgSrc: 'https://www.thespruceeats.com/thmb/yrx_72PbGi5aXCC6vGgy-gQAaBs=/3000x1687/smart/filters:no_upscale()/french-boeuf-bourguignon-recipe-1375523-d9ae2ba0ea394f71bc2576a3a0ea277e.jpg',
            title: 'Mouton Cadet Bordeaux Rouge',
            type: 'Red Wine Drink',
            description: 'The great drink compliment for any meals',
        },
        {
            imgSrc: 'https://www.thespruceeats.com/thmb/yrx_72PbGi5aXCC6vGgy-gQAaBs=/3000x1687/smart/filters:no_upscale()/french-boeuf-bourguignon-recipe-1375523-d9ae2ba0ea394f71bc2576a3a0ea277e.jpg',
            title: 'Croissant',
            type: 'Side Dish',
            description: 'Great as a simple snack after meal',
        },
    ];
    const classes = useStyles();
    return (
        <div>
            <Grid container sx={{bgcolor:'white.main'}}>
                <Grid p={3} item sm={12} xs={12}>
                    <Typography variant='h4'>Welcome, @user!</Typography>
                </Grid>
                <Grid p={3} container  spacing={2}>
                    <Grid item sm={4} xs={12}>
                        <Box p={1} variant='contained' className={classes.viewScheds}>
                            You have 0 food orders. 
                            <Link to='/'>
                                    <Typography p={1} className={classes.buttonOrder}>
                                        View My Order
                                    </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Box p={1} variant='contained' className={classes.viewScheds}>
                            You have no upcoming virtual date.. 
                            <Link to='/appointment'>
                                    <Typography p={1} className={classes.buttonAppoint}>
                                        View My Appointments
                                    </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item sm={12} xs={12}>
                    <Typography align='center' variant='h3' m={2}><b>FEATURED PROMOS</b></Typography>
                    <Carousel sx={{ height: '40vh'}}>
                        {promo.map((item, index) => (
                            <Box key={index} >
                                <Box className={item.bgImg}>
                                    <Typography variant='h3'>{item.description}</Typography>
                                    <Typography>{item.date}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Carousel>
                </Grid>
                <Grid container p={3}  >
                    <Grid item sm={12} xs={12}>
                        <Typography align='center'  variant='h3' m={2}><b>BEST SELLERS</b></Typography>
                    </Grid>
                    <Box sx={{ display: 'grid', gridTemplateColumns: {sm:'25% 30% 30%', xs:'1fr'}, gridTemplateRows: { sm: '1fr, 1fr'}, gap:3, justifyContent:'center' }}>
                        {besSel.map((item, index) => (
                            <Card sx={{gridRow:index === 0 ? '1/3' : 'auto'}} className={classes.bestSeller} key={index}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="150"
                                        image={item.imgSrc}
                                        alt="Boeuf Bourguignon (Beef Stew)"
                                    />
                                    <CardContent align='center'>
                                        <Typography variant='h5'><b>{item.title}</b></Typography>
                                        <Typography variant='h6'>{item.type}</Typography>
                                        <Typography variant='body1'>{item.description}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}
