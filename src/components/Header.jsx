
// import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link"

const Header = () => {
  return (
  
    <nav>
        <h1>TechStar</h1>
       
            <HashLink to= {"/#home"}>Home</HashLink>
            <HashLink to= {"/contact"}>Contact</HashLink>
            <HashLink to= {"/#about"}>About</HashLink>
            <HashLink to= {"/#brands"}>Brands</HashLink>
            <HashLink to= {"/services"}>Services</HashLink>
            
        
    </nav>

  
    
  )
};

export default Header;