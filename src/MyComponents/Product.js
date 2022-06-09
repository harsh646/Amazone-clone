import React from 'react'
import './Product.css';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const dispatch=useDispatch()

  const send=()=>{
    dispatch(ADD(props));
  }
  return (
    <div className='container'>
        <div className='title'>
            <p><b>{props.title}</b></p>
            <div className='price'>
            <p><strong>${props.price}</strong></p>

        </div>
        <div className='rating'>
        {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        </div>
        <div className='img1'>
          <Link to={'/detail/props.id'}>
            <img className='img2' src={props.image}alt="" />
            </Link>
        </div>
        <div>
            <button className='butt' onClick={()=>send()}>ADD TO BASKET</button>
        </div>
    </div>
  )
}
