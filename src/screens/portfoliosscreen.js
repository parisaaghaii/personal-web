import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Title from '../components/title'
import { getTranslate } from "../localization/index";
import Portfolios from '../components/portfolios'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        padding: 30,
        paddingTop: 60,
        width: "100%",
        [theme.breakpoints.down('xs')]: {
            paddingRight: 10,
            paddingLeft: 10,
        },
    },

}))

export default function Portfoliosscreen() {
    const classes = useStyles()
    const translate = getTranslate()
    return (
        <div container className={classes.root}>
            <Title title={translate.portfolios}></Title>
            <Grid item xs={12} container diraction="row" justify="flex-start" alignItems="center">
                {translate.portfolioList.map((portfolio) =>
                    <Portfolios key={portfolio.id}
                        title={portfolio.title} desc={portfolio.desc}
                        href="http://reactdeveloper.ir"
                        image={portfolio.image} />
                )}

            </Grid>
        </div>
    )
}
