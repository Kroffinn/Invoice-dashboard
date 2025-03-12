import React from 'react'
import { BsThreeDots } from "react-icons/bs";

const InvoiceList = ({sn, img, date, paid, dis, backgroundColor=""}) => {
  return (
    <div>
      <div className='list-alt-1' style={{backgroundColor: backgroundColor}}>
                <div className='arange-info-1'>
                  <div className='check-info'>
                    <input type="checkbox" />
                    <div><p>{sn}</p></div>
                  </div>
                    <div className='client-discrip'><div className='client-img'><img src={img} alt="" /></div><div><p>{dis}</p></div></div>
                    <div><p>{date}</p></div>
                    <div className='paid-icon'><p>{paid}</p></div>
                    <div className='add'><p><BsThreeDots /></p></div>
                  </div>
                </div>
    </div>
  )
}

export default InvoiceList
