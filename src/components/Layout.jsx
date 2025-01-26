import React from 'react';
import Footer from './Footer'; // Adjust path if necessary
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;
