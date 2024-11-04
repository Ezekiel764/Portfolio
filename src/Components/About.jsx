import styled from "styled-components";
import React from "react"
import { MdPersonSearch } from "react-icons/md";
const About = () => {
    return(
        <Container>
            <h1>ABOUT ME <br /><MdPersonSearch style={{color:"#D3E97A"}} /></h1>
            <p>Experienced and detail-oriented Software Developer, developing, and maintaining complex
applications and systems. Proficient in front-end development, with strong skills in [specific
languages, frameworks, or technologies, e.g., JavaScript, Python, React, Node.js]. Known for a
user-centric approach to UI/UX and a passion for creating optimized, scalable, and responsive
applications that enhance user engagement and business efficiency. Seeking a dynamic role
where technical expertise and creativity can contribute to innovative solutions and business
growth.
</p>
        </Container>
    )
}
export default About

const Container = styled.div`
text-align: center;
max-width: max-content;
p{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
`