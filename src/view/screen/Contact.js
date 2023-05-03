import { Container, Col, Row, Card} from "react-bootstrap"
import { gallery } from "../data/data"

function Contact(){
    return(
        <Container>
        <Row style={{padding:"2%"}}>
        <h1 className="donate-heading">Gallery</h1>
         
        {
            gallery.map(function(d){
                return(
                    
                    <Col style={{padding:"2%"}}>
                    <Card style={{ width: '20rem', padding:"2%"}}>
                         <Card.Img variant="top" src={d.image}  class="img-thumbnail" style={{width: "100%",height:"100%"}}/>
                    </Card>  
                    </Col>
                   
                )
            })
        }
        </Row>
        </Container>

    )
       
}

export default Contact