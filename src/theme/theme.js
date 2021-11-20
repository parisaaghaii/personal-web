import { createMuiTheme } from '@material-ui/core/styles'
import palette from './palette'
import { getDirection, getFont } from '../localization/index'
let theme = createMuiTheme()
theme = createMuiTheme({
    palette: palette,
    direction: getDirection(),
    spacing: 2.5,
    typography: {
        h1: {
            fontWeight: 700,
            // fontSize: "3.2857rem",
            fontSize: getDirection() === "rtl" ? 50 : 52,
            lineHeight: '4rem',
            fontFamily: getFont(),
            color: "#FFF",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 40 : 42,
            },
        },
        h2: {
            fontWeight: 700,
            //  fontSize: "2.57rem",
            fontSize: getDirection() === "rtl" ? 38 : 40,
            lineHeight: '3.2857rem',
            fontFamily: getFont(),
            color: "#fff",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 32 : 34,
            },
        },
        h3: {
            fontWeight: 600,
            // fontSize: "2rem",
            fontSize: getDirection() === "rtl" ? 30 : 32,
            lineHeight: '2.7rem',
            fontFamily: getFont(),
            textAlign: 'left',
            color: "#fff",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 28 : 30,
            },
        },
        h4: {
            fontWeight: 600,
            //  fontSize: "1.71rem",
            fontSize: getDirection() === "rtl" ? 26 : 28,
            lineHeight: '2.43rem',
            fontFamily: getFont(),
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 22 : 24,
            },
        },
        h5: {
            fontWeight: 700,
            // fontSize: "1.43rem",
            fontSize: getDirection() === "rtl" ? 21 : 25,
            lineHeight: '2.14rem',
            fontFamily: getFont(),
            color: "#fff",
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 18 : 20,
            },
        },
        h6: {
            fontWeight: 600,
            //fontSize: "1.14rem",
            fontSize: getDirection() === "rtl" ? 16 : 18,
            lineHeight: '1.857rem',
            fontFamily: getFont(),
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 14 : 16,
            },
        },
        subtitle1: {
            fontWeight: 400,
            // fontSize: "1.25rem",
            fontSize: getDirection() === "rtl" ? 18 : 20,
            lineHeight: '2rem',
            fontFamily: getFont(),
            marginTop: 15,
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 15 : 17,
            },
        },
        body1: {
            fontSize: getDirection() === "rtl" ? 16 : 18,
            lineHeight: '1.8rem',
            color: "#a4acc4",
            fontFamily: getFont(),
            fontWeight: 400,
            textAlign: getDirection() === "rtl" ? 'justify' : 'left',
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 13 : 15,
            },
        },
        body2: {
            // fontSize: ".94rem",
            fontSize: getDirection() === "rtl" ? 13 : 15,
            color: "#a4acc4",
            fontFamily: getFont(),
            fontWeight: 600,
            textAlign: 'center',
            letterSpacing: 1,
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 11 : 13,
            },
        },
        button: {
            // fontSize: ".9rem",
            fontSize: getDirection() === "rtl" ? 12 : 14,
            // color: "#FFF",
            fontFamily: getFont(),
            fontWeight: 300,
            letterSpacing: 2,
            [theme.breakpoints.down('xs')]: {
                fontSize: getDirection() === "rtl" ? 12 : 14,
            },
        },
    }

})
export default theme