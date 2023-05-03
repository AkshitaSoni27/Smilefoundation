
import { Container,Row,Col, Navbar, NavDropdown, Nav, Form, Button, Carousel, Figure , Card} from "react-bootstrap"

import {about, titleimpact, impactbg, titleprogram, programmes, titlegoals, goals, titlecause,cause, titlepartner,partners, smilestone, titlecertified, certified, titledonatiors, donatiors, titlevolunteer, volunteer, awards} from '../data/data'
function Involved(){
    return(
        <Container>
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
                          <Col md={6} lg={3} className="partner-box">
                          <marquee direction = "up">
                           <img src={d.image} className="partner-img"/>
                          
                           </marquee>
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
                {
       donatiors.map(function(d){
        return(
          <>
          <Col className="donatiors-box m-2">     
          <Card style={{ width: '18rem'}}>  
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

        </Container>
    )
}

export default Involved