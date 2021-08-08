import React,{useState} from "react"
import { projects } from "./data.js"
import TextTimed from "./TextTimed.js"


const Projects = () => {
  // eslint-disable-next-line
  const [items, setItems] = useState(projects)

  return (
    <>
      <section className="cover py-36 px-5 bg-blue-400 bg-opacity-30 cover grid grid-cols-1 gap-5
      sm:grid-cols-2 lg:grid-cols-2 lg:min-h-screen lg:pt-36">
        {items.map((item,i) => {
          const { id, title, subtitle, description, imgSrc } = item
          return (
            <div key={id} className="relative ">
              <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center">
                <p className="block text-center break-words xs:text-xs sm:text-sm md:text-md lg:text-5xl">{title}</p> 
                <p className="text-center break-words font-semibold xs:text-xs sm:text-sm  lg:text-lg" style={{margin: "22px", color:"rgba(4, 27, 130)"}}>
                <TextTimed speed={150+i*50} msg={description} />
                </p>
              </div>  
              <div >
                <img src={`${imgSrc}`} alt={subtitle} className="p-5 bg-green-500 rounded opacity-50"/>
              </div>
            </div>  
          )
        })}
      </section>
    </>
  )
}

export default Projects
