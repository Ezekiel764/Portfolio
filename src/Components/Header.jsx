import React from "react"
import styled from "styled-components"
const Header = () =>{
    return(
      <Container>
        <Logo>
          <h3>BANGBOYE EZEKIEL</h3>
        </Logo>
        <Button>
          <AbtBtn>About me</AbtBtn>
          <ConBtn>Contact</ConBtn>
        </Button>
      </Container>
    )
  }
export default Header

const Container = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
margin-right: 20px;
margin-left: 20px;
`
const Logo = styled.div``
const Button = styled.div`
display: flex;
align-items: center;
h3{
  font-style: italic;
}
`
const AbtBtn = styled.button`
margin-right: 20px;
width: 60px;
height: 25px;
background-color: black;
border: none;
border-radius: 8px;
`
const ConBtn = styled.button`
width: 60px;
height: 25px;
background-color: white;
color: black;
border: none;
border-radius: 8px;
`
