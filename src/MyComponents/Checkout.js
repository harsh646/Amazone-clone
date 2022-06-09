import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import { REM } from "../redux/actions/action";
import { useDispatch } from "react-redux";
import Header from "../MyComponents/Header";
import { Link } from "react-router-dom";


export default function Checkout() {
 
  const dispatch=useDispatch()
  const [val, setVal] = useState(0);
  const getdatas = useSelector((state) => state.cartreducer.carts);
 
  const total = () => {
    let p = 0;
    getdatas.map((ele, k) => {
      p = p + ele.price;
      setVal(p);
    });
  };
  useEffect(() => {
    total();
  }, [total]);
  const remove=(e)=>{
    dispatch(REM(e));

  }
  return (
    <>
    <Header />
        <div className="a">
      <div className="head">
        <div>
          <img
            className="img5" alt=''
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
        </div>
        <div className="sb">
          <h1>Your Shopping Basket</h1>
        </div>
        <hr />
        <div className="subtotal">
          <div className="box3">
          <div>
          subtotal ({getdatas.length} item) <small>$</small>
          <strong>
           {getdatas.length>0?val:0}
           </strong>
          </div>
          <div className="checkc">
            <input type="checkbox" />
            This is for gift
          </div>
          <div>
            <Link to="/payment">
            <p  className="b1">Proceed For Payment</p>
            </Link>
          </div>
        </div>
        </div>
        
        {getdatas.map((e) => {
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
                  <Link to={`/detail/${e.id}`}>
                  <img className="img2" alt='' src={e.image} />
                  </Link>
                  <button className="b2" onClick={()=>remove(e)}>REMOVE</button>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
    </>

  );
}
