import React, { useState} from 'react'

const Contact = () => {
  let showSuccess = false

  const [inputs, setInputs] = useState({
    firstName: '',
	  lastName: '',
	  email: '',
  });

  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(showSuccess);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      if(inputs.firstName) {
        setValid(true);
        setSubmitted(true);
      }
    
    }
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }

  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
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
              action="/thank-you.html"
              onSubmit={handleSubmit, {setSubmitted:true}}>   
              <input type="hidden" name="form-name" value="contact" />              
            <input 
              id="name"
              type="text" 
              disabled={showSuccess}
              name="name"
              onChange={handleInputChange} 
              setSubmitted= {setSubmitted}
              value={inputs.firstName}
              required
              placeholder="Enter your Full Name" 
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
              placeholder-blue-400 font-semibold" >
            </input>
            {submitted && !inputs.firstName && <span id='first-name-error'>Please enter your name</span>}
            <input 
              type="email" 
              name="email" 
              id="email_id" 
              placeholder="Enter your email address" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
            </input>
            <input 
              type="submit" 
              value="Submit message" 
              className="bg-blue-400 text-white font-bold
                tracking-wider py-2 rounded cursor-pointer 
                transition-all hover:bg-blue-800">
            </input> 
            </form>
            {showSuccess &&<div class='success-message'>Success! Thank you for registering</div>}
          </div>  
        </div>
      </section>  
    </>  
  )
}

export default Contact
