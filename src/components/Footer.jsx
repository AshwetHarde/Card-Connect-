import React from 'react';import '../App.css'; // Add styles in this file


const Footer = () => {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Card Connect, Developed By - Ashwet Harde </p>
    </footer>
  );
};

export default Footer;