import React from 'react';
import {Navbar, Container,Button, Dropdown,Nav,Badge} from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import { CartState } from '../context/Context'
import {v4 as uuidv4} from 'uuid'



const Header = () => {
    const { state: {cart},dispatch} =CartState()
  return <div>
      <Navbar bg='dark' variant='dark' style={{height:80}}>
          <Container>
              <Navbar.Brand>
                  <Link to="/">Shopping Site</Link></Navbar.Brand>
    
                  <Nav >
                 
                  
                 <Dropdown   style={{padding:10}}>
                   <Dropdown.Toggle variant="success">
            Add Item/cart <FaShoppingCart color='white' fontSize='15px'/>
                       <Badge bg="green">{cart.length}</Badge>
                   </Dropdown.Toggle>
                   
                   <Dropdown.Menu  style={{minwidth:370}}>
                       {cart.length>0 ? (
                           <>
                           {cart.map((prod)=>(
                               <span className='cartItem' key={uuidv4()}>
                                   <img src={prod.image} alt={prod.name} className="cartItemImg"/>
                                   <div className='cartItemDetail'>
                                       <span>{prod.name}</span>
                                       <span>Rs.{prod.price.split(".")[0]}</span>
                                   </div>
                                   <AiFillDelete
                                   fontSize="20px"
                                   style={{cursor :"pointer"}}
                                   onClick={()=>{
                                       dispatch({
                                           type: 'REMOVE_FROM_CART',
                                           payload: prod
                                       });
                                   }}/>
                               </span>
                           ))}
                           <Link to="/cart">
                               <Button style={{width:"100%",margin: "0 0px"}}>
                               Go to Cart
                               </Button>
                               </Link>
                           </>
                       ):(
                           <span style={{padding:10}}>cart is empty!</span>
                       )}
                       
                   </Dropdown.Menu>
                 </Dropdown>
             </Nav>
          </Container>
      </Navbar>
  </div>;
};

export default Header;
