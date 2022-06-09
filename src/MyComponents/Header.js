import React from 'react'
import { useSelector } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {

  const getdata=useSelector((state)=>state.cartreducer.carts);
  return (
    <div  className='navbar'>
        <div className='aml'>
           <Link to="/"> <img className='logo' alt='' src='Amazon-Logo-Transparent-1536x465.png'/></Link>
        </div>
        <div className='search'>
            <div className='ho'>
            <input className='inp' type='text'  />
            </div>
            <div className='search'>
            <img className='icon' alt='' src='510n1ix6FHL.png' />
            
            </div>
        </div>
        <Link to="/login">
        <div className='option'>
        <h6>HARSH SINGH</h6>
        <h5>SIGN OUT</h5>
        </div>
        </Link>
        <div className='option'>
        <h6>Return</h6>
        <h5>Order</h5>
        </div>
        <div className='option'>
        <h6>Your</h6>
        <h5>Prime</h5>
        </div>
        <div className='c2' >
        <Link to="/checkout"><img className='check' alt='' src='amazoncart-feat.webp' /></Link>

        </div>
        <div style={{color: "white"}}>
          {getdata.length}
        </div>
        
    </div>
  )
}
