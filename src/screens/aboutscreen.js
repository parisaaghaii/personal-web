import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Service from '../components/service'
import Title from '../components/title'
import { getTranslate } from "../localization/index";
import MainImage from '../assets/images/about.jpg'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import CodeIcon from '@material-ui/icons/Code'
import WebIcon from '@material-ui/icons/Web'

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
    },
    aboutGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 30,
        paddingRight: 30,
    },
    nameText: {
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            display: 'block',
        },
    },
    MainImage: {
        width: "100%",
        height: "100%",
    },
    ImageGrid: {
        height: 400,
        position: 'relative',
        "&::after": {
            content: "''",
            position: 'absolute',
            right: 0,
            top: "Auto",
            height: "65%",
            bottom: 0,
            width: 15,
            backgroundColor: "rgba(3, 127, 255, .6)",
        },
        "&::before": {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 0,
            height: "65%",
            width: 15,
            backgroundColor: "rgba(3, 127, 255, .6)",
        },
    },
    aboutTextGrid: {
        paddingRight: 30,
        paddingLeft: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: 15,
            marginBottom: 15,
        }
    },
    iconStyle: {
        fontSize: 46,
        color: theme.palette.primary.main
    },
}))
export default function Aboutscreen() {
    const classes = useStyle()
    const translate = getTranslate()
    return (
        <Grid justify='felex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.aboutGrid} item container xs={12}>
                <Title title={translate.aboutme} />
                <Grid container diraction='row' >
                    <Grid item xs={12} md={6} className={classes.ImageGrid} >
                        <img className={classes.MainImage} src={MainImage} alt={translate.name} />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.aboutTextGrid}>

                        <Typography variant="h3" >{translate.hi} <span className={classes.nameText} >{translate.name}</span>{translate.hi2} </Typography>
                        <Typography variant="body1" style={{ marginTop: 10 }}>
                            {translate.desc}
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: 15 }}>
                            <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.fullname}</b>
                            {' : '}
                            {translate.name}
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: 5 }}>
                            <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.age} </b>
                            {' : '}
                            24 {translate.years}
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: 5 }}>
                            <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.nationality}</b>
                            {' : '}
                            {translate.iranian}
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: 5 }}>
                            <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.languages}</b>
                            {' : '}
                            {translate.persian} , {translate.english}
                        </Typography>
                        <Typography variant='body1' style={{ marginTop: 5 }}>
                            <b style={{ minWidth: 100, display: 'inline-block' }}>{translate.phone}</b>
                            {' : '}
                            (+98)9225256960
                        </Typography>
                        <div style={{ display: 'flex', marginTop: 20 }}>
                            <Button variant="contained" color="primary">
                                {translate.downloadcv}
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid className={classes.aboutGrid} item container xs={12}>
                    <Title title={translate.services} />
                    <Grid container diraction='row' >
                        <Service 
                        icon={<WebIcon className={classes.iconStyle} />}
                         title={translate.webdesign} 
                        desc={translate.servicedesc} />
                        <Service 
                        icon={<CodeIcon className={classes.iconStyle} />}
                        title={translate.webdevelopment}
                        desc={translate.servicedesc} />
                        <Service 
                        icon={<PhoneAndroidIcon className={classes.iconStyle} />}
                        title={translate.mobileapp} 
                        desc={translate.servicedesc} />
                    
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
