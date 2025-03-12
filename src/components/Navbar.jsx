import React, { useState } from 'react';
import { IoMdSearch, IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import Img2 from '../assets/pfp.jpg';
import PfpDropdown from './PfpDropdown';

const Navbar = ({ navCollapse, setNavCollapse }) => {

  const [Dropdown, setDropdown] = useState(false);

  return (
    <div className='navbar'>  
      <div className='left-nav'>
        <span className='menu-icon' onClick={() => setNavCollapse(!navCollapse)}>
          <IoMdMenu />
        </span>
        <div className='search-bar'>
          <span className='search-icon'><IoMdSearch /></span>
          <input type="search" placeholder='Search..' aria-label="Search bar" />
        </div>
      </div>

      <div className='right-nav'>
        <span className='notif-icon'><IoIosNotifications /></span>

        <div className='profile' onClick={() => setDropdown(!Dropdown)}>
          <span><img src={Img2} alt="Profile" /></span>
          <span><p>Kroffin .W</p></span>
          
          {Dropdown && (
            <div className='pfp-popup'>
              <PfpDropdown />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
