import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
    return (
      <>
       <section className="showcase">
         <div className="flex h-screen flex-col items-center 
         justify-center text-white">
           <div className="overlay">
            <h1 className="text-5xl font-bold text-right mb-5
            lg:text-center">I create  
             <span className="text-blue-500 "> User Interfaces </span> 
              leveraging React and Javascript
            </h1>
           </div> 
          <div className="items-center">
            <Link to="/hire"
            className="mr-5 bg-blue-400 p-2 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-600">Contact Me!</Link>
            <Link to="/projects"
            className="mr-5 bg-white text-blue-500 p-2 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-600"> Projects</Link>
          </div>  
         </div> 
      </section>
      </> 
    )
}

export default Showcase
