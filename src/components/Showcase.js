import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
    return (
      <>
       <section className="showcase">
         <div className="flex h-screen flex-col items-center 
         justify-center text-white">
           <div className="overlay">
            <h1 className="text-5xl font-bold text-center mb-10
            lg:text-center lg:text-7xl7 lg:px-32">I create  
             <span className="text-blue-500 "> User Interfaces </span> 
              leveraging React and Javascript
            </h1>
           </div> 
          
          <div className="ml-auto lg:ml-0">
            <Link to="/hire"
            className="mr-5 bg-blue-400 p-2 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-500">Contact Me!</Link>
            <Link to="/projects"
            className="mr-5 bg-white text-blue-500 p-2 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-500 hover:text-white"> Projects</Link>
          </div>  
         </div> 
      </section>
      </> 
    )
}

export default Showcase
