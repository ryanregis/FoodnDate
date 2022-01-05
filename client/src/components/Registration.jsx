import React from 'react'
import { Box, Typography, Button, IconButton, Divider, Grid, TextField, RadioGroup, Radio, FormControlLabel, MenuItem, Checkbox } from '@mui/material';
import { makeStyles } from '@mui/styles';
import theme from '../Theme';

import CloseIcon from '@mui/icons-material/Close';


const useStyles = makeStyles(() => ({
    root: {
        color: theme.palette.black.main,
        backgroundColor: theme.palette.background.paper,
        width: "clamp(300px, 80vw, 1500px)",
        minHeight: "clamp(400px, 80vh, 900px)",
        position: 'absolute',
        borderRadius: 30,
        padding: "10px 30px"
    },
    title: {
        display: "block",
        position: "relative",
        width: "100%",
        textAlign: "center"
    },
    inputFields: {
        display: "block",
        height: "100%",
        width: "100%",
        margin: "1% 0",
    },
    inputLabel: {
        "& .Mui-focused": {
            fontWeight: "bold"
        }
    },
}));

export default function Registration(props) {
    const classes = useStyles();
    const [has_allergies, setAllergies] = React.useState("");
    const [checked_promotions, setCheckedPromotions] = React.useState(false);

    const handleCheckPromotions = (e) => { setCheckedPromotions(e.target.checked) };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const personalInfoFieldInputs = [
        { label: "First Name", name: "first_name" }, { label: "Last Name", name: "last_name" },
        { label: "Contact Number", name: "contact_number", type: "number" },
        { label: "Address", name: "address" },
        { allergy: true },
        { label: "Email Address", name: "email", type: "email" },
        { label: "Password", name: "password", type: "password" },
        { label: "Confirm Password", name: "confirm_password", type: "password" },
    ];

    const relInfoFieldInputs = [
        { name: "relationship_status" },
        {
            label: "Gender", name: "gender", choices: [
                "Male (Cisgender)", "Female (Cisgender)",
                "Male (Transgender)", "Female (Transgender)",
                "Male (FtM - Transsexual)", "Female (MtF - Transsexual)",
                "Non-Binary", "Intersexual",
                "Genderqueer", "Gender Neutral", "Gender Fluid",
                "Agender", "Pangender", "Rather not say", "Others"]
        },
        {
            label: "Sexual Orientation", name: "sexual_orientation", choices: [
                "Straight / Heterosexual",
                "Gay", "Lesbian", "Bisexual",
                "Queer", "Questioning",
                "Asexual", "Demisexual",
                "Pansexual", "Rather not say", "Others"]
        },
        { name: "checked_promotions", label: "I want to receive weekly food discount promotions" },
        { submit_reset: true }
    ];

    return (
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h3" fontWeight={500}>Sign Up</Typography>
            </Box>
            <IconButton onClick={props.closeModal} sx={{ position: "absolute", top: "2%", right: "1%" }}>
                <CloseIcon fontSize="large" />
            </IconButton>
            <Typography align="center" variant="body2" sx={{ color: "neutral.main", my: 1 }}>Your dream virtual dinner date is just one appointment away.</Typography>

            <Divider><Typography variant="subtitle2">Personal Information</Typography></Divider>

            <Box className={classes.inputFields}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={1.5} mb={2}>
                        {personalInfoFieldInputs.map(input => {
                            return (
                                input.allergy

                                    ? <Grid item xs={12} md={5}>
                                        <Box display="flex" justifyContent="space-between" alignItems="center" ml={1.5} p={0}>
                                            <Box className={classes.allergyContainer}>

                                                <Typography fontSize="0.85rem">
                                                    Do you have any food allergies? <span style={{ color: theme.palette.primary.main }}>*</span>
                                                </Typography>

                                                <RadioGroup row
                                                    name="has_allergies" value={has_allergies}
                                                    onChange={(e) => setAllergies(e.target.value)}>
                                                    <FormControlLabel value="yes" control={<Radio required size="small" color="secondary" />} label={<Typography fontSize="0.85rem">Yes</Typography>} />
                                                    <FormControlLabel value="no" control={<Radio required size="small" color="secondary" />} label={<Typography fontSize="0.85rem">No</Typography>} />
                                                </RadioGroup>

                                            </Box>
                                            <Box className={classes.allergyInput}>
                                                <TextField required={has_allergies === "yes"}
                                                    size="small" disabled={has_allergies === "no" || !has_allergies} color="secondary" label="Input allergens here..."
                                                    helperText={has_allergies === "yes" ? "peanuts, dairy, gluten ..." : ""}
                                                />
                                            </Box>
                                        </Box>
                                    </Grid>

                                    : <Grid item xs={12} md={input.name === "address" ? 7 : 4}>
                                        <TextField fullWidth required
                                            className={classes.inputLabel}
                                            type={input.type ? input.type : "text"}
                                            size="small" variant="outlined"
                                            label={input.label} margin="dense" color="secondary"
                                            name={input.name} />
                                    </Grid>
                            )
                        })}

                    </Grid>

                    <Divider sx={{ my: 4 }}></Divider>

                    <Grid container spacing={1}>
                        {relInfoFieldInputs.map((input) => {
                            return (
                                input.name === "relationship_status"
                                    ? <Grid item xs={12} md={4}>
                                        <Typography>
                                            Are you in a relationship? <span style={{ color: theme.palette.primary.main }}>*</span>
                                        </Typography>
                                        <RadioGroup row name={input.name}>
                                            <FormControlLabel value="taken" control={<Radio color="secondary" required />} label="Yes" />
                                            <FormControlLabel value="single" control={<Radio color="secondary" required />} label="No" />
                                            <FormControlLabel value="complicated" control={<Radio color="secondary" required />} label="It's complicated" />
                                        </RadioGroup>
                                    </Grid>

                                    : input.name === "checked_promotions"
                                        ? <Grid item xs={12} md={8}>
                                            <FormControlLabel sx={{ width: "100%" }} control={<Checkbox color="secondary" name={input.name} checked={checked_promotions} onChange={handleCheckPromotions} />} label={input.label}></FormControlLabel>
                                        </Grid>

                                        : input.submit_reset
                                            ? <Grid item xs={12} md>
                                                <Box width="100%" display="flex" justifyContent="space-around" alignItems="center">
                                                    <Button type="reset" variant="contained" color="primary" size="large">RESET</Button>
                                                    <Button type="submit" variant="contained" color="secondary" size="large">SUBMIT</Button>
                                                </Box>
                                            </Grid>

                                            : <Grid item xs={12} md={4}>
                                                <TextField fullWidth required
                                                    className={classes.inputLabel}
                                                    select
                                                    size="small" variant="outlined"
                                                    label={input.label} margin="dense" color="secondary"
                                                    name={input.name} >
                                                    {
                                                        input.choices.map((choice, index) => {
                                                            return (
                                                                <MenuItem key={choice} value={index + 1}>
                                                                    <Typography variant="subtitle1">{choice}</Typography>
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </TextField>
                                            </Grid>
                            )
                        })
                        }
                    </Grid>
                </form>
            </Box>
        </Box >
    )
}
