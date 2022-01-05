import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box, Button, FormControl, Input, InputLabel} from '@mui/material';


const useStyles = makeStyles(()=>({
    conSend: {
        padding: '5%',
        
    },
    contactUs: {
        backgroundColor: '#DD7878',
        fontFamily:'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '500',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        padding: '2%',
        
    },
    sendUs: {
        fontFamily:'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '700',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
        padding: '2%',
    },
    inputstyles: {
        backgroundColor: '#FFFEFF',
        borderRadius: '5px',
        padding: '0.5rem',
        fontWeight: '100',
        fontSize:'clamp(1rem, 3vw, 1.5rem)',
    },
    labelstyles: {
        color: 'black',
        fontWeight: '100',
        fontSize: 'clamp(1rem, 3vw, 1.5rem)',
    },
}));
const contact = [
    {
        iconImg: <ContactMailIcon/>,
        content: "1296 EDSA, Balintawak 1106,   Quezon City, Philippines",
    },
    {
        iconImg: <PhoneAndroidIcon/>,
        content: "+6392546789",
    },
    {
        iconImg: <MailIcon/>,
        content: "fnd@gmail.com",
    },
]
const ContactUs = () => {
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box className={classes.conSend} sx={{bgcolor: 'white.main',  display: 'grid', gridTemplateColumns: {sm:'1fr 1fr', xs:'1fr'}}} >
                    <Box className={classes.contactUs} sx={{ color: 'white.main'}} variant='contained'> 
                        <Typography variant='h4' align='center'>Contact Us</Typography>
                        <Box >
                            {contact.map((item, index)=> {
                                return (
                                    <Box key={index} sx={{display: 'flex', flexDirection:'row', p:3, mx:5, gap: 3}}>
                                            {item.iconImg}
                                            {item.content}
                                    </Box> 
                                )
                            })}
                            <Typography variant='h5' align='center'>OR FOLLOW US VIA</Typography>
                            <Box sx={{display: 'flex', flexDirection:'row', p:3, gap: 5, mx: 'auto', width: 200}}>
                                <FacebookIcon sx={{ color: "secondary.main", fontSize: "2.5rem", bgcolor: "white.main", borderRadius: '10px' }} />
                                <TwitterIcon sx={{ color: "secondary.main", fontSize: "2.5rem", bgcolor: "white.main", borderRadius: '10px' }} />
                                <InstagramIcon sx={{ color: "secondary.main", fontSize: "2.5rem", bgcolor: "white.main", borderRadius: '10px' }} />
                            </Box>
                        </Box>
                    </Box>
                    <Box variant='contained' className={classes.sendUs} sx={{bgcolor: 'secondary.main', color: 'white.main'}}>
                        <Typography variant='h4' align='center'>Send Us A Message</Typography>
                        <Box sx={{display: 'flex', flexDirection:'row', p:3, gap: 5, mx: 'auto'}}>
                            <form>
                                <div>
                                    <FormControl sx={{ margin: '3%' }}>
                                        <InputLabel className={classes.labelstyles} htmlFor="name" >Input Your Name</InputLabel>
                                        <Input className={classes.inputstyles} type="text"  id="name" name="name" required />
                                    </FormControl>
                                </div>

                                <div>
                                    <FormControl sx={{ margin: '3%' }}>
                                        <InputLabel className={classes.labelstyles} htmlFor="email" >Input Your Email</InputLabel>
                                        <Input className={classes.inputstyles}  id="email" name="email" type="email" required />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl sx={{ width: 'clamp(13rem,10vmax, 100px)' }}>
                                        <InputLabel className={classes.labelstyles}  htmlFor="message">Send Your Message</InputLabel>
                                        <Input className={classes.inputstyles} id="message" name="message" type="text"  multiline minRows='2' maxRows='4' required />
                                    </FormControl>
                                </div>
                                <div >
                                    <Button sx={{ m: 4 }} variant='contained' color='info' type="submit" align='center'>Send</Button>
                                    
                                </div>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default ContactUs
