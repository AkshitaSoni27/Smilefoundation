import { Container, Row, Col, Carousel, Card } from "react-bootstrap"

import {about, titleimpact, impactbg, titleprogram, programmes, titlegoals, goals, titlecause,cause, titlepartner,partners, smilestone, titlecertified, certified, titledonatiors, donatiors, titlevolunteer, volunteer, awards} from '../data/data'

function About(){
    return(
      <Container>

<Row>
            {
                about.map(function(d){
                    return(
                        <>
                        <Col> <img src={d.img} className="aboutimg"/></Col>
                        <Col> 
                        <h1 className="aboutheading"> {d.name}</h1>
                        <p  className="abouttext" >{d.info}</p> 
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
                        <>             
                           <img src={d.image} className='impact-img'/>
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
          <Col className="certified-box m-2">     
          <Card style={{ width: '25rem' }}>  
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

      </Container>
    )
}

export default About








