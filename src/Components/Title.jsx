import styled from "styled-components";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import React from "react";
const Title = () =>{
    return(
        <Container>
            <h1> HI,I AM <br /> BANGBOYE EZEKIEL </h1>
            <p>A Lagos based front-end developer passionate about building accessible and user friendly websites.</p>
            <br />
            <Button>
                <ConBtn>CONTACT ME <GoDotFill /></ConBtn>
                <LinBtn><a href="http://linkedin.com/in/Bamigboye-ezekiel"><FaLinkedin style={{color:"#D3E97A"}}/></a></LinBtn>
                <GitBtn><a href="http://github.com/Ezekiel764"><RxGithubLogo style={{color:"#D3E97A"}}  /></a></GitBtn>
            </Button>
        </Container>
    )
}
export default Title 

const Container = styled.div`
    text-align: center;
    
    p{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
`
const Button = styled.div``
const ConBtn = styled.button`
width: 90px;
height: 25px;
background-color: #D3E97A;
color: black;
border: none;
border-radius: 8px;
margin-right: 10px;

@media (max-width: 600px) {
    margin-top: 8px;
}
`
const LinBtn = styled.button`
width: 25px;
height: 25px;
border-radius: 50%;
border: none;
color: #D3E97A;
background-color: black;
margin-right: 10px;
`
const GitBtn = styled.button`
width: 25px;
height: 25px;
border-radius: 50%;
border: none;
color: #D3E97A;
background-color: black
`