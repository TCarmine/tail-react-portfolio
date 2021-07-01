import React from "react"
import About from "./components/About_old"
import Contact from "./components/Contact_old"
import Navbar from "./components/Navbar_old"
import Projects from "./components/Projects_old"
import Skills from "./components/Skills_old"
import Testimonials from "./components/Testimonials_old"

export default function App() {
    return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects /> 
        <Skills />{/* finanacial project, Parlito */}
        <Testimonials />{/* Eugen, Daniel */}
        <Contact />
      </main>
    )
}
