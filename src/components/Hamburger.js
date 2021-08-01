import React from 'react'



const Hamburger = ({isOpen}) => {
  const burger1 = {
    transform: `${isOpen ? 'rotate(45deg)':'rotate(0)'}` 
  }
  
  const burger2 = {
    opacity: `${isOpen? 0 : 1}`
  }
  const burger3= {
    transform: `${isOpen ? 'rotate(-45deg)':'rotate(0)'}`
  }

  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" style={burger1}/>
        <div className="burger burger2" style={burger2}/>
        <div className="burger burger3" style={burger3}/>
      </div>
    </>  
  )
}

export default Hamburger
