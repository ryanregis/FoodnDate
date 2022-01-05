import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles'
import theme from '../Theme';
import { ThemeProvider, Typography, Box, Button, TextField} from '@mui/material';


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
        padding: '2%',
        textAlign:'center'
    },
    formInput: {
        borderRadius:'10px', 
        marginBottom:'5%',
        color: 'black',
        fontSize: 'clamp(1.1rem, 1vw, .5rem)'
    }

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
                        <Box   p={8} > 
                        <form >
                            <TextField  fullWidth name="name" type="text" color='black' label="Name" variant='filled' sx={{bgcolor:'white.main'}} className={classes.formInput}/>
                            <TextField  fullWidth name="email" type="email" color='black'  label="Email" variant='filled' sx={{bgcolor:'white.main', borderRadius:'10px'}} className={classes.formInput}/>
                            <TextField multiline rows={3}  fullWidth name="message" type="email" color='black'  label="Message" variant='filled' sx={{bgcolor:'white.main'}} className={classes.formInput}/>
                            <Button  sx={{bgcolor:'black.main'}} variant="contained" className={classes.formInput}>
                                SEND <SendIcon sx={{marginLeft: '30%'}}/>
                            </Button>
                        </form>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default ContactUs
