import React from 'react'
import Navbar from '../components/Navbar';
import Main from './Main';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const HeaderFooterLayout = () => {
    return (
      <>
        <Navbar />
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </>
    );
  };
  
export default HeaderFooterLayout