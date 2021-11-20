import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProfileImage from '../assets/images/profilee.jpg';
import { getTranslate, changeLanguage, lang } from "../localization/index";
import Button from '@material-ui/core/Button';
import HomeScreen from './homescreen';
import AboutScreen from './aboutscreen';
import ResumeScreen from './resumescreen';
import PortfoliosScreen from './portfoliosscreen';
import ContactScreen from './contactscreen';
import './index.css';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },

  menuButton: {
    margin: theme.spacing(2),
    marginLeft: 0,
    width: 50,
    height: 50,
    borderRadius: 0,
    border: "1px solid #2e344e",
    position: 'fixed',
    top: 20,
    zIndex: 1,
    backgroundColor: theme.palette.primary.backgroundColor,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },

  },
  // necessary for content to be below app bar
  topDrawer: {
    width: "100%",
    padding: 20,
    borderBottom: "1px solid #2e344e",
    textAlign: "center",
  },
  profileImage: {
    width: 200,
    height: 200,
    maxWidth: "100%",
    borderRadius: 100,
    border: "7px solid #2e344e",
    verticalAlign: 'middle',

  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#191d2b",
    height: "100vh",
    borderRight: "1px solid #2e344e"
  },
  centerDrawer: {
    felex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'felex',

  },
  bottomDrawer: {
    padding: 15,
    borderTop: "1px solid #2e344e",
    marginTop: 70,
    [theme.breakpoints.down('md')] :{
      marginTop: 0,
    },
  },
  content: {
    flexGrow: 1,
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    position: 'relative',
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const [page, setpage] = useState(3);
  const translate = getTranslate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <div>
        <div className={classes.topDrawer} >
          <img src={ProfileImage} alt={translate.name} className={classes.profileImage} />

        </div>

        <div className={classes.centerDrawer}>
          <List style={{ width: "100%" }}>


            <ListItem className="listItem" style={{ backgroundColor: page === 0 ? "#037fff" : "transparent", paddingLeft: 0 }}
              onClick={() => { setpage(0); setMobileOpen(false) }} button >
              <ListItemText disableTypography={true}
                children={<Typography className="listItemText" style={{ color: page === 0 ? "#fff" : "#a4acc4" }} variant="body2">{translate.home}</Typography>} />
              <div className="Overlay" />

            </ListItem>
            <ListItem className="listItem" style={{ backgroundColor: page === 1 ? "#037fff" : "transparent", paddingLeft: 0  , paddingRight: 0 }}
              onClick={() => { setpage(1); setMobileOpen(false) }} button >
              <ListItemText disableTypography={true}
                children={<Typography className="listItemText" style={{ color: page === 1 ? "#fff" : "#a4acc4" }} variant="body2">{translate.about}</Typography>} />
              <div className="Overlay" />

            </ListItem>
            <ListItem className="listItem" style={{ backgroundColor: page === 2 ? "#037fff" : "transparent", paddingLeft: 0  , paddingRight: 0}}
              onClick={() => { setpage(2); setMobileOpen(false) }} button >
              <ListItemText disableTypography={true}
                children={<Typography className="listItemText" style={{ color: page === 2 ? "#fff" : "#a4acc4" }} variant="body2">{translate.resume}</Typography>} />
              <div className="Overlay" />

            </ListItem>
            <ListItem className="listItem" style={{ backgroundColor: page === 3 ? "#037fff" : "transparent", paddingLeft: 0 , paddingRight: 0 }}
              onClick={() => { setpage(3); setMobileOpen(false) }} button >
              <ListItemText disableTypography={true}
                children={<Typography className="listItemText" style={{ color: page === 3 ? "#fff" : "#a4acc4" }} variant="body2">{translate.portfolios}</Typography>} />
              <div className="Overlay" />

            </ListItem>
            <ListItem className="listItem" style={{ backgroundColor: page === 4 ? "#037fff" : "transparent", paddingLeft: 0  , paddingRight: 0}}
              onClick={() => { setpage(4); setMobileOpen(false) }} button >
              <ListItemText disableTypography={true}
                children={<Typography className="listItemText" style={{ color: page === 4 ? "#fff" : "#a4acc4" }} variant="body2">{translate.contact}</Typography>} />
              <div className="Overlay" />
            </ListItem>
          </List>
        </div>


        <Divider />
        <div className={classes.bottomDrawer}>
          <Button color={lang === "en" ? "primary" : "#fff"} onClick={() => changeLanguage('en')}>English</Button>
          {'/'}
          <Button color={lang === "fa" ? "primary" : "#fff"} onClick={() => changeLanguage('fa')}>فارسی</Button>
        </div>

      </div>
    </>
  );
  console.log(translate.name);

  const container = window !== undefined ? () => window().document.body : undefined;

  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />
      case 1:
        return <AboutScreen />
      case 2:
        return <ResumeScreen />
      case 3:
        return <PortfoliosScreen />
      case 4:
        return <ContactScreen />
      default: return <HomeScreen />
        break;
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            //anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
        <span className="line4" />
        {getPage()}
      </main>
    </div>
  );
}

export default ResponsiveDrawer;