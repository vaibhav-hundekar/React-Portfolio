import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks"

function App() {
  return (
   <div>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Contact/>
   </div>
  );
}

export default App;
