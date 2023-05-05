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

export default App;
