import React,{useState} from "react"
import {projects} from "./data.js"


const Projects = () => {
  const [items, setItems] = useState(projects)

  return (
    <>
      <section className="py-36 px-5 bg-blue-800">
        {items.map((item) => {
          const { id, title, subtitle, description, imgSrc } = item
          return (
            <div key={id}>
              <p>{title}</p>
              <img src={`${imgSrc}`} alt={subtitle} width="400" height="341"/>
              <small>{description}</small>
              {console.log(`${projects.imgSrc}`)}
            </div>
          )
        })}
      </section>
      <img src="./assets/Grimpsel.jpg" alt="lucern"  width="300" height="341" />
      <img src="https://randomuser.me/api/portraits/men/94.jpg"  width="300" height="341" />
    </>
    )
}

export default Projects
