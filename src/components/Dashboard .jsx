import React from 'react'
import Img5 from '../assets/invoice-widget.png'
import Button from './button'
import Barchart from './Barchat'
import Donut from './Donut'
import LineChart from './Line'
import { FaRegDotCircle } from "react-icons/fa";
import Smalldonut from './Smalldonut'
import { FaPlus } from "react-icons/fa6";
import { RiPaypalFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";
import { GrHostMaintenance } from "react-icons/gr";
import { FaBusAlt } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import Img6 from "../assets/client-1.jpg"
import Img7 from "../assets/client-2.jpg"
import Img8 from "../assets/client-3.jpg"
import Img9 from "../assets/client-4.jpg"
import Img10 from "../assets/client-5.jpg"
import Img11 from "../assets/client-6.jpg"
import InvoiceList from './InvoiceList'
import Paymentlist from './Paymentlist'

const Dashboard = () => {
  return (
    <div className='dashboard-content'>
      <div className='dash-head'><h3>DASHBOARD</h3></div>
      <div className='dash-header'>
        <div className="dash-col-1">
          <div className='card-1'>
            <p className='card-headings'><strong>Professional Invoices Made Ea...</strong></p>
            <p>Quickly understand who your best customers little and motivation to pay thair bills.</p>
            <Button text="Warch Tutorial" />
          </div>
          <div className='card-2'>
            <img src={Img5} alt="" />
          </div>
        </div>
        <div className="dash-col-2">
          <div className='col-2-headins'>
            <div><p className='card-headings'><strong>This Week's Overview</strong></p></div>
            <div><p className='card-headings'><strong>SORT BY:</strong> current week</p></div>
          </div>
          <div className='sec-row'>
            <div className="sec-card-1">
            <div className="sec-col-1">
              <div>
                <p className='num'>197</p>
                <p className='client'>Clients Added</p>
              </div>
              <div>
              <Smalldonut /> 
              </div>
            </div>
            <div className='per'>
                  <div className='per-color'>1.15%</div>
                  <div>since last week</div>
                </div>
            </div>
            <div className="sec-card-2">
            <div className="sec-col-2">
              <div>
                <p className='num'>634</p>
                <p className='client'>Contracts Signed</p>
              </div>
              <div>
               <Smalldonut /> 
              </div>
            </div>
            <div className='per'>
                  <div className='per-color-1'>1.15%</div>
                  <div>since last week</div>
                </div>
            </div>
            <div className="sec-card-3">
            <div className="sec-col-3">
              <div>
                <p className='num'>512</p>
                <p className='client'>Invoice Sent</p>
              </div>
              <div>
                <Smalldonut /> 
              </div>
            </div>
            <div className='per'>
                  <div className='per-color'>3.15%</div>
                  <div>since last week</div>
                </div>
          </div>
            </div>
        </div>
      </div>
      <div className='chart-area'>
        <div className='chart-col1'>
          <Barchart/>
        </div>
        <div className='chart-col2'>
          <div className='donut-head'>
            <div><p className='card-headings'><strong>Structure</strong></p></div>
            <div><p className='card-headings'><strong>SORT BY:</strong> Weekly</p></div>
          </div>
          <Donut />
          <div className='donut-discription'>
            <div className='donut-lines line-do'>
              <div className='donut-info'><div className='donut-sign'><FaRegDotCircle /></div><div>Invoiced</div></div><div>$56,236</div><div className='donut-age'>+ 0.2%</div>
            </div>
            <div className='donut-lines line-do'>
              <div className='donut-info'><div className='donut-sign'><FaRegDotCircle /></div><div>Collected</div></div><div>$12,596</div><div className='donut-age'>- 0.7%</div>
            </div>
            <div className='donut-lines'>
              <div className='donut-info'><div className='donut-sign'><FaRegDotCircle /></div><div>Outstanding</div></div><div>$1,568</div><div className='donut-age'>+ 0.4%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="third-row">
        <div className="third-col-1">
          <div className='in-q-head'><div><p className='card-headings'><strong>Quick Invoice</strong></p></div><div className='add'><FaPlus /></div></div>
          <div className='holder-in'>
            <div className='holder-inside'>
              <p>Customer Name</p>
              <input type="text" placeholder='Enter name' />
            </div>
            <div className='holder-inside'>
              <p>Customer Email</p>
              <input type="text" placeholder='Enter email' />
            </div>
          </div>
          <div className='custom-area'>
            <div className='custom-head'><p>Customer Address</p></div>
            <div className='custom-dis'><textarea rows="3" placeholder="Company Address" required=""></textarea></div>
          </div>
          <div className='total-in'>
            <div className='total-out'><div><p>Sub Total</p></div><div><p>$699.96</p></div></div>
            <div className='total-out'><div><p>Estimated Tax (12.5%)</p></div><div><p>$44.99</p></div></div>
            <div className='total-out'><div><p>Discount (Invoika15)</p></div><div><p>- $53.99</p></div></div>
            <div className='total-out out-1'><div><p>Shipping Charge</p></div><div><p>$65.00</p></div></div>
            <div className='total-out'><div><p><strong>Total Amount</strong></p></div><div><strong>$755.96</strong></div></div>
            <div className='total-out'><button className='btn-in-1'>Add More Details</button><button className='btn-in-2'>Send Money</button></div>
          </div>
        </div>
        <div className="third-col-2">
          <div className='donut-head'>
            <div><p className='card-headings'><strong>Payment Overview</strong></p></div>
            <div><p className='card-headings'><strong>SORT BY:</strong> Monthly</p></div>
          </div>
          <LineChart />
          <div className='line-dis'>
            <div className='line-col quick-line'><p>Received Amount</p><p className='line-money'><strong>$45,070.00</strong></p></div>
            <div className='line-col'><p>Due Amount</p><p className='line-money'><strong>$32,400.00</strong></p></div>
          </div>
        </div>
        <div className="third-col-3">
        <div className='donut-head'>
            <div><p className='card-headings'><strong>Recent Transaction</strong></p></div>
            <div><p className='card-headings'><strong><BsThreeDots /></strong></p></div>
          </div>
          <div className='scroll-payments'>
          <div>
            <div className='pay-day'><p>Recent</p></div>
            <div>
              <Paymentlist backgroundColor="#fbd9d9" color="#ed4343" revicefrom="Salary Payment" PaymentlistDate="20 Sep, 2022" profitLose="- $62.45" iconFrom={<RiPaypalFill />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Online Production" PaymentlistDate="28 Mar, 2022" profitLose="+ $45.84" iconFrom={<IoLayers />} />
            </div>
          </div>
          <div>
            <div className='pay-day'><p>Yesterday</p></div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Maintenance" PaymentlistDate="18 Sep, 2022" profitLose="+ $25.52" iconFrom={<GrHostMaintenance />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#fbd9d9" color="#ed4343" revicefrom="Bus Booking" PaymentlistDate="30 Nov, 2022" profitLose="- $84.45" iconFrom={<FaBusAlt />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Flight Booking" PaymentlistDate="12 Feb, 2022" profitLose="+ $53.23" iconFrom={<FaRegPaperPlane />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Office Rent" PaymentlistDate="12 Arl, 2022" profitLose="+ $42.63" iconFrom={<BsShop />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Maintenance" PaymentlistDate="18 Sep, 2022" profitLose="+ $25.52" iconFrom={<GrHostMaintenance />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#fbd9d9" color="#ed4343" revicefrom="Bus Booking" PaymentlistDate="30 Nov, 2022" profitLose="- $84.45" iconFrom={<FaBusAlt />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Flight Booking" PaymentlistDate="12 Feb, 2022" profitLose="+ $53.23" iconFrom={<FaRegPaperPlane />} />
            </div>
            <div>
              <Paymentlist backgroundColor="#e9dcef" color="#934fb0" revicefrom="Office Rent" PaymentlistDate="12 Arl, 2022" profitLose="+ $42.63" iconFrom={<BsShop />} />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className='client-list'>
        <div className='list-alt-3'>
          <div className='donut-head'>
            <div><p className='card-headings'><strong>Invoice List</strong></p></div>
            <div><p className='card-headings'><strong>SORT BY:</strong> Weekly</p></div>
          </div>
          <div className='arange-info'>
            <div className='check-info'>
              <input type="checkbox" />
              <div><p>INVOICE ID</p></div>
            </div>
              <div><p>CLIENT</p></div>
              <div><p>DATE</p></div>
              <div><p>STATUS</p></div>
              <div><p>ACTION</p></div>  
            </div>
        </div>
        <div>
          <InvoiceList backgroundColor="#e7e7e7" sn="Lec-2152" img={Img6} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
        <div>
          <InvoiceList backgroundColor="#fff" sn="Lec-2152" img={Img7} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
        <div>
          <InvoiceList backgroundColor="#e7e7e7" sn="Lec-2152" img={Img8} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
        <div>
          <InvoiceList backgroundColor="#fff" sn="Lec-2152" img={Img9} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
        <div>
          <InvoiceList backgroundColor="#e7e7e7" sn="Lec-2152" img={Img10} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
        <div>
          <InvoiceList backgroundColor="#fff" sn="Lec-2152" img={Img11} dis="Shubham" date="20 Sep, 2022" paid="Paid" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 
