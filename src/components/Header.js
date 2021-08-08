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
        <link href='https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&display=swap' rel='stylesheet' type='text/css'>
          <div className="logo"> 
            <h2>
              <Link to="/" className="text-3xl lg:text-5xl" style={{color:"rgba(27, 22, 30)"}}>Carmine Tambascia</Link>
            </h2>
          </div>
          <nav className={`nav-links ${hamburgerOpen ? 'open' : ''}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg p-6 md:p-0">
            <li className="bg-blue-500 rounded-full 
               hover:bg-blue-700 mr-5 p-1 px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="bg-blue-500 rounded-full 
               hover:bg-blue-700 mr-5 p-1 px-4">
                <Link to="/VisualCV">Timeline</Link>
              </li>
              
              <li className="bg-blue-500 rounded-full  
               hover:bg-blue-700 mr-5 p-1 px-4">
                  <Link to="/projects">Projects</Link>
              </li>
              <li className="bg-blue-500 rounded-full 
               hover:bg-blue-700 mr-5 p-1 px-4">
                  <Link to="/hire" >Contact me</Link>
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
