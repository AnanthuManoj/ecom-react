import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishList } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';


function Wishlist() {

 const wishlistArray = useSelector((state)=>state.wishlistReducer)

 console.log(wishlistArray);

 const dispatch = useDispatch()

 const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishList(item.id))
 }

  return (
    <div>
       <Row>

         {
          wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
            <Col className='mt-5 mb-5 ms-5'>
            <Card style={{ width: '18rem' }}>
          <Card.Img variant="top"  src={item.image} style={{height:'250px'}} />
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           <div className='d-flex justify-content-evenly'>
              <Button onClick={()=>handleWishlist(item)} variant="primary">cart</Button>
              <Button variant="primary" onClick={()=>dispatch(removeFromWishList(item.id))}>remove from wishlist</Button>
           </div>
          </Card.Body>
        </Card>
        </Col>
          ))
       :
         <p>nothing to display</p>
      }

      </Row>
    </div>
  )
}

export default Wishlist