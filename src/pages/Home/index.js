/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Home from './style';

function home() {
  return (
    <Home>
      <Navbar className="navbar" />
      <div className="content">
        <h1>Content</h1>
      </div>
      <Footer className="footer" />
    </Home>
  );
}

export default home;
