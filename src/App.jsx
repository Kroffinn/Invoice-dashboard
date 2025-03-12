import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Leftbar from './components/left-bar'; 
import Dashboard from './components/Dashboard ';
import Footer from './components/Footer';

function App() {
  const [navCollapse, setNavCollapse] = useState(false); 

  return (
    <div className={`body-main ${navCollapse ? "collapsed" : ""}`}>
      <div className="left-main" style={{width: `${navCollapse ? "80px" : "280px"}`}}>
        <Leftbar navCollapse={navCollapse} />
      </div>
      <div className="nav-main" style={{width: `${navCollapse ? "calc(100vw - 80px)" : "calc(100vw - 280px)"}`}}> 
        <Navbar navCollapse={navCollapse} setNavCollapse={setNavCollapse} />
        <div className='dashboard'>
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

