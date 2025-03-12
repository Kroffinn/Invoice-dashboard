import React from 'react'

const Paymentlist = ({revicefrom, PaymentlistDate, profitLose, iconFrom, backgroundColor, color }) => {
  return (
    <div>
      <div className='rent'>
                    <div className='recent'><div className='icon-pay'>{iconFrom}</div>
                    <div className='pay-info'><p>{revicefrom}</p><p>{PaymentlistDate}</p></div></div>
                    <div className='pay-n' style={{backgroundColor: backgroundColor, color:color}}>{profitLose}</div>
                  </div>
    </div>
  )
}

export default Paymentlist
