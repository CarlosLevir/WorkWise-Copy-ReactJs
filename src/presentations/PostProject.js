import React from 'react';
import userPic from '../assets/images/user-pic.png';
import { commonStyles } from '../utils/styles';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderTop: '4px solid #e44d3a',
    width: 500,
    maxWidth: '90%',
    height: 50,
    padding: 15,
    boxShadow: 5,
  },
  userPic: {
    width: 50,
    height: 50,
  },
  postButton: {
    fontWeight: '500',
    marginLeft: 10,
    padding: 12,
    color: '#b2b2b2',
    border: 0,
    borderRadius: 4,
    backgroundColor: commonStyles.grey,
  },
};

const PostProject = () => (
  <div style={styles.container}>
    <img src={userPic} alt="User Pic" style={styles.userPic} />
    <div>
      <button type="button" style={styles.postButton}>
        Post a Project
      </button>
      <button type="button" style={styles.postButton}>
        Post a Job
      </button>
    </div>
  </div>
);

export default PostProject;
