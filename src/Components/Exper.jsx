import styled from "styled-components";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
const Exper = () => {
    return(
        <Contain>
            <hr />
            <h1>EXPERIENCE</h1>
            <JobTitle>
                <Job>Software Engineer</Job>
                <Time>July 2024– Present, Sail</Time>
            </JobTitle>
            <p>As a Web Developer with a strong foundation in React.js, I specialize in creating dynamic, responsive web applications that provide outstanding user experiences. My React Native experience has equipped me to build seamless cross-platform mobile applications for both iOS and Android. I’m skilled in component-based architecture and state management, enabling me to develop fast, scalable, and interactive web pages. Staying current with the latest technologies, I ensure that my solutions are modern, efficient, and optimized for performance.</p>
            <h4>Skills:</h4>
            <Skill>
                <Jav><RiJavascriptFill style={{color:"#D3E97A"}} size={30} /><br />JavaScript</Jav>
                <Rea><FaReact style={{color:"#D3E97A"}} size={30}/><br />React</Rea>
                <Httm><FaHtml5 style={{color:"#D3E97A"}} size={30}/><br />Html 5</Httm>
                <Ccs><IoLogoCss3 style={{color:"#D3E97A"}} size={30}/><br />Css 3</Ccs>
                <Type><SiTypescript style={{color:"#D3E97A"}} size={30}/><br />TypeScript</Type>
            </Skill>
        </Contain>
    )
}
export default Exper

const Contain = styled.div`
text-align: center;
p{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`
const JobTitle = styled.div`
display: flex;
justify-content: space-between;
`
const Job = styled.h3`
font-style: italic;
`
const Time = styled.h3`
font-style: italic;
`
const Skill = styled.div``
const Jav = styled.button`
background-color: black;
border: none;
border-radius: 8px;
width: 90px;
height: 70px;
margin-right: 8px;
`
const Rea = styled.button`
background-color: black;
border: none;
border-radius: 8px;
width: 90px;
height: 70px;
margin-right: 8px;
`
const Httm = styled.button`
background-color: black;
border: none;
border-radius: 8px;
width: 90px;
height: 70px;
margin-right: 8px;
`
const Ccs = styled.button`
background-color: black;
border: none;
border-radius: 8px;
width: 90px;
height: 70px;
margin-right: 8px;
margin-top: 10px;
@media (max-width: 200px) {
    margin-right: 8px;
}
`
const Type = styled.button`
background-color: black;
border: none;
border-radius: 8px;
width: 90px;
height: 70px;
margin-right: 8px;
`