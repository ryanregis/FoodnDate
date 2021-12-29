import React from 'react'
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box} from '@mui/material';
import Image from '../icons/android-chrome-192x192.png';


const useStyles = makeStyles(() => ({
    aboutBg : {
        backgroundColor: '#EDF2F6'
    },
    hero : {
        backgroundImage: `url(${Image})`,
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
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{bgcolor: 'white.main'}}> 
                    <div className={styles.hero}>
                        <Box >
                            <p style={{textAlign:'left'}}>Not just for <b>convenience</b> but also for ....</p>
                            <p style={{textAlign:'right'}}><b>sophistication</b></p>
                        </Box>
                    </div>
                    <div>
                        <Typography sx={{ textAlign:'center'}} variant='h3'>Our Vision</Typography>
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
                </Box>
            </ThemeProvider>
        </>
    )
}

export default AboutUs
