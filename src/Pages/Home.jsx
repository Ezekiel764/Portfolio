import Exper from "../Components/Exper"
import Project from "../Components/Project"
import Title from "../Components/Title"
import About from "./About"
import Me from "../Components/Me"
import Contact from "./Contact"

const Home = () =>{
    return(
        <div>
         <Me/>
         <Title/>
         <About/>
         <Exper/>
         <Project/>
         <Contact/>
        </div>
    )
}
export default Home