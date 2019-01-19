import React from 'react';
import LeftCard from '../presentations/LeftCard';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 20,
  },
  content: {
    width: '80%',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <div style={styles.content}>
      <LeftCard />
    </div>
  </div>
);

export default HomePage;
