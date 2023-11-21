import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>

     <div className='d-flex justify-content-evenly align-items-center w-100'>
       <div className="websites" style={{width:'400px'}}>
          <h3 className='mb-3' style={{color:'#00A9FF',fontSize:'30px'}}> <i class="fa-solid fa-circle-play me-3"></i>
          FlapKart</h3>

          <h6>
          Flapkart is a dynamic and user-friendly e-commerce platform that offers a diverse range of products to cater to the needs and preferences of online shoppers. With a sleek and intuitive interface, Flapkart provides a seamless shopping experience, allowing users to browse through a vast collection of items, including electronics, fashion, home goods, and more.
          </h6>
       </div>
       <div className="links d-flex flex-column">
        <h4 className='mb-3'style={{color:'#00A9FF'}}>Link</h4>
        <Link to={'/'} style={{textDecoration:'none'}}>Home</Link>
        <Link to={'/cart'}style={{textDecoration:'none'}}>Cart</Link>
        <Link to={'/wishlist'}style={{textDecoration:'none'}}>Wishlist</Link>
        
       </div>
       <div className="guides d-flex flex-column">
        <h4 className='mb-3' style={{color:'#00A9FF'}}>Guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>React</Link>
        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none'}}>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none'}}>Bootsrtap</Link>
       </div>

       <div className="contacts d-flex flex-column">
       <h4 className='mb-3'style={{color:'#00A9FF'}}>Contacts</h4>
        <div className='d-flex mb-2'>
          <input type="text" className='form-control' placeholder='Enter Your Email Id' />
          <button className='btn btn-info ms-2'>Subscribe</button>
        </div>

        <div className='d-flex justify-content-evenly align-item-center'>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
           <Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
        </div>

       </div>
     </div>
     <p className='mt-5 '>
      copyright© 2023 Flapkart, Inc. All rights reserved ®.
     </p>

    </div>
  )
}

export default Footer