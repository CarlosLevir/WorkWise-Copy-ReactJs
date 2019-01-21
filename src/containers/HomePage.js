import React from 'react';
import LeftCard from '../presentations/LeftCard';
import PostProject from '../presentations/PostProject';
import FeedCard from '../presentations/FeedCard';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    flexWrap: 'wrap',
  },
  midDiv: {
    marginLeft: '3%',
    maxWidth: '110%',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <LeftCard />
      <div style={styles.midDiv}>
        <PostProject />
        <FeedCard />
      </div>
    </div>
  </div>
);

export default HomePage;
