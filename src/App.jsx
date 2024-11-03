import Header from "./Components/Header"
import Me from "./Components/Me"
import Title from "./Components/Title"
import About from "./Components/About"
import Exper from "./Components/Exper"
import Project from "./Components/Project"
import "./App.css"
import React from "react"

const App = () =>{
  return(
    <div>
      <Header/>
      <Me/>
      <Title/>
      <br />
      <About/>
      <br />
      <Exper/>
      <br />
      <Project/>
    </div>
  )
}
export default App