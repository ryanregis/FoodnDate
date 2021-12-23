import React from 'react'
import { makeStyles } from '@mui/styles'
import { createTheme } from "@mui/material/styles";
import { ThemeProvider, Typography, Box} from '@mui/material';
const useStyles = makeStyles(() => ({
    aboutBg : {
        backgroundColor: '#EDF2F6'
    }
}))
const AboutUs = () => {
    const styles = useStyles();
    return (
        <div>
            <Box className={styles.aboutBg}>
                <h1>About Us</h1>
            </Box>
        </div>
    )
}

export default AboutUs
