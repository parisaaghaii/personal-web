import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { getTranslate } from "../localization/index";



const useStyles = makeStyles(theme => ({
    root: {
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
    image: {
        width: "100%",
    },
    title: {
        cursor: 'pointer',
        textAlign: 'left',
        "& a": {
            textDecoration: "none",
            transition: ".4s",
            color: "#FFF",
            "&:hover": {
                color: theme.palette.primary.main,
                transition: ".4s",
            },
        },
    },
}))

export default function Portfolios({ image, title, desc, href }) {
    const classes = useStyles()
    const translate = getTranslate()

    return (
        <Grid item lg={4} className={classes.root}>
            <img className={classes.image} src={image} alt={title} />
            <Typography className={classes.title} variant="h5"><a href={href}>{title}</a></Typography>
            <Typography variant="body1">{desc}</Typography>
        </Grid>
    )
}
