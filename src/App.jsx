import Header from "./Components/Header"
import About from "./Pages/About"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import "./App.css"
import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

const App = () =>{
  return(
    <div>
      <Header/>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App