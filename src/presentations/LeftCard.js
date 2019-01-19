import React from 'react';
import Typography from '@material-ui/core/Typography';
import { commonStyles } from '../utils/styles';
import userPic from '../assets/images/user-pic.png';

const styles = {
  LeftCard: {
    width: 270,
  },
  userProfileOrange: {
    display: 'flex',
    justifyContent: 'center',
    width: '270px',
    height: '100px',
    backgroundColor: commonStyles.orange,
  },
  userProfileWhite: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '270px',
    height: '130px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5',
  },
  userPic: {
    marginTop: '40%',
    borderRadius: '100px',
    border: '5px solid #FFF',
  },
  personalInfo: {
    textAlign: 'center',
    marginTop: 20,
  },
  follow: {
    alignItems: 'center',
    textAlign: 'center',
    width: '270px',
    height: '90px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5',
  },
  followTitle: {
    color: '#686868',
    fontSize: 20,
  },
  fontNumber: {
    fontSize: 20,
  },
  viewProfile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '270px',
    height: '40px',
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e5e5',
  },
  viewProfileText: {
    color: commonStyles.orange,
  },
};

const LeftCard = () => (
  <div style={styles.LeftCard}>
    <div style={styles.userProfileOrange}>
      <div>
        <img src={userPic} alt="User Pic" style={styles.userPic} />
      </div>
    </div>
    <div style={styles.userProfileWhite}>
      <div style={styles.personalInfo}>
        <Typography variant="title">John Doe</Typography>
        <Typography>Graphic Designer at Self Employed</Typography>
      </div>
    </div>
    <div style={styles.follow}>
      <br />
      <Typography style={styles.followTitle}>Following</Typography>
      <Typography style={styles.fontNumber}>34</Typography>
    </div>
    <div style={styles.follow}>
      <br />
      <Typography style={styles.followTitle}>Followers</Typography>
      <Typography style={styles.fontNumber}>155</Typography>
    </div>
    <div style={styles.viewProfile}>
      <Typography style={styles.viewProfileText}>View Profile</Typography>
    </div>
  </div>
);

export default LeftCard;
