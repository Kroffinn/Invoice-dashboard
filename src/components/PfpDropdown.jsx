import React from 'react'
import { GoPerson } from "react-icons/go";
import { IoWalletOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { LuLockKeyholeOpen } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

const PfpDropdown = () => {
  return (
    <div className='profile-dropdown'>
      <div className='profile-drop-list'>
        <div><GoPerson /></div>
        <div><p>Profile</p></div>
      </div>
      <div className='profile-drop-list'>
        <div><IoWalletOutline /></div>
        <div><p>My Wallet</p></div>
      </div>
      <div className='profile-drop-list'>
        <div><CiSettings /></div>
        <div><p>Settings</p></div>
      </div>
      <div className='profile-drop-list log-line'>
        <div><LuLockKeyholeOpen /></div>
        <div><p>Lock Screen</p></div>
      </div>
      <div className='profile-drop-list log'>
        <div><IoLogOutOutline /></div>
        <div><p>Logout</p></div>
      </div>
    </div>
  )
}

export default PfpDropdown
