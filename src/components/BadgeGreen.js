import React from 'react';
import Typography from '@material-ui/core/Typography';
import { commonStyles } from '../utils/styles';

const styles = {
  mainDiv: {
    display: 'flex',
  },
  textBadge: {
    backgroundColor: commonStyles.green,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    color: 'white',
  },
};

const BadgeGreen = ({ text }) => (
  <div style={styles.mainDiv}>
    <Typography style={styles.textBadge}>{text}</Typography>
  </div>
);

export default BadgeGreen;
