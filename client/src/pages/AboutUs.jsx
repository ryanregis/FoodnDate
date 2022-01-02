import React from 'react'
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box, Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
//import Image from '../icons/android-chrome-192x192.png';


const useStyles = makeStyles(() => ({
    aboutBg : {
        backgroundColor: '#EDF2F6'
    },
    hero : {
        backgroundImage: `url(https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        color: "#EDF2F6",
        paddingRight: '20%',
        paddingLeft: '20%',
        paddingTop: '2%',
        paddingBottom: '2%',
        fontSize: 'clamp(1rem, 2vw, 2rem)',
    },
    vision : {
        textAlign: 'center',
        padding: '2%'
    },
    story: {
        fontWeight: '500',
        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
        align:'center',
        fontFamily:'Roboto, Helvetica, Arial, sans-serif',
        
    }

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
                    <div className={styles.hero}>
                        <Box >
                            <p style={{textAlign:'left'}}><i>Not just for <b>convenience</b> but also for ....</i></p>
                            <p style={{textAlign:'right'}}><i><b>sophistication</b></i></p>
                        </Box>
                    </div>
                    <div>
                        <Typography align='center' variant='h3' pt={2}>Our Vision</Typography>
                    </div>
                    <Box className={styles.vision} sx={{ display: 'grid', gridTemplateColumns: {sm:'1fr 1fr 1fr 1fr', xs:'1fr'}, gap:2}}>
                        {visionContent.map((item) => {
                                return (
                                    
                                        <Box className={styles.vision}>
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
                    <Box sx={{backgroundColor:"#DD7878", display: 'grid', gridTemplateColumns: {sm:'1fr 1fr', xs:'1fr'}, gap:4, padding:'5%'}}>
                        <div>
                            <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmUlMjBkaW5pbmclMjB3aW5lJTIwZ2xhc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt='props' width='90%' height='400px'/>
                        </div>
                        <div>
                            <Typography  sx={{color: 'white.main'}} variant='h4' align='center'>Our Story</Typography>{<br></br>}
                            <Typography sx={{color: 'white.main'}} className={styles.story}>From the simple aspirations to bring food with convenience and deliver a novel restaurant experience to your 
                                        home comes our idea to create FoodnDates.com {<br></br>}{<br></br>} Founded on December of 2021, FoodnDate aims to capitalize on the 
                                        current problems brought by the COVID-19 pandemic which hinders the gathering of people especially for meeting up or dates.
                            </Typography>
                        </div>
                    </Box> 
                    <div>
                        <Typography align='center' variant='h3' pt={2}>Our Team</Typography>
                    </div>
                    <Box className={styles.vision} sx={{ display: 'grid', gridTemplateColumns: {sm:'1fr 1fr 1fr', xs:'1fr'}, gap:2, align:'center'}}>
                        {teamContent.map((item) => {
                                return (
                                    
                                        <Box className={styles.vision} sx={{mx:'auto'}}>
                                            <Card sx={{ maxWidth: 300, bgcolor: 'secondary.main', color: 'white.main' }}>
                                                <CardActionArea>
                                                <   Typography gutterBottom variant="h5" component="div">
                                                        {item.position}
                                                    </Typography>
                                                    <CardMedia
                                                    component="img"
                                                    height="140"
                                                    width="140"
                                                    image={item.imgSource}
                                                    alt="green iguana"
                                                    sx={{borderRadius:'50%'}}
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
