import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Grid, Typography } from "@material-ui/core";
import './home.css';
import TelegramIcon from '@material-ui/icons/Telegram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { getTranslate } from "../localization/index";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: 'hidden',
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')] :{
            display: 'block',
        },
    },
    divIcon: {
        marginTop: 25,
    },
    iconButtonStyle: {
        border: "2px solid #2e344e",
        marginLeft: 8,
        marginRight: 8,
        transition: "0.5s",
        color: '#a4acc4',
        "&:hover": {
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            transition: "1s",
        }
    },

}))
export default function Homescreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <div className={classes.root}>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <Grid>
                <Typography variant="h1" >{translate.hi} <span className={classes.nameText} >{translate.name}</span>{translate.hi2} </Typography>
                <Typography variant="subtitle1">
                   {translate.desc}
                </Typography>
                <div className={classes.divIcon}>
                    <IconButton className={classes.iconButtonStyle} >
                        <TelegramIcon />
                    </IconButton>
                    <IconButton color="primary" className={classes.iconButtonStyle} >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="primary" className={classes.iconButtonStyle} >
                        <InstagramIcon />
                    </IconButton>
                </div>
            </Grid>
        </div>

    )
}
