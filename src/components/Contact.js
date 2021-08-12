import React, {useState, useEffect} from 'react'


const Contact = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);


    return (

      {success && (
        <p style={{ color: "green" }}>Thanks for your message! </p>
      )}
      <section className="showcase">
        <div className="flex h-screen flex-col items-center 
         justify-center lg:w-auto">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
            <div className="bg-blue-400 py-10 px-20 rounded
            lg:px-10 pt-32 ">
              <h2 className="text-white text-center text-5xl 
              font-semibold mb-5 lg:text-7xl">
                Contact me
              </h2>
              <p className="text-white text-center text-md 
              font-semibold mb-5 px-11 rounded border border-solid border-blue-500 
              placeholder-blue-400">Replies within 24 hours</p>
            </div>

            <form 
              name="contact" 
              netlify netlify-honeypot="bot-field" hidden
              className="flex flex-col
              bg-blue-200 px-10 py-5 rounded"
              method="POST"
              action="/contact/?success=true"
              data-netlify="true" 
            >
            <input 
              type="text" 
              name="from_name" 
              id="completename" 
              placeholder="Enter your Name" 
              value="contact"
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
              placeholder-blue-400 font-semibold" >
            </input>
            <input 
              type="email" 
              name="Email" 
              id="email" 
              placeholder="Enter your email address" 
              value="contact"
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
            </input>
            <input 
              type="tel"
              name="Mobile number"
              placeholder="Mobile number" 
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold" >
              </input>    
            <select 
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
              value="contact">
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
            </select> 
            <textarea 
              name="textarea" 
              id="textarea" 
              cols="30"
              rows="10"
              placeholder="Leave me a message with a short introduction" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold" >
            </textarea>
            <input 
              type="submit" 
              value="submit" 
              className="bg-blue-400 text-white font-bold
                tracking-wider py-2 rounded cursor-pointer 
                transition-all hover:bg-blue-800">
            </input>
            </form>
          </div>  
        </div>
      </section>  
    )
}

export default Contact
