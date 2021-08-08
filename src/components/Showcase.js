import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
    return (
      <>
       <section className="showcase">
        <div className="flex h-screen flex-col items-center 
          justify-center text-white">
            <div className="overlay">
              <div class="m-auto">
                <h1 className="text-5xl resize font-bold text-center mb-10
                 lg:text-center lg:text-7xl7 lg:px-32 mt-5">I create  
                  <span className="text-blue-500 "> User Interfaces </span > 
                    leveraging React and Javascript
                </h1>
              </div> 
            </div> 
          
          <div className="ml-auto lg:ml-0 m-6 items-center justify-center">
            <Link to="/hire"
            className="mr-5 bg-blue-500 py-4 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-700 items-center justify-center" >Contact Me</Link>
            <Link to="/projects"
            className="mr-5 bg-white text-blue-500 py-4 px-4 rounded-full font-semibold transition-all
            hover:bg-blue-700 hover:text-white "> Projects</Link>
          </div>  
        </div> 
      </section>
      </> 
    )
}

export default Showcase
