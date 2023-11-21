import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {

const data = useFetch('https://fakestoreapi.com/products')

console.log(data);

const dispatch = useDispatch()

  return (
    <div>
      <Row>
      {  data?.length>0?
         data?.map((item)=>(
          <Col className='mt-5 mb-5 ms-5'>
          <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} style={{height:'250px'}} />
        <Card.Body>
          <Card.Title>{item.title.slice(0,20)}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
         <div className='d-flex justify-content-evenly'>
            <Button onClick={()=>dispatch(addToCart(item))} variant="primary">cart</Button>
            <Button onClick={()=>dispatch(addToWishlist(item))} variant="primary">wishlist</Button>
         </div>
        </Card.Body>
      </Card>
      </Col>
         ))
            : <p>nothing to display</p> }
      </Row>
    </div>
  )
}

export default Home