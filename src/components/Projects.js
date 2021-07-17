import React,{useState} from "react"
import {projects} from "./data.js"


const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(projects)

  return (
    <>
      <section className="cover py-36 px-5 bg-blue-400 bg-opacity-30 cover grid grid-cols-1 gap-5
      sm:grid-cols-2 lg:grid-cols-2 lg:min-h-screen lg:pt-36">
        {items.map((item) => {
          const { id, title, subtitle, description, imgSrc } = item
          return (
            <div key={id} className="relative ">
              <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center ">
                <p className="block text-center text-5xl">{title}</p> 
                <p className="text-center text-white break-all font-semibold text-lg opacity-25 
                  hover:opacity-100">
                  {description}
                </p>
              </div>  
              <div >
                <img src={`${imgSrc}`} alt={subtitle} className="p-5 bg-green-500 rounded opacity-30"/>
              </div>
            </div>  
          )
        })}
      </section>
    </>
  )
}

export default Projects
