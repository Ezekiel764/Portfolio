import styled from "styled-components"
import Dessert from "../assets/Dessert-web.png"
import Kuda from "../assets/Kuda-clone.png"
import React from "react"
import { HiExternalLink } from "react-icons/hi";
const Project = () => {
    return(
        <Section>
            <h1>PROJECTS</h1>
            <br />
            <BoxOne>
                <WorkOne>
                  <img src={Dessert} alt="" />
                  <h3>Product Page</h3>
                  <p>This is a product page that allows user to add to cart.
                    <br />This app display the quantity of items and calculate the sum</p>
                    <LinBt><a href="https://desserts-iota.vercel.app/"><HiExternalLink style={{color:"#D3E97A"}}/></a></LinBt>
                </WorkOne>
                <br />
                <WorkTwo>
                    <img src={Kuda} alt="" />
                    <h3>Kuda Clone</h3>
                    <p>this is the Destop landimg page of Kuda <br /> it dispalys diffent sectios </p>
                    <VenBt><a href="https://kuda-clone-bay.vercel.app/"><HiExternalLink style={{color:"#D3E97A"}}/></a></VenBt>
                </WorkTwo>
            </BoxOne>
        </Section>
    )
}
export default Project

const Section = styled.div`
text-align: center;
`
const BoxOne = styled.div`
align-items: center;
`
const WorkOne = styled.div``
const WorkTwo = styled.div``
const LinBt = styled.button`
width: 25px;
height: 25px;
border-radius: 50%;
border: none;
color: #D3E97A;
background-color: black;
`
const VenBt = styled.button`
width: 25px;
height: 25px;
border-radius: 50%;
border: none;
color: #D3E97A;
background-color: black;
`