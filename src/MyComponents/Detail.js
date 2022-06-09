import React,{useEffect,useState} from 'react'
import { useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import "./Detail.css";
import Header from "../MyComponents/Header";

export default function Detail() {
    const[data,setData]=useState([])
    console.log(data);
    const {id}=useParams()
    console.log(id)
    const getdata3=useSelector((state)=>state.cartreducer.carts)
    const compare=()=>{
        let comparedata=getdata3.filter((e)=>{
            return e.id==id
        })
        setData(comparedata)
    }
    useEffect(()=>{
        compare();
    },[id]);
  return (
    <div>
        <Header />
        {
            data.map((e)=>{
                return(
                    <>
                    <div className='product'>
                    <div >
                        <img className='detailimg' src={e.image} />
                    </div>
                    <div className='deta'>
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
                    </div>
                    </>
                )
            })
        }

    </div>
  )
}
