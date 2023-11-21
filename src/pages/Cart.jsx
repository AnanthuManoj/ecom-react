import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllItems, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()

 const getTotal=()=>{
  if(cartArray.length>0){
    setTotal(cartArray.map((item)=>item.price).reduce((p1,p2)=>p1+p2))
  }else{
    setTotal(0)
  }
 }

 useEffect(()=>{
  getTotal();
 },[cartArray])

 const handleCart = ()=>{
   alert('Thank you .. . your order has been placed')
   dispatch(removeAllItems())
   navigate('/')
 }

  return (
    <div>
     {
      cartArray?.length>0?
      <div className='row w-100'>
        <div className='col-lg-6 m-5'>
            <table className='table border shadow'>
              <thead>
                <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
                </tr>
              </thead>
              <tbody>
               {cartArray?.map((item,index)=>(
                  <tr>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td><img src={item.image} alt="no image" width={'100px'} height={'100px'} /></td>
                  <td>{item.price}</td>
                  <td> <Button onClick={()=>dispatch(removeFromCart(item.id))} >remove</Button> </td>
                </tr>
               ))
                }
              </tbody>
            </table>
        </div>
        <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
            <div className='border shadow p-5'>
               <h2 className='text-primary'> Cart Summary</h2>
               <h4>Total number of products: <span className='fw-bolder text-info'>{cartArray.length}</span></h4>
               <h4> Total Price : ${total}</h4>
               <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
            </div>
        </div>
      </div>
      :<p>Your cart is empty</p> }
    </div>
  )
}

export default Cart