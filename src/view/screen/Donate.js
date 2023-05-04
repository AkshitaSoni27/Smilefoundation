import { Container,Carousel, Row, Col, Card, Form} from "react-bootstrap"
import { donateinfo, donatenow } from "../data/data"
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
function Donate(){
  const nav = useNavigate();

const[Amount,setAmount] = useState('')
  function donateamount(){

    console.log("donate");
    nav('/payment',{state:Amount})
  }
    return(
        <>
    <Container fluid>   
    <Row>
        <Carousel>
        {
           donatenow.map(function(d){
            return(
              <Carousel.Item interval={1000}>
              <Col>
                <img
                  className="d-block w-100"
                  src={d.image}
                />
                </Col>
                </Carousel.Item>
          )
         })
      }
    </Carousel>
    </Row>

    <Row>
    {
                donateinfo.map(function(d){
                    return(
                        <>
                        <Col> 
                        <h1 className="donate-heading"> {d.name}</h1>
                        <p  className="abouttext" >{d.info}</p> 
                        </Col >
                        <Col style={{padding: "3%"}}>
                        <Card  style={{width: "40rem", textAlign:"center", padding: "4%"}}>
                    
                          <h1 style={{color:'green' }} className="donate-heading"> SUPPORT THE CAUSE</h1>
                          <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-success" type="button">Make A Difference</button>
                          </div>
                        <Form>
                          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 w-20 p-3" style={{fontSize:"18px"}}>
          <Form.Check
            inline
            label="Rs.1500"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Rs.3000"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Rs.6000"
            name="group1"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            inline
            label="Rs.12000"
            name="group1"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}
                          <p style={{fontSize:"23px"}}>YOUR DONATION WILL HELP FOR THE EDUCATION OF 1 CHILD FOR 3 MONTHS</p>
                          <img src= {require('../img/children/childs.webp')}/>
                          <div class="input-group  w-20 " >
                             <div class="input-group-text">Rs.</div>
                             <Form.Control type="text" placeholder="Other Amount"  value={Amount} onChange={d=>setAmount(d.target.value)}/>
                            </div>
                              <Col style={{padding: "3%"}}>
                            <div class="d-grid gap-3 col-8 mx-auto ">
                                <button class="btn btn-success btn-lg" type="button" onClick={donateamount}>Donate Now</button>
                          </div>
                          <p style={{padding: "3%"}}>"YOUR CONTRIBUTIONS ARE ELIGIBLE FOR UPTO 50% TAX BENEFIT UNDER SECTION 80G AS SMILE FOUNDATION IS REGISTERED AS NON PROFIT ORGANIZATION"
                                PAN: AACTS7973G | 80G NUMBER: AACTS7973GF20210</p>
                             </Col>
                      </Form>
                        </Card>
                        </Col>
                        </>
                    )
                })
            }
    </Row>
    </Container>
    </>
    )
}
export default Donate
