import React from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
  mainDiv: {
    display: 'flex',
    margin: 5,
  },
  textBadge: {
    backgroundColor: '#e5e5e5',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 20,
    color: '#b2b2b2',
  },
};

const BadgeGrey = ({ text }) => (
  <div style={styles.mainDiv}>
    <Typography style={styles.textBadge}>{text}</Typography>
  </div>
);

export default BadgeGrey;
