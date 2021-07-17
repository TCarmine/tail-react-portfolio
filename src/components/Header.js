import React, {useState} from "react"
import {Link} from "react-router-dom"
import Hamburger from "./Hamburger"

const Header = () => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false)   

    const toggleHamburger = () =>{
      setHamburgerOpen(!hamburgerOpen)
    }

    return (
      <>
        <header className="flex flex-wrap justify-between md:space-x-4 p-10 w-full text-white relative">
          <div className="logo"> 
            <h2>
              <Link to="/" className="text-black text-3xl lg:text-7xl">Carmine Tambascia</Link>
            </h2>
           {/* <img class="h-8" src="" alt="Themes.dev Logo" title=""></img> for image logo*/}   
          </div>

          <nav style={ hamburgerOpen ? { display:'inline'} : {display : 'none'} }>
            <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg p-6 md:p-0">
              <li className="bg-blue-400 rounded-full 
               hover:bg-blue-500 mr-5 p-1 px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="bg-blue-400 rounded-full  
               hover:bg-blue-500 mr-5 p-1 px-4">
                  <Link to="/projects">Projects</Link>
              </li>
              <li className="bg-blue-400 rounded-full 
               hover:bg-blue-500 mr-5 p-1 px-4">
                  <Link to="/hire" >Hire</Link>
              </li>
            </ul>
          </nav>
          <div className="hamburger" onClick={toggleHamburger}>
              <Hamburger isOpen={hamburgerOpen}/>
            </div>  
        </header>
      </>  
    )
}
export default Header
