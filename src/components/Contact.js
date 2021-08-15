import React from 'react'
import { useInput } from './inputHook';
import { BrowserRouter as Router } from "react-router-dom"

const Contact = () => {
  const {value, bind, reset} = useInput({initialValue: "", isSubmitted : false});
  /* const [email, setEmail] = useState("");
  const [tel, setTel] = useState(0);
  const [selection, setselection] = useState("");
  const [message, setMessage] = useState(0); */


/*   useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []); */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    console.log("Ciaoooooo")
    alert(`Submitting Name ${value}`);
   /*  router.push("/thank-you"); */
    reset();
  } 

    return (
      <>
        <section className="showcase">
          <div className="flex h-screen flex-col items-center justify-center lg:w-auto">
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
                value="index.html" 
                data-netlify="true" 
                className="flex flex-col
                bg-blue-200 px-10 py-5 rounded"
                method="POST"
                action="../thank-you.html"
              >
              <input 
                type="text" 
                name="userName" 
                id="userName" 
                placeholder="Enter your Name" 
                {...bind}
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
                placeholder-blue-400 font-semibold" >
              </input>
              {/* <input 
                type="email" 
                name="email" 
                id="email_id" 
                placeholder="Enter your email address" 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold">
              </input>
              <input 
                type="tel"
                name="mobile_number"
                placeholder="Mobile number" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold" >
                </input>    
              <select name="selection"
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                  placeholder-blue-400 font-semibold">
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
              </select> 
              <textarea 
                name="textarea" 
                id="textarea_id" 
                cols="30"
                rows="10"
                placeholder="Leave me a message with a short introduction" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold" >
              </textarea>*/}
              <input 
                type="submit" 
                value="Submit message" 
                className="bg-blue-400 text-white font-bold
                  tracking-wider py-2 rounded cursor-pointer 
                  transition-all hover:bg-blue-800"
                  onSubmit={handleSubmit}>

              </input> 
              </form>
            </div>  
          </div>
        </section>  
      </>  
    )
}

export default Contact
