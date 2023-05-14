import axios from "axios";
import { useEffect, useState } from "react";
import { Container,Row,Col } from "react-bootstrap";

export default function Profile(){

    const[user,setUser]=useState(localStorage.getItem('user'))
    const[donatedata,setDonatedata]=useState('')
    useEffect(()=>{

async function showDonate(){

    let res=await axios.post("donateshow",{email:user}).catch(e=>console.log(e))
   
    const{success,message,resultlog
    } = res?.data
    console.log(res?.data);
    if(success){
        setDonatedata(resultlog)
        alert(message)
    }
    else{
alert(message)
    }
}


showDonate();

    },[])


    
console.log(donatedata);
    return(
        <>
        <Container>
        <p>Profile</p>
        <Row>
            <Col>
            <table className=" w-100" border={1} >
            <tr ><th className="border">AccountNo.</th><th className="border">Name</th><th className="border">Amount</th></tr>
            {
                donatedata!==''?donatedata.map(d=>{
                    return(
                                <tr ><td className="border">{d.acno}</td><td className="border">{d.acname}</td><td className="border">{d.pay}</td></tr>
                         )
                }):null
            }
            
            </table>
            </Col>
            <Col></Col>
        </Row>
        </Container>
        </>
    )
}