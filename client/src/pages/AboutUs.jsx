import React from 'react'
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box, Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import "../App.css";


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
            position: "Administration",
            imgSource:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name:"Ryan Gerome Regis",
            description: "To make your date more engaging through our virtual date meeting system and timely food delivery.",
        }, 
        {
            position: "Logistics",
            imgSource:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name:"Ronald Velarde",
            description: "To deliver the classy feeling of a restaurant even though you and your date are both staying at their corresponding homes.",
        },
        {
            position: "Promotion",
            imgSource:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name:"Ralph Santolorin",
            description: "To offer the most satisfying menu to satiate not just your body but also your soul."
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
                                    
                                        <Box className={styles.vision} mx='auto' key={index} p={10}>
                                            <Card sx={{ maxWidth: 300, bgcolor: 'secondary.main', color: 'white.main', padding: '5%'}}>
                                                <CardActionArea>
                                                <   Typography gutterBottom variant="h5" component="div">
                                                        {item.position}
                                                    </Typography>
                                                    <CardMedia
                                                    component="img"

                                                    image={item.imgSource}
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
