import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHome,
  faBuilding,
  faPuzzlePiece,
  faUserFriends,
  faBriefcase,
  faEnvelope,
  faBolt,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/images/logo.png';
import userPic from '../assets/images/user-pic.png';
import { commonStyles } from '../utils/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: commonStyles.orange,
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const styles = {
  logo: {
    width: 32,
    height: 32,
  },
  searcher: {
    width: 280,
    height: 38,
    display: 'flex',
    marginLeft: 10,
  },
  searchInput: {
    width: '90%',
    height: '38px',
    backgroundColor: '#fff',
    color: '#b2b2b2',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 10,
    border: 0,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  searchButton: {
    width: '15%',
    height: '38px',
    backgroundColor: '#efefef',
    border: 0,
    padding: 0,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  searchIcon: {
    color: commonStyles.orange,
  },
  rightMenu: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
  },
  rightMenuUL: {
    display: 'flex',
    justifyContent: 'space-between',
    listStyle: 'none',
  },
  rightMenuLI: {
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  typographyIcons: {
    color: 'white',
  },
  userAccount: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    borderLeft: '1px solid #dd3e2b',
    borderRight: '1px solid #dd3e2b',
  },
  userPic: {
    width: '30px',
    height: '30px',
    marginRight: 10,
  },
  faSortDown: {
    marginTop: '-5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  mainDiv: {
    display: 'flex',
  },
  appBar: {
    height: 56,
    justifyContent: 'center',
  },
};

const Header = () => (
  <MuiThemeProvider theme={theme}>
    <div style={styles.root}>
      <AppBar position="static" style={styles.appBar}>
        <Toolbar style={styles.toolbar}>
          <div style={styles.mainDiv}>
            <div style={styles.leftMenu}>
              <img src={logo} alt="Logo" style={styles.logo} />
            </div>
            <div style={styles.searcher}>
              <input placeholder="Search..." style={styles.searchInput} />
              <button type="button" variant="contained" style={styles.searchButton}>
                <FontAwesomeIcon icon={faSearch} style={styles.searchIcon} />
              </button>
            </div>
          </div>

          <div style={styles.rightMenu}>
            <ul style={styles.rightMenuUL}>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faHome} />
                <Typography style={styles.typographyIcons}>Home</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faBuilding} />
                <Typography style={styles.typographyIcons}>Companies</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faPuzzlePiece} />
                <Typography style={styles.typographyIcons}>Projects</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faUserFriends} />
                <Typography style={styles.typographyIcons}>Profiles</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faBriefcase} />
                <Typography style={styles.typographyIcons}>Jobs</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Typography style={styles.typographyIcons}>Message</Typography>
              </li>
              <li style={styles.rightMenuLI}>
                <FontAwesomeIcon icon={faBolt} />
                <Typography style={styles.typographyIcons}>Notification</Typography>
              </li>
            </ul>
            <div style={styles.userAccount}>
              <img style={styles.userPic} src={userPic} alt="User Pic" />
              <Typography style={styles.typographyIcons}>John</Typography>
              <FontAwesomeIcon icon={faSortDown} style={styles.faSortDown} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  </MuiThemeProvider>
);

export default Header;
