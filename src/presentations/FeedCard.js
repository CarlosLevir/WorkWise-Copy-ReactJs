import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faBookmark,
  faEnvelope,
  faHeart,
  faCommentAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import userPic from '../assets/images/user-pic.png';
import icon8 from '../assets/images/icon8.png';
import icon9 from '../assets/images/icon9.png';
import { commonStyles } from '../utils/styles';
import BadgeGreen from '../components/BadgeGreen';
import BadgeGrey from '../components/BadgeGrey';
import likedImg from '../assets/images/liked-img.png';

const styles = {
  mainDiv: {
    backgroundColor: 'white',
    marginTop: '3%',
    width: 500,
    padding: 15,
    borderBottom: '1px solid #e5e5e5',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userInfo: {
    display: 'flex',
  },
  userPic: {
    width: 50,
    height: 50,
  },
  nameText: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  postDetails: {
    marginLeft: 5,
    color: '#b2b2b2',
  },
  faClock: {
    marginRight: 3,
  },
  moreIcon: {
    color: '#b2b2b2',
  },
  userPostDetails: {
    display: 'flex',
  },
  userPostDetailsText: {
    padding: 5,
  },
  greenIcon: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    color: 'white',
    backgroundColor: commonStyles.green,
  },
  redIcon: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    marginLeft: 5,
    color: 'white',
    backgroundColor: commonStyles.orange,
  },
  feedCardDetails: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  priceHour: {
    fontWeight: 'bold',
  },
  badgeDiv: {
    display: 'flex',
    marginBottom: 20,
  },
  viewMore: {
    color: commonStyles.orange,
    textDecoration: 'none',
  },
  feedMessage: {
    marginBottom: 20,
  },
  badgesGrey: {
    display: 'flex',
    marginBottom: 20,
  },
  feedbackDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 500,
    padding: 15,
    borderBottom: '1px solid #e5e5e5',
  },
  like: {
    color: '#b2b2b2',
    marginLeft: 10,
    marginRight: 10,
  },
  feedbackDivLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  icons: {
    marginRight: 10,
  },
};

const FeedCard = () => (
  <div>
    <div style={styles.mainDiv}>
      <div style={styles.container}>
        <div style={styles.userInfo}>
          <img src={userPic} alt="User Pic" style={styles.userPic} />
          <div>
            <Typography style={styles.nameText}>John Doe</Typography>
            <Typography style={styles.postDetails}>
              <FontAwesomeIcon icon={faClock} style={styles.faClock} />
3 minutes ago
            </Typography>
          </div>
        </div>
        <div>
          <IconButton>
            <MoreIcon />
          </IconButton>
        </div>
      </div>
      <div style={styles.feedCardDetails}>
        <div style={styles.userPostDetails}>
          <Typography style={styles.userPostDetailsText}>
            <img src={icon8} alt="Icon 8" />
            Epic Coder
          </Typography>
          <Typography style={styles.userPostDetailsText}>
            <img src={icon9} alt="Icon 9" />
            India
          </Typography>
        </div>
        <div>
          <FontAwesomeIcon icon={faBookmark} style={styles.greenIcon} />
          <FontAwesomeIcon icon={faEnvelope} style={styles.redIcon} />
        </div>
      </div>
      <div>
        <Typography style={styles.jobTitle}>Senior Wordpress Developer</Typography>
      </div>
      <div style={styles.badgeDiv}>
        <BadgeGreen text="Full Time" />
        <Typography style={styles.priceHour}>$30 / hr</Typography>
      </div>
      <div>
        <Typography style={styles.feedMessage}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus,
          ut ullamcorper quam finibus at. Etiam id magna sit amet...
          <a href="/" style={styles.viewMore}>
            view more
          </a>
        </Typography>
      </div>
      <div style={styles.badgesGrey}>
        <BadgeGrey text="HTML" />
        <BadgeGrey text="PHP" />
        <BadgeGrey text="CSS" />
        <BadgeGrey text="JavaScript" />
        <BadgeGrey text="WordPress" />
      </div>
    </div>
    <div style={styles.feedbackDiv}>
      <div style={styles.feedbackDivLeft}>
        <div style={styles.like}>
          <FontAwesomeIcon icon={faHeart} style={styles.icons} />
          Like
        </div>
        <div>
          <img src={likedImg} alt="Liked Img" />
        </div>
        <div style={styles.like}>
          <FontAwesomeIcon icon={faCommentAlt} style={styles.icons} />
          Comments 15
        </div>
      </div>
      <div style={styles.like}>
        <FontAwesomeIcon icon={faEye} style={styles.icons} />
        Views 50
      </div>
    </div>
  </div>
);

export default FeedCard;
