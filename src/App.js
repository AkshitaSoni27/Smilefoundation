import {BrowserRouter, Routes, Route, Link,useNavigate} from 'react-router-dom'
import Home from './view/screen/Home';
import About from './view/screen/About';
import Register from './view/screen/Register';
import Work from './view/screen/Work';
import Involved from './view/screen/Involved';
import Contact from './view/screen/Contact';
import Login from './view/screen/Login';
import Donate from './view/screen/Donate';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col, Navbar, NavDropdown, Nav, Form, Button, Carousel} from "react-bootstrap"
import './view/style/style.css'
import { useState } from 'react';
import {menu} from './view/data/data'
import Payment from './view/screen/Payment';
function App() {
  const nav = useNavigate();
  const[user,setUser] = useState(localStorage.getItem('user'))
  console.log(menu);

  function logout(){
console.log("logout");
    localStorage.clear()
    nav('/')
    window.location.reload();
  }


  function donate(){

    console.log("donate");
    if(user){
      nav('/Donate')
    }else{

      nav("/login")
      window.location.reload()
    }
  }
  return (
    <>


<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container fluid>
        
        <Nav className="me-auto">
          <img src={require('./view/img/logo/SMILE-FOUNDATION-LOGO-e1662456150120-1.png')} className='logo'/>
          </Nav>
         
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto ml-20">
          <Nav.Link href="/">Home</Nav.Link>
            {
              menu.map(function(d){
                return(
                  <Nav.Link href={`/${d.name}`}>{d.name}</Nav.Link>
                )
              })
            }
            {
             !user?<><Nav.Link href="/register">Register</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link></>: <Form className="d-flex   ">
            <Button variant="danger" size='lg' className='donate-button' onClick={logout}>Logout</Button>
         </Form>
            }
             </Nav>
          <Nav className='me-auto '>
         <Form className="d-flex   ">
            <Button variant="success" size='lg' className='donate-button' onClick={donate} >Donate Now!</Button>
         </Form>
        
         </Nav>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>


       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Work' element={<Work/>}/>
         <Route path='/Involved' element={<Involved/>}/>
         <Route path='/Contact' element={<Contact/>}/>
     
         <Route path='/Donate' element={<Donate/>}/>
         <Route path='/payment' element={<Payment/>}/>
         {!user?<>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Login' element={<Login/>}/>
         </>
        :null}
         <Route path="*" element={<Home />} />
       </Routes>
  
        <Container fluid>
          <footer className="bg-dark text-white pt-5 pb-4">
             <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <div className=" text-uppercase mb-4 font-weight-bold text-warning">Quick</div>
                    </div>
                </div>
             </div>
          </footer>
        </Container>

  
  
  
  
  
    </>
  
  );
}

export default App;
