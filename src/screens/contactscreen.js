import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import Service from '../components/service'
import Title from '../components/title'
import { getTranslate } from "../localization/index";
import './contact.css'
import Contact from '../components/contact'
import CallIcon from '@material-ui/icons/Call'
import EmailIcon from '@material-ui/icons/EmailOutlined'
import AddresIcon from '@material-ui/icons/RoomOutlined'

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
    },
    contactGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 30,
        paddingRight: 30,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
            paddingRight: 5,
        },
    },
    formGrid: {
        padding: 10,
    },
    detailsGrid: {
        padding: 10,
    },
    getintouch: {
        textAlign: 'left',
    },
    iconStyle: {
        fontSize: 35,
    },
}))
export default function Contactscreen() {
    const classes = useStyle()
    const translate = getTranslate()
    return (
        <Grid justify='felex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.contactGrid} item container xs={12}>
                <Title title={translate.contactme} />
                <Grid container diraction='row' >
                    <Grid item xs={12} md={6} className={classes.formGrid} >
                        <Typography className={classes.getintouch} variant="h4">{translate.getintouch}</Typography>
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.enteryourname}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.enteryouremail}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.enteryoursubject}
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginTop: 25 }}
                            size="medium"
                            fullWidth
                            required
                            label={translate.enteryourmessage}
                            variant="outlined"
                            multiline={true}
                            rows={5}
                        />
                        <Button variant="contained" color="primary" size="large" style={{ marginTop: 25, display: 'flex' }}>{translate.sendmessage}</Button>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.detailsGrid}>
                        <Contact
                            icon={<CallIcon className={classes.iconStyle} />}
                            title={translate.icontitlephon}
                            text1="+98-922-525-6960"
                            text2="+98-922-525-6960"
                        />
                       <Contact
                            icon={<EmailIcon className={classes.iconStyle} />}
                            title={translate.icontitleemail}
                            text1="parisaa.aghaii@gmail.com"
                            text2="parisa.aghaii@yahoo.co.uk"
                        />
                         <Contact
                            icon={<AddresIcon className={classes.iconStyle} />}
                            title={translate.icontitleaddres}
                            text1={translate.addrescontact}
                            text2=""
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

