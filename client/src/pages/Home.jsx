import React from 'react'
import { Grid, Box, Typography, Card, CardActionArea, CardContent, CardMedia, Divider } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

import Carousel from 'react-material-ui-carousel';
import "../App.css";
import {beefStew, cheeseSouffle, mousseChocolat, redWine, croissant} from '../assets/images/images.js';
import theme from '../Theme';

const useStyles = makeStyles(() => ({

    bestSeller: {
        border: '5px solid #FF5656',
        borderRadius: '25px',
    },
    carousel: {
        height: '50vh'
    },
    divider :{
        background: theme.palette.black.main,
        width:'100%'
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
            imgSrc: beefStew,
            title: 'Boeuf Bourguignon (Beef Stew)',
            type: 'Main Dish',
            description: 'The staple for those looking for a comfort food. And gives the fresh aroma of the herbs with its melt in the mouth gelatinous texture of the meat',
        },
        {
            imgSrc: cheeseSouffle,
            title: 'Cheese Souffle',
            type: 'Appetizer',
            description: 'Top pick for the fans of cheese',
        },
        {
            imgSrc: mousseChocolat,
            title: 'Mousse Au Chocolat',
            type: 'Dessert',
            description: 'The number 1 choice for chocolate lovers',
        },
        {
            imgSrc: redWine,
            title: 'Mouton Cadet Bordeaux Rouge',
            type: 'Red Wine Drink',
            description: 'The great drink compliment for any meals',
        },
        {
            imgSrc: croissant,
            title: 'Croissant',
            type: 'Side Dish',
            description: 'Great as a simple snack after meal',
        },
    ];
    const classes = useStyles();
    return (
        <div>
            <Grid container sx={{bgcolor:'white.main'}}>
                <Divider classes={{ root: classes.divider }} sx={{mt: 4}}/>
                <Grid item sm={12} xs={12}>
                    <Typography align='center' variant='h4' m={2} sx={{color:'secondary.main'}}><b>FEATURED PROMOS</b></Typography>
                    <Carousel className={classes.carousel}>
                        {promo.map((item, index) => (
                            <Box sx={{height:'50vh'}} className={item.bgImg}  key={index}>
                                <Typography variant='h3'>{item.description}</Typography>
                                <Typography mt={4}>{item.date}</Typography>
                            </Box>
                        ))}
                    </Carousel>
                </Grid>
                <Divider classes={{ root: classes.divider }} sx={{mt: 4}}/>
                <Grid container p={3}  >
                    <Grid item sm={12} xs={12}>
                        <Typography align='center'  variant='h4' m={2} sx={{color:'primary.main'}}><b>BEST SELLERS</b></Typography>
                    </Grid>
                    <Box px={10} sx={{ display: 'grid', gridTemplateColumns: {sm: '1fr 1fr', xs:'1fr'}, gridTemplateRows: { sm: '1fr 1fr 1fr'}, gap:3, justifyContent:'center'}}>
                        {besSel.map((item, index) => (
                            <Card sx={{gridColumn:index === 0 ? '1/3' : 'auto'}} className={classes.bestSeller} key={index}>
                                <CardActionArea>
                                    <Box sx={{display: 'grid', gridTemplateColumns: {sm:'1fr 1fr', xs:'1fr'}}}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            src={item.imgSrc}
                                            alt="Boeuf Bourguignon (Beef Stew)"
                                        />
                                        <CardContent align='center' sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                            <Typography variant='h5'><b>{item.title}</b></Typography>
                                            <Typography variant='subtitle1' sx={{color:'neutral.main'}}>{item.type}</Typography>
                                            <Typography variant='h6' fontWeight={400}>{item.description}</Typography>
                                        </CardContent>

                                    </Box>
                                </CardActionArea>
                            </Card>
                        ))}
                    </Box>
                </Grid>
                <Divider classes={{ root: classes.divider }} sx={{mb: 4}}/>
                
            </Grid>
        </div>
    )
}
