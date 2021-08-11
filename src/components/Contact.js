import React from 'react'
import { useForm } from 'react-hook-form';
import {init, sendForm} from 'emailjs-com';

export const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
export const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
export const USER_ID = process.env.REACT_APP_USER_ID

init(USER_ID);

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  
   
    
    /*const sendFeedback = (SERVICE_ID, TEMPLATE_ID, variables) => {
      emailjs.send(
        SERVICE_ID, TEMPLATE_ID,
          variables
      ).then(res => {
          console.log('Email successfully sent!')
      })
          .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }  */
    
    

    const handleRegistration = (data,r) => {
      alert(`Thank you for your message from ${data.email}`);
      const templateId = TEMPLATE_ID; 
      const serviceID = SERVICE_ID;
      sendForm(SERVICE_ID, TEMPLATE_ID, "#Feeback form")
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
      r.target.reset();
    } 

    const handleError = (errors) => {};
    const registerOptions = {
      name: { required: "Name is required" },
      email: { required: "Email is required" },
      password: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must have at least 8 characters"
        }
      }
    };

    return (
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

            <form onSubmit={handleSubmit(handleRegistration, handleError)}
              name="Feeback form" 
              className="flex flex-col
              bg-blue-200 px-10 py-5 rounded"
              method="post">
              <input 
                type="text" 
                name="from_name" 
                id="completename" 
                placeholder="Enter your Name" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
                placeholder-blue-400 font-semibold"
                //aria-invalid={errors.user_name ? "true" : "false"}
                {...register("from_name", {required: true, maxLength: 80})}>
              </input>
              <input 
                type="email" 
                name="Email" 
                id="email" 
                placeholder="Enter your email address" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
                {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}>
              </input>
              <input 
                type="tel"
                name="Mobile number"
                ref={register}
                placeholder="Mobile number" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
                {...register("Mobile number", {required: false, minLength: 6, maxLength: 13})} 
                />
              <select className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
                {...register("Title", { required : true })}>
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
                {...register("textarea", { required : true })}
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold">
              </textarea>
              <input type="submit" value="submit" className="bg-blue-400 text-white font-bold
              tracking-wider py-2 rounded cursor-pointer 
              transition-all hover:bg-blue-800"/>
            </form>
          </div>  
        </div>
  
      </section>  
    )
}

export default Contact
