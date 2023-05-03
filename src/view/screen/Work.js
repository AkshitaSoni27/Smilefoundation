
import { Container,Row,Col, Navbar, NavDropdown, Nav, Form, Button, Carousel, Figure , Card} from "react-bootstrap"

import {about, titleimpact, impactbg, titleprogram, programmes, titlegoals, goals, titlecause,cause, titlepartner,partners, smilestone, titlecertified, certified, titledonatiors, donatiors, titlevolunteer, volunteer, awards} from '../data/data'

function Work(){
    return(
       <Container>

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
                          <Col className="cause-box">        
                           <img src={d.image} className="cause-img" />
                           <h1 className="cause-heading">{d.name}</h1>
                           <p className="cause-para">{d.info}</p>
                          </Col> 
                          
                        </>
                    )
                })
            }

         </Row>

         <Row>
         
         {
               titlegoals.map(function(d){
                    return(
                        <>   
                                  
                           <h1 className="goals-head">{d.name}</h1>
                         
                        </>
                    )
                })
            }

            <Figure>
                     {
                         goals.map(function(d){
                         return(
                                <Figure.Image className="goals-box"
                                   width={175}
                                   height={190}
                                    alt="175x190"
                                   src={d.image} 
                                  />
                                 )      
                             })
                       }

            </Figure>
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
        
         

        </Container>
    )
}

export default Work