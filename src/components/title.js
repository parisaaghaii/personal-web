import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',marginBottom: 60 , height: 75, width: "100%" ,
    },
    title: {
        textAlign: 'left',
        zIndex: 5,
        "&::after": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 35,
            backgroundColor: "#037fff",
            zIndex: 2,
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 100,
            backgroundColor: "rgba(3, 127, 255, 0.3)",
            zIndex: 2,
        },

    },
    subtitle: {
        fontSize: '3.2rem',
        position: 'absolute',
        left: 10,
        top: '140%',
        lineHeight: "1rem",
        fontWeight: 900,
        color: '#9892922b',
        display: 'inline-block',
        zIndex: 0,
        transform: 'translateY(-40%)',
        top: 62,
    },

}))
export default function Title({ title }) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h2">{title}</Typography>
            <Typography className={classes.subtitle}>{title}</Typography>
        </div>
    )
}
