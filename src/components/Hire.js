import React from 'react'

const Hire = () => {
    return (
      <section className="showcase">
        <div className="flex h-screen flex-col items-center 
         justify-center">
           <div className="bg-blue-400 py-10 px-10">
             <h2 className="text-white text-center text-5xl 
             font-semibold mb-5">
               Hire me!
             </h2>
             <p className="text-white text-center text-md 
             font-semibold mb-5 px-11 rounded border border-solid border-blue-500 
             placeholder-blue-400">Replies within 24 hours</p>
           </div>

          <form name="Feeback form" className="flex flex-col">
            <input 
              type="text" 
              name="username" 
              id="username" 
              placeholder="Enter your contact details" 
              required
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
              placeholder-blue-400 font-semibold">
            </input>
            <input 
              type="email" 
              name="email" 
              id="email" 
              placeholder="Enter your email to be contacted back" 
              require
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
            </input>
            <textarea 
              name="textarea" 
              id="textarea" 
              cols="30"
              rows="10"
              placeholder="Enter your email to be contacted back" 
              required
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
            </textarea>
            <input type="submit" value="Submit" className="bg-blue-400 text-white font-bold
            tracking-wider py-2 rounded cursor-pointer 
            transition-all hover:bg-blue-800"/>
          </form>
        </div>
      </section>  
    )
}

export default Hire
