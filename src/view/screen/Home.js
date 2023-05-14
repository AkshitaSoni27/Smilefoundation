import { Container,Row,Col, Navbar, NavDropdown, Nav, Form, Button, Carousel, Figure , Card} from "react-bootstrap"

import {about, titleimpact, impactbg, titleprogram, programmes, titlegoals, goals, titlecause,cause, titlepartner,partners, smilestone, titlecertified, certified, titledonatiors, donatiors, titlevolunteer, volunteer, awards} from '../data/data'
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
function Home(){

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
    return(
        <>
        
        <Container fluid style={{zIndex: '10'}}>
           <Row>
                <Col>
               
                </Col>
           </Row>

           <Row>
                 <Col >
             <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/slider/Banner1-scaled.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/slider/Banner2-1.jpg')}
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('../img/slider/Banner3-1.jpg')}
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
         </Row>

         <Row >
            {
                about.map(function(d){
                    return(
                        <>
                        
                          <Col data-Aos="fade-up">

                          <h1 className="aboutheading"> {d.name}</h1>
                        <Row>
                        <Col lg={6} className="aboutimg"> 
                        <img src={d.img} className="aboutimg"/>
                        </Col>
                        <Col lg={6} className="aboutimg"> 
                      
                        <p  className="abouttext" >{d.info}</p> 
                        </Col>
                        </Row>
                        </Col>
                        </>
                    )
                })
            }
            
         </Row>

         <Row>
         {
                titleimpact.map(function(d){
                    return(
                        <>
                        
                        <h1 className="impactheading">{d}</h1>
                        
                        
                        </>
                    )
                })
            }
            
            {
                impactbg.map(function(d){
                    return(
                        <> <Row  data-Aos="fade-up">  
                          <Col>          
                           <div className="impact-div">
                          {/*  <img src={d.image} className='impact-img'/> */}
                          
                          <Row>
                            <Col  sm ={6}md={6}lg={3}> <h1 style={{fontSize:70}}><CountUp end={100} />
                            

                              +</h1>
                              <h2>LAC</h2>
                              <p>children and
                              their families are
                              impacted every year
                              </p>
                              </Col>
                            <Col sm ={6}md={6}lg={3}>  <h1 style={{fontSize:70}}><CountUp end={2000} />
                                    +</h1>
                                    <h2>VILLAGES</h2>
                                    <p>and slums
                                    are reached out
                                    to across the country</p></Col>
                            <Col sm ={6}md={6}lg={3}>  <h1 style={{fontSize:70}}><CountUp end={400} />
                                +</h1>
                                <h2>PROJECTS</h2>
                                <p>focused on
                                education, healthcare,
                                and women empowerment</p></Col>
                            <Col sm ={6}md={6}lg={3}> <h1 style={{fontSize:70}}><CountUp end={25} />

                      +</h1>
                      <h2>STATES</h2>
                      <p>are reached
                      including the
                      remotest areas</p></Col>
                          </Row>
                          
                           </div>
                           </Col>
                           </Row>

                          
                        </>
                    )
                })
            }
          </Row>  
          <Row>  
           {
               titleprogram.map(function(d){
                    return(
                        <>             
                           <h1 className="pro-heading">{d}</h1>
                        </>
                    )
                })
            }

          {/* {
              programmes.map(function(d){
                    return(
                        <>   
                          <Col md={6} lg={3}>       
                           <img src={d.image} className="program-img"/>
                          </Col> 

                          <Col className="pro-box">
                           <h1>{d.name}</h1>
                           <p className="pro-para">{d.info}</p>
                          </Col>   
                        </>
                    )
                })
            } */}
                  {   
                       programmes.map(function(d){
                        return(
                       <div class="card col-sm-6 mb-3 mb-sm-0" >
                       <div class="row g-0">
                              <div class="col-md-4">
                                  <img src={d.image} className="program-img" />
                              </div>
                              <div class="col-md-8" >
                                   <div class="card-body">
                                    <h2 class="card-title">{d.name}</h2>
                                    <p class="card-text" className="pro-para">{d.info}</p>
                                     
                                   </div>
                              </div>
                            </div>
                        </div>
                        )
                       })
                     }

         </Row>
            
           
         {/* <Row>
         
         {
               titlegoals.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="pro-heading">{d.name}</h1>
                         
                        </>
                    )
                })
            }

            <Figure>
                     {
                         goals.map(function(d){
                         return(
                                <Figure.Image className="goals-box"
                                   width={171}
                                   height={180}
                                    alt="171x180"
                                   src={d.image} 
                                  />
                                 )      
                             })
                       }

            </Figure>
         </Row> */}
         
         <Row>
         {
               titlecause.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="cause-head">{d}</h1>
                         
                        </>
                    )
                })
            }

            {
               cause.map(function(d){
                    return(
                        <>   
                         <Col className="certified-box " lg={3} md={6} data-Aos="fade-up">     
                          <Card style={{  }}>  
                          <Card.Body >
                          <Card.Img variant="top" src={d.image} className="certified-img"/>
                            <Card.Title><h3>{d.name}</h3></Card.Title>
                            <Card.Text>
                              <p>{d.info}</p>
                            </Card.Text>
                          </Card.Body>
                          </Card>
                          </Col> 
                         {/*  <Col className="cause-box" lg={3} md={6}>        
                           <img src={d.image} className="cause-img" />
                           <h1 className="cause-heading">{d.name}</h1>
                           <p className="cause-para">{d.info}</p>
                          </Col>  */}
                          
                        </>
                    )
                })
            }

         </Row>
        
         <Row>
         {
               titlepartner.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="partner-heading">{d}</h1>
                         
                        </>
                    )
                })
            }
             
             {
               partners.map(function(d){
                    return(
                        <>  
                          <Col md={6} lg={3} className="partner-box " data-aos="fade-up">
                          <marquee direction = "up" className="">
                           <img src={d.image} className="partner-img text-align-center"/>
                          
                           </marquee>
                          </Col>     
                          
                         
                        </>
                    )
                })
            }
         </Row>

         <Row>
         {
               smilestone.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="smile-head">{d}</h1>
                         
                        </>
                    )
                })
            }
        
        <Carousel>
      {
         awards.map(function(d){
          return(
            <Carousel.Item interval={1000}>
            <Col className="award-box">
              <img
                className="award-img"
                src={d.image}
              />
              <Carousel.Caption>
                <h5 className="award-heading ">{d.name}</h5>
                <p className="award-para">
                  <div className=" " style={{marginLeft:400}}>
                  <div className=" w-100 ">
                      {d.info}
                    </div>
                    </div> 
                  </p>
              </Carousel.Caption>
              </Col>
            </Carousel.Item>
          )
         })
      }
    </Carousel>
    
    </Row>
              
    <Row>
         {
               titlecertified.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="certified-head">{d}</h1>
                         
                        </>
                    )
                })
            }
  
{
       certified.map(function(d){
        return(
          <>
          <Col className="certified-box " lg={4} md={4}>     
          <Card style={{  }}>  
          <Card.Body >
          <Card.Img variant="top" src={d.image} className="certified-img"/>
            <Card.Title><h3>{d.name}</h3></Card.Title>
            <Card.Text>
              <p>{d.info}</p>
            </Card.Text>
          </Card.Body>
          </Card>
          </Col> 
          </>
                )
        })

} 






         </Row>

         <Row>
         {
               titledonatiors.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="certified-head">{d}</h1>
                         
                        </>
                    )
                })
            }

           {/* {
               donatiors.map(function(d){
                    return(
                        <>   
                          <Col md={6} lg={3}>        
                           <img src={d.image} className="donatiors-img" />
                           <h1 className="donatiors-heading">{d.name}</h1>
                           <p className="donatiors-para">{d.info}</p>
                           <p className="donatiors-para1">{d.describe}</p>
                          </Col> 
                          
                        </>
                    )
                })
            }  */}


 {
       donatiors.map(function(d){
        return(
          <>
          <Col className="donatiors-box" lg={3} md={6}>     
          <Card style={{ }}>  
          <Card.Body className="donar-box">
          <Card.Img variant="top" src={d.image}  className="donatiors-img"/>
            <Card.Title><h3>{d.name}</h3></Card.Title>
            <Card.Text>
              <p>{d.info}</p>
              <p>{d.describe}</p>
            </Card.Text>
          </Card.Body>
          </Card>
          </Col> 
          </>
                )
        })

} 
 

         </Row>
    
            {/* <Row>
              <div className="contact-footer">
                 
              </div>
            </Row> */}
    </Container>
        </>
    )
}

export default Home