import styled from "styled-components"
import Profile from "../assets/Profile.jpg"
const Me = () =>{
    return(
      <ImageCon>
        <img src={Profile} alt="" />
      </ImageCon>
    )
  }
  export default Me
 
 const ImageCon = styled.div`
  width: 231px;
  position: relative;
  height: 231px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  gap: 0px;
  opacity: 0px;

  img{
    position: inherit;
    border-radius: 47%;
    size-adjust: inherit;
    margin-left: 18px;
    margin-right: auto;
    max-width: 81%;
    height: inherit;
  }
`