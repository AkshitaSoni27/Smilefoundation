import {BrowserRouter, Routes, Route, Link,useNavigate} from 'react-router-dom'
import Home from '../view/screen/Home';
import About from '../view/screen/About';
import Register from '../view/screen/Register';
import Work from '../view/screen/Work';
import Involved from '../view/screen/Involved';
import Contact from '../view/screen/Contact';
import Login from '../view/screen/Login';
import Donate from '../view/screen/Donate';
import {menu} from '../view/data/data'
import Payment from '../view/screen/Payment';
import Profile from '../view/screen/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../view/style/style.css'
import { Container,Row,Col, Navbar, NavDropdown, Nav, Form, Button, Carousel} from "react-bootstrap"

import { useEffect, useState } from 'react';

import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function RoutrPage() {
  const nav = useNavigate();
  const[user,setUser] = useState(localStorage.getItem('user'))
  const[menuover,setMenuove] = useState("Home")
 
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


function profile(){
nav('/profile')
}
function menubarhover(d){

   setMenuove(d.name)
}
  return (
    <>

<Container fluid >
  <Row>
    <Col>
    <marquee width="100%" direction="left" className="bg-dark text-light">
This is a sample scrolling text that has scrolls texts to left.
</marquee>
    </Col>
  </Row>
<Row>
  <Col> 
  <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className=''>
      <Container>
        <Navbar.Brand href="#home"> <img src={require('../view/img/logo/SMILE-FOUNDATION-LOGO-e1662456150120-1.png')} className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto menu-text" >
         {/*  <Nav.Link href="/" ><span  className='menu-text-color1'>Home</span></Nav.Link> */}
            {
              menu.map(function(d){
                return(
                  <Nav.Link href={`${d.link}`} onMouseOver={()=>menubarhover(d)}><span  className={menuover===d.name? "menu-text-color":"menu-text-color1"} > {d.name}</span></Nav.Link>
                )
              })
            }
          </Nav>
          <Nav>
          <Button variant="danger" size='sm' className='donate-button' onClick={donate}>Donate Now!</Button>
               <NavDropdown title={<BsFillPersonLinesFill size={30}/>} style={{marginRight:50}} id="collasible-nav-dropdown">
            {
             !user?<><Nav.Link href="/register">Register</Nav.Link>
             <Nav.Link href="/login">Login</Nav.Link></>: <Form className="">
            <Button variant="danger" size='sm' className='donate-button' onClick={profile}>Profile</Button>
            <Button variant="danger" size='sm' className='donate-button' onClick={logout}>Logout</Button>
         </Form>
            }
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Col>
</Row>
  {/* <Row xs  >
    <Col sm={4} md={4}lg={2}> 
      <img src={require('./view/img/logo/SMILE-FOUNDATION-LOGO-e1662456150120-1.png')} className='logo'/>
    </Col>
    <Col xs sm={2}md={6} lg={6} className='mt-20'>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className=' text-align-end justify-content-end'>
      <Container fluid>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className=" bg-primary w-75">
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
             <Nav.Link href="/login">Login</Nav.Link></>: <Form className="">
            <Button variant="danger" size='lg' className='donate-button' onClick={logout}>Logout</Button>
         </Form>
            }
        

        <Form className="">
            <Button variant="success" size='lg' className='donate-button' onClick={donate} >Donate Now!</Button>
         </Form>
      </Nav>
        </Navbar.Collapse>
         </Container>
    </Navbar></Col>
    <Col className='mt-20 bg-primary' sm={2} md={2} lg={4}>
      <NavDropdown eventKey={ 3 } id="profile-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown></Col>
  </Row> */}
</Container>



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
        : <Route path='/profile' element={<Profile/>}/>}
         <Route path="*" element={<Home />} />
        
       </Routes>
  
         
       <Container fluid>
            {/* Footer */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <footer className="bg-dark text-white pt-5 pb-4" >
              <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">ABOUT US</h5>
                    <p className="text-white">About Smile
                    </p>
                    <p className="text-white">Impact
                    </p>
                    <p className="text-white">Smilestone
                    </p>
                    <p className="text-white">Empanelment & Accreditations
                    </p>
                
                  </div>
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning"> OUR WORK</h5>
                    <p className="text-white">Causes
                    </p>
                    <p className="text-white">Programmes
                    </p>
                    <p className="text-white">Goals
                    </p>
                  </div>
                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">GET INVOLVED</h5>
                    <Link to='/about' className="text-decoration-none">
                    <p className="text-white">Corporate Partners
                    </p></Link>
                    <Link to='/work' className="text-decoration-none">
                    <p className="text-white">Donatiors
                    </p></Link>
                    
                    {/* <Link to='/Involved' className="text-decoration-none">
                    <p className="text-white">Involved
                    </p></Link>
                    <Link to='/contact' className="text-decoration-none">
                    <p className="text-white">Contact
                    </p></Link>
                    <Link to='/register' className="text-decoration-none">
                    <p className="text-white">Register
                    </p></Link>
                    <Link to='/login'className="text-decoration-none">
                    <p className="text-white">Login
                    </p></Link> */}
                  </div>
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                    <p>
                      <i className="fas fa-home mr-3"></i> Jaipur 302012,Rajasthan,India</p>
                    <p> <i className="fas fa-envelope mr-3"></i> Smilefoundation@gmail.com</p>
                    <p> <i className="fas fa-phone mr-3"></i> + 01 234 567 89</p>
                    <p> <i className="fas fa-print mr-3"></i> +01 456 237 89
                    </p>
                  </div>
                  <hr className="mb-4" />
                  <div className="w-100 row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-8">
                      <p>Copyright © 2023 | Akshita Soni, All right reserved:
                        <strong className="text-warning">Smile Foundation</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </footer>

          </Container>

  
  
  
  
  
    </>
  
  );
}


