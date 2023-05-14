import { useState } from "react"
import { Container ,Row,Col,Form,Button} from "react-bootstrap";
import { useLocation } from "react-router-dom"


export default function Payment(){

const loc=useLocation()
const[pay,setPay] =useState(loc.state)
console.log(pay);
    return(
        <>
       <Container className="m-5">
        <Row>
          <Col>
          <p className="">Payment</p>
          </Col>
        </Row>
        <Row>
            <Col>
            <div className="w-25 bg-success m-auto rounded p-3 text-light">
            <h4>Bank Account Details</h4>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="email" placeholder="Bank Account Number" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="IFSC" />
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="email" placeholder="Account Holder Name" />
       
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" value={`Rs.${pay}`} />
       
     </Form.Group>

      <Button variant="primary" >
        submit
      </Button>
    </Form>
            </div>
            </Col>
        </Row>
       </Container >
        </>

    )
}