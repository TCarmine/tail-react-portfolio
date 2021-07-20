import React, { useState } from "react"
import "../index.css"
import HorizontalTimeline from "react-horizontal-timeline"
//import { Timeline, TimelineEvent } from "react-event-timeline"
import { history } from "./data.js"

export default function StoryTimeline() {
  
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(-1);
  //const [positions, setPosition] = useState(history)

  return (
       <> 
        <div className="App">
          <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
            <HorizontalTimeline
              getLabel={(history) => history}
              index={current}
              indexClick={(index) => {
                setCurrent(index);
                setPrevious(previous);
              }}
              //key={id}
              values={history.map((el) => el.year)}
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
          <div style={{fontWeight: "bold", fontSize:25}}>{history[current].title}</div>
          <p>{history[current].Company}</p>
          <p>{history[current].desc}</p>
        </div>
       </> 
  )  
}
