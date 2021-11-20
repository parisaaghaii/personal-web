import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";
import Skill from '../components/skill'
import Title from '../components/title'
import { getTranslate } from "../localization/index";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary'
import MySteper from '../components/MyStepper'

const useStyle = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
    },
    skillGrid: {
        paddingTop: 60,
        paddingBottom: 60,
        paddingLeft: 30,
        paddingRight: 30,
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 5,
            paddingRight: 5,
        }
    },
    skillSecondTitle: {
        marginLeft: 10,
    },
}))
export default function Resumescreen() {
    const classes = useStyle()
    const translate = getTranslate()


    return (
        <Grid justify='felex-start' alignItems='flex-start' container className={classes.root}>
            <Grid className={classes.skillGrid} item container xs={12}>
                <Title title={translate.myskills} />
                <Grid container diraction='row' >
                    <Grid item xs={12} md={6}  >
                        <Skill value={90} title="HTML5" />
                        <Skill value={90} title="Java Script" />
                        <Skill value={95} title="React js" />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Skill value={75} title="React Nativ" />
                        <Skill value={80} title="Node.js" />
                        <Skill value={65} title="PHP" />
                    </Grid>
                </Grid>
                <Grid className={classes.skillGrid} item container xs={12}>
                    <Title title={translate.resume} />
                    <Grid container diraction='row' justify="flex-start" alignItems="center" >
                        <BusinessCenterIcon style={{ fontSize: 34 }} />
                        <Typography variant="h4" className={classes.skillSecondTitle}>
                            {translate.workingexperience}
                        </Typography>
                    </Grid>
                    <Grid container style={{ marginTop: 15, marginBottom: 15, }}>
                        <MySteper steps={translate.workingSteps} />
                    </Grid>
                </Grid>

                <Grid container diraction='row' justify="flex-start" alignItems="center" >
                    <LocalLibraryIcon style={{ fontSize: 34 }} />
                    <Typography variant="h4" className={classes.skillSecondTitle}>
                        {translate.educationalqualification}
                        </Typography>
                </Grid>
                <Grid container style={{ marginTop: 15, marginBottom: 15, }} >
                    <MySteper steps={translate.educationalSteps} />
                </Grid>

            </Grid>
        </Grid>

    )
}

