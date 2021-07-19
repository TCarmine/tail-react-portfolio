import React, { useState } from "react"
import "../index.css"
import HorizontalTimeline from "react-horizontal-timeline"
import { Timeline, TimelineEvent } from "react-event-timeline"
import { History } from "./data.js"

export default function StoryTimeline() {
  
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [positions, setPosition] = useState(History)

  {positions.map((position) =>{
    const { id, year, Company, title, desc } = elem
      return (
       <> 
        <div key={id} className="App">
          <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
            <HorizontalTimeline
              getLabel={(Position) => data}
              index={current}
              indexClick={(index) => {
                setCurrent(index);
                setPrevious(current);
              }}
              values={positions.map((el) => el.year)}
              maxEventPadding={20}
              minEventPadding={20}
              styles={{
                background: "white",
                foreground: "#BD3253",
                outline: "#BFBFBF",
                margin: "0 auto",
                textAlign: "center"
              }}
            />
          </div>
          <div>{positions[current].desc}</div>
        </div>
       </> 
      )  
  })}  
}
