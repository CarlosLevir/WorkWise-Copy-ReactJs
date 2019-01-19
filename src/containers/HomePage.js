import React from 'react';
import LeftCard from '../presentations/LeftCard';
import PostProject from '../presentations/PostProject';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
  },
  content: {
    display: 'flex',
    width: '80%',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <LeftCard />
      <PostProject />
    </div>
  </div>
);

export default HomePage;
