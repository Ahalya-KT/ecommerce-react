import React,{useState,useEffect} from 'react'
import pictures from '../img/pic1.jpg'
import axios from 'axios'

function Homepage() {
  const[datas,setdata] =([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>{
      console.log(res);
      setdata(res.data)
    })
    .catch(err =>{
      console.log(err);
    })
  })
  return (
    <div className='container'>
    {/* navbar*/}
<nav>
            <h1 className="mainhead">Ecommerce</h1>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#menu"> MENU</a></li>
                <li><a href="#contact">CONTACT</a></li>
                <li><a href="#offr">OFFERS</a></li>
            </ul>
           
        </nav> 

            {/* homepage */}

            <div className='homepage'>
              <div>
                <h2 className='home-text'>Modern Furniture for minimalist lovers</h2>
                <p className='home-para'>Experience the ultimate relaxtion with our new collection of Furniture.Visit our showroom to see our varirty collections of  Furniture</p>

                <button className='btn-shop'>Shop Now</button>
              </div>

              <div>
                <img  className="furnish-pic" src={pictures}/>
              </div>
            </div>

            {/* add to cart */}
            <div className='add-cart'>
              <div>
               
                <ul> 
                  {

                datas.map((post) => <li key={post.id}>{post.title}</li>)
                  }
                 
                </ul>
               
              </div>
              
            </div>
            
    </div>
  )
}

export default Homepage