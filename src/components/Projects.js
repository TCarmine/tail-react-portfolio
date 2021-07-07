import React,{useState} from "react"
import {projects} from "./data.js"


const Projects = () => {
  const [items, setItems] = useState(projects)

  return (
    <>
      <section className="cover py-36 px-5 bg-blue-400 cover grid grid-cols-1 gap-5
      sm:grid-cols-2 lg:grid-cols-2 lg:min-h-screen lg:pt-36">
        {items.map((item) => {
          const { id, title, subtitle, description, imgSrc } = item
          return (
            <div key={id}>
              <p className="block text-center text-lg">{title}</p>
              <img src={`${imgSrc}`} alt={subtitle} className="p-5 bg-green-500 rounded"/>
              <small className="block text-center text-white
              font-semibold text-lg">
                {description}
              </small>
            </div>
          )
        })}
      </section>
    </>
    )
}

export default Projects
