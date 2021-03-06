import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './components/Header'
import Showcase from './components/Showcase'
import Projects from './components/Projects'
import Contact from './components/Contact'
import VisualCV from './components/StoryTimeline'
import ThankYou from './components/ThankYou'


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
        <Route path="/Contact">
          <Contact />
        </Route> 
        <Route path="/VisualCV">
          <VisualCV />
        </Route> 
        <Route component={ThankYou} />          
      </Router>
    )
}