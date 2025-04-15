import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <section
      className="flex items-center justify-center bg-cover min-h-screen py-40 bg-center relative"
    >
      <div className="flex flex-col items-center justify-center bg-yellow-1 00 w-[500px] h-[400px] rounded-3xl p-4 shadow-lg">
      <h6 className='text-4xl pb-12 font-serif font-bold drop-shadow text-yellow-300'> Login </h6>
        <form action="https://formsubmit.co/ayomikunadegboyega@gmail.com" method="POST"> 
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 border rounded-md"
          />
               <label htmlFor="username" className="block text-gray-700 font-medium">
                Password
          </label>
          <input
            id="Password"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" 
            className="w-full mt-2 p-2 border focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
          />
        </form>
        <button className='w-full h-10 bg-yellow-300 rounded-lg m-6 '>Submit</button>
      <p>Dont have an account yet ? <Link to={"/signup"} className='text-yellow-300'>Sign up </Link> here </p>
      </div>
    </section>
  );
};

export default Login;
