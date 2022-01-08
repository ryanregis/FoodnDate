import React from 'react'
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box, Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import "../App.css";
import {ronPic, ryanPic, ralphPic} from '../assets/images/images.js';

const useStyles = makeStyles(() => ({
    aboutBg : {
        backgroundColor: '#EDF2F6'
    },
    vision : {
        textAlign: 'center',
        padding: '4%'
    },
    image:{
        width: 'clamp(10rem, 2vw, 12rem)',
        height: 'clamp(10rem, 2vw, 12rem)',
        borderRadius: '50%',
        objectFit: 'cover',
        margin:'auto'
    },
    ourTeam: {
        textAlign: 'center',
        padding: '4%',
        boxShadow: '4px 4px 4px 4px #DD7878'
    },

}))
const AboutUs = () => {
    const styles = useStyles();
    const visionContent = [
        {
            title: "Connectivity",
            description: "To make your date more engaging through our virtual date meeting system and timely food delivery.",
        }, 
        {
            title: "Eloquence",
            description: "To deliver the classy feeling of a restaurant even though you and your date are both staying at their corresponding homes.",
        },
        {
            title: "Satisfaction",
            description: "To offer the most satisfying menu to satiate not just your body but also your soul."
        },
        {
            title: "Membership",
            description: "To give you the freedom to monitor your own orders and help us create a better platform.",
        }
    ];
    const teamContent = [
        {
            position: "Logistics",
            imgSource: ronPic,
            name:"Ronald Velarde",
            description: "It is always a goal to strive better in all ways possible and to exceed every high expectations by pushing ourself beyond the limits.",
        },
        {
            position: "Administration",
            imgSource: ryanPic,
            name:"Ryan Gerome Regis",
            description: "I believe such a mindset creates a sense of determination, ambition, and perseverance necessary to succeed in our growing world.",
        },
        {
            position: "Promotion",
            imgSource: ralphPic,
            name:"Ralph Santolorin",
            description: "I am aware that flaws and imperfections not only motivates us to improve, but gives enough humility no matter how big we get in ."
        },
    ];
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{bgcolor: 'white.main'}}> 
                    <div className='intro'>
                        <Box >
                            <p style={{textAlign:'left'}}><i>Not just for <b>convenience</b> but also for ....</i></p>
                            <p style={{textAlign:'right'}}><i><b>sophistication</b></i></p>
                        </Box>
                    </div>
                    <div>
                        <Typography align='center' variant='h3' pt={2}>Our Vision</Typography>
                    </div>
                    <Box className={styles.vision} sx={{ display: 'grid', gridTemplateColumns: {sm:'1fr 1fr 1fr 1fr', xs:'1fr'}, gap:2}}>
                        {visionContent.map((item, index) => {
                                return (
                                    
                                        <Box className={styles.vision} key={index}>
                                            <Typography >
                                                    <b>{item.title}</b>
                                            </Typography>
                                            <Typography >
                                                    {item.description}
                                            </Typography>
                                        </Box> 
                                )
                            })}
                    </Box> 
                    <Box className='our-story'>
                        <Box p={10}>
                            <Typography  sx={{color: 'white.main'}} variant='h3' align='center'>Our Story</Typography>{<br></br>}
                            <Typography variant='body1' sx={{color: 'white.main'}} >From the simple aspirations to bring food with convenience and deliver a novel restaurant experience to your 
                                        home comes our idea to create FoodnDates.com {<br></br>}{<br></br>} Founded on December of 2021, FoodnDate aims to capitalize on the 
                                        current problems brought by the COVID-19 pandemic which hinders the gathering of people especially for meeting up or dates.
                            </Typography>
                        </Box>
                    </Box> 
                    <div>
                        <Typography align='center' variant='h3' pt={2}>Our Team</Typography>
                    </div>
                    <Box className={styles.vision} sx={{ display: 'grid', gridTemplateColumns: {sm:'1fr 1fr 1fr', xs:'1fr'}, gap:2, align:'center'}}>
                        {teamContent.map((item, index) => {
                                return (
                                    
                                        <Box className={styles.ourTeam} mx='auto' key={index} p={10}>
                                            <Card variant='contained' sx={{ maxWidth: 300, bgcolor: 'secondary.main', color: 'white.main', padding: '5%'}}>
                                                <CardActionArea>
                                                <   Typography gutterBottom variant="h5" component="div">
                                                        {item.position}
                                                    </Typography>
                                                    <CardMedia
                                                    component="img"
                                                    src={item.imgSource}
                                                    alt="profilepic"
                                                    className={styles.image}
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="div">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="white.main">
                                                        {item.description}
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Box> 
                                )
                            })}
                    </Box>  
                </Box>
            </ThemeProvider>
        </>
    )
}

export default AboutUs
