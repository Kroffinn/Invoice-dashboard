import React from 'react'
import { useState } from "react";
import Img3 from '../assets/logo-dark.png'
import { IoHome } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TiPen } from "react-icons/ti";
import { SiBnbchain } from "react-icons/si";
import { FaWpforms } from "react-icons/fa6";
import { FaTableCells } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { TiGift } from "react-icons/ti";
import { IoMapSharp } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import Button from './button';
import Img4 from '../assets/create-invoice.png' 
import Img15 from '../assets/logo-sm.png'

const Leftbar = ({ navCollapse }) => {

  return (
    <div className={`left-bar ${navCollapse ? "navcollpase" : ""}`}>
       <div className='logo-name'><img className='logo-open' src={Img3} alt="" /><img className='logo-close' src={Img15} alt="" /></div>
       <div className='scroll-left'>
            <div>
                <div className='bar-headings'><p><strong>MENU</strong></p></div>
                <div className='dash'><div><IoHome /></div><div><p>Dashboard</p></div></div>
            </div>
            <div>
                <div className='bar-headings'><p><strong>PAGES</strong></p></div>
                <div className='barss'>
                    <div className='bar-head'>
                        <div><FaFileInvoice /></div><div><p>Invoice Management</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><IoMdSettings /></div><div><p>Authentication</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
            </div>
            <div>
                <div className='bar-headings'><p><strong>COMPONENTS</strong></p></div>
                <div className='barss'>
                    <div className='bar-head'><div><TiPen /></div><div><p>Bootstrap UI</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><SiBnbchain /></div><div><p>Advance UI</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><FaWpforms /></div><div><p>Forms</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><FaTableCells /></div><div><p>Tables</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><FaChartPie /></div><div><p>Apexcharts</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><TiGift /></div><div><p>Icons</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><IoMapSharp /></div><div><p>Maps</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
                <div className='barss'>
                    <div className='bar-head'><div><ImExit /></div><div><p>Multi Levels</p></div></div><div className='arrow'><IoIosArrowForward /></div></div>
            </div>
            <div className='invoice-btn'>
                <div className='invoice-img'><img src={Img4} alt="" /></div>
                <div className='invoice-discription'>
                    <p>Upgrade To Pro For More Features</p>
                    <div className='in-btn'><Button text="Create Invoice" /></div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Leftbar
