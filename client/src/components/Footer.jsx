import React from 'react'
import { Box, Typography, Grid, InputBase, Button } from '@mui/material';


const styles = {
    root: {
        bgcolor: "black.main",
        color: "white.main",
        px: "clamp(50px, 7%, 200px)",
        py: "2%",
        position: 'absolute',
        left: 0,
        right: 0
    },
    subtitleTexts: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: "5%",
        gap: 0.5,
    },
    emailInput: {
        bgcolor: "white.main",
        color: "black.main",
        px: 2,
        height: 40,
        width: "100%",
        fontSize: "1em"
    },
    subscribe: {
        bgcolor: "neutral.main",
        color: "white.main",
        px: 3,
        borderRadius: 0,
        height: 40
    },
    info: {
        width: "100%",
        color: "neutral.main",
        textAlign: "center",
        mt: "2%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
};

export default function Footer() {

    const gridTexts = [
        { title: "Main Page", subtitles: ["My Orders", "My Appointments", "Featured Promos", "Best Sellers"] },
        { title: "About Us", subtitles: ["Our Vision", "Our Story", "Our Team"] },
        { title: "Contact Us", subtitles: ["Contact Details", "Send us a message"] }
    ];

    return (
        <Box sx={styles.root}>
            <Grid container spacing={1}>
                {gridTexts.map(content => {
                    return (
                        <Grid item xs={12} md={6} key={content.title} lg>
                            <Typography variant="footer_title">{content.title}</Typography>
                            <Box sx={styles.subtitleTexts}>
                                {content.subtitles.map(text => {
                                    return (
                                        <Typography key={text} variant="footer_subtitle" fontSize="0.85em">{text}</Typography>
                                    )
                                })}
                            </Box>
                        </Grid>
                    );
                })}
                <Grid item xs={12} lg={4}>
                    <Typography variant="footer_title">Want to subscribe to our newsletter?</Typography>
                    <Box sx={{ mt: 0.05 }}>
                        <Typography variant="footer_subtitle">You will receive promotions, updates, and discounts when you subscribe.</Typography>
                    </Box>
                    <Box sx={{ mt: "5%", display: "flex" }}>
                        <InputBase sx={styles.emailInput} placeholder="Enter your email address..." />
                        <Button sx={styles.subscribe}><Typography variant="subscribe">SUBSCRIBE</Typography></Button>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={styles.info}>
                <Typography variant="footer_info" align="center">
                    FoodnDate &copy; 2021 Final Capstone Project for KodeGo Web Development Batch 3: Exceeds
                </Typography>
                <Typography variant="footer_info" align="center">
                    Created by: Ryan Gerome Regis, Ralph Santolorin, and Ron Velarde.
                </Typography>
            </Box>


        </Box>
    )
}
