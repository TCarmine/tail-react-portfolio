import React from 'react'
import { useForm } from 'react-hook-form';

const Hire = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
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

            <form onSubmit={handleSubmit(onSubmit)}
              name="Feeback form" 
              className="flex flex-col
              bg-blue-200 px-10 py-5 rounded"
              method="post">
              <input 
                type="text" 
                name="Completename" 
                id="completename" 
                placeholder="Enter your Name" 
                required
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-50 
                placeholder-blue-400 font-semibold"
                {...register("Completename", {required: true, maxLength: 80})}>
              </input>
              <input 
                type="email" 
                name="Email" 
                id="email" 
                placeholder="Enter your email address" 
                require
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
                {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}>
              </input>
              <input 
                type="tel"
                placeholder="Mobile number" 
                className="py-2 px-4 mb-5 rounded border border-solid border-blue-500 
                placeholder-blue-400 font-semibold"
                {...register("Mobile number", {required: false, minLength: 6, maxLength: 12})} 
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
                required
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

export default Hire
