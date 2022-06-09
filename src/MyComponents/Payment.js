import React, {useEffect,useState} from 'react'
import Header from './Header'
import './Payment.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DEL } from '../redux/actions/action';

export default function Payment() {
  const dispatch=useDispatch()
    const getdata2=useSelector((state)=>state.cartreducer.carts);
    const [val, setVal] = useState(0);
    console.log(getdata2);
    const navigate=useNavigate()
    const total = () => {
        let p = 0;
        getdata2.map((ele, k) => {
          p = p + ele.price;
          setVal(p);
        });
      };
      useEffect(() => {
        total();
      }, [total]);
      const message=()=>{
        alert("ORDERED")  
        dispatch(DEL())   
        navigate('/')  
        console.log("clicked")
      }
    
  return (

    <div>
      <Header />
      <div>
        <h1><center>Checkout</center></h1>
        <h2><center>({getdata2.length})</center></h2>
      </div>
      <hr />
      <br />
      <center>
      {getdata2.map((e) => {
          return (
            <>
              <div className="c">
                <div className="title">
                  <p>
                    <b>{e.title}</b>
                  </p>
                  <div className="price">
                    <p>
                      <strong>${e.price}</strong>
                    </p>
                  </div>
                  <div className="rating">
                    {Array(e.rating)
                      .fill()
                      .map((_, i) => (
                        <p>🌟</p>
                      ))}
                  </div>
                </div>
                <div className="img1">
                  <img className="img2" alt='' src={e.image} />
                
                </div>
              </div>
              <hr />
            </>
          );
        })}
        </center>
        <div className='ta'>
          <h3>TOTAL AMOUNT TO PAY</h3>
            <h4>${val}</h4>
        </div>
        <div className='select'>
        <div>
          <input type="radio" id="upi" value="upi" name='drone' />
          <label for="upi">UPI</label>
        </div>
        <div>
          <input type="radio" id="cod" value="cod" name='drone'/>
          <label for="cod">COD</label>
        </div>
        <div>
          <input type="radio" id="netbank" value="netbank" name='drone' />
          <label for="netbank">NET BANKING</label>
        </div>
        <div>
          <button className='paybutt' onClick={message}>PAY</button>
        </div>
        </div>
    </div>
  )
}
