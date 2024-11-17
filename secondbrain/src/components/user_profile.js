import React from 'react';

const UserProfile = ({ imageUrl, name, role }) => {
  return (
    <div style={styles.container}>
      <img src={imageUrl} alt="User" style={styles.image} />
      <div style={styles.info}>
        <h4 style={styles.name}>{name}</h4>
        <p style={styles.role}>{role}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    textAlign: 'center',
    color: 'white',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
    objectFit: 'cover',
  },
  info: {
    marginTop: '8px',
  },
  name: {
    fontSize: '16px',
    margin: '0',
  },
  role: {
    fontSize: '14px',
    margin: '0',
    opacity: 0.8,
  },
};

export default UserProfile;
