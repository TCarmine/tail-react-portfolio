import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Showcase from './components/Showcase'
import Projects from './components/Projects'
import Hire from './components/Hire'

export default function App() {
    return (
      <Router>
        <Header/>
        <Route path="/" exact>
          <Showcase />
        </Route>
        <Route path="/Projects">
          <Projects />
        </Route>    
        <Route path="/Hire">
          <Hire />
        </Route>          
      </Router>
    )
}