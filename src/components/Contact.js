import React, { useState } from 'react'

const Contact = () => {
  let showSuccess

  const [inputs, setInputs] = useState({});
  const [valid, setValid] = useState(false);
  const [submitted, setSubmitted] = useState(showSuccess);
  
  const handleInputChange = (e) => {
    e.persist();

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  }

  const handleSubmit = (e) => {
    setSubmitted(true);
    if (e) {
      e.preventDefault();
      if(inputs.firstName && inputs.email && inputs.message) {
        setValid(true) 
      }
    }
  }
 
  return (
    <>
      <section className="showcase">
        <div className="flex h-screen flex-col items-center justify-center lg:w-auto">
          <div className="flex flex-col w-9/12 lg:w-auto lg:flex-row">
          <div className="bg-blue-400 py-10 px-20 rounded
          lg:px-10 md: pt-32 ">
            <h2 class="text-white lg:text-center ms:text-right font-semibold mb-5 ms:text-sm lg:text-7xl">
              Contact me
            </h2>
            <p class="text-white 
                        text-md 
                        font-semibold mb-5 
                        ms:text-right lg:text-3xl rounded border 
                        border-solid border-blue-500  placeholder-blue-400">
              Replies within 24 hours</p>
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
              id="full-name"
              type="text" 
              name="fullName"
              onChange = {handleInputChange} 
              value={inputs.fullName}
              required
              placeholder="Enter your Full Name" 
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
              placeholder-blue-400 font-semibold" >
            </input>
            {submitted && !inputs.fullName && <span id='first-name-error'>Please enter your name</span>}
            <input 
              id="email_id"
              type="email" 
              name="email" 
              onChange = {handleInputChange} 
              value = {inputs.email}
              required
              placeholder="Enter your email address" 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
            </input>
            {submitted && !inputs.email && <span id='email-error'>Please enter a valid email address</span>}
            <input 
              id="tel_id"
              type="tel" 
              name="mobile_number" 
              onChange = {handleInputChange} 
              value = {inputs.email}
              required
              placeholder="Enter your phone number" 
              pattern = "+\d"  
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold">
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
              id="textarea_id"
              name="message" 
              type="text" 
              cols="30"
              rows="10"
              onChange = {handleInputChange} 
              value = {inputs.messsage}
              placeholder="Leave me a message with a short introduction" 
              className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
              placeholder-blue-400 font-semibold" >
            </textarea>
            <input 
              type="submit" 
              value="Submit message" 
              className="bg-blue-400 text-white font-bold
                tracking-wider py-2 rounded cursor-pointer 
                transition-all hover:bg-blue-800">
            </input> 
            </form>
            {showSuccess &&<div class='success-message'>Thank you for contact me. You will get an answer from me in 24 hours</div>}
          </div>  
        </div>
      </section>  
    </>  
  )
}

export default Contact
