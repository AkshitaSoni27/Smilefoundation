import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
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
import {menu} from './view/data/data'
function App() {
  console.log(menu);
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src={require('./view/img/logo/SMILE-FOUNDATION-LOGO-e1662456150120-1.png')} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav-content"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            {
              menu.map(function(d){
                return(
                  <Nav.Link href={`/${d.name}`}>{d.name}</Nav.Link>
                )
              })
            }
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
           {/*  <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="success" size='lg' className='donate-button'>Donate Now!</Button>
          </Form>
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
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Donate' element={<Donate/>}/>
       </Routes>
  
        {/* <Container fluid>
          <footer className="bg-dark text-white pt-5 pb-4">
             <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                      <div className=" text-uppercase mb-4 font-weight-bold text-warning">Quick</div>
                    </div>
                </div>
             </div>
          </footer>
        </Container> */}

  
  
  
  
  
    </BrowserRouter>
  
  );
}

export default App;
