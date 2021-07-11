import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <>
        <header className="flex justify-between p-10 absolute w-full text-white">
          <div className="logo"> 
            <h2>
              <Link to="/" className="text-black text-3xl lg:text-7xl">Carmine Tambascia</Link>
            </h2>  
          </div>

          <nav>
            <ul className="flex">
              <li className="mr-5 bg-blue-400 p-1 px-4 rounded-full font-semibold transition-all
               hover:bg-blue-500">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-5 bg-blue-400 p-1 px-4 rounded-full font-semibold transition-all
               hover:bg-blue-500">
                  <Link to="/projects">Projects</Link>
              </li>
              <li className="mr-5 bg-blue-400 p-1 px-4 rounded-full font-semibold transition-all
               hover:bg-blue-500">
                  <Link to="/hire" >Hire</Link>
              </li>
            </ul> 
          </nav>
        </header>
      </>  
    )
}

export default Header
