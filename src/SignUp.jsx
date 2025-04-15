import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <section
      className="flex items-center justify-center bg-cover min-h-screen bg-center py-28 relative"
    >
      <div className="flex flex-col items-center justify-center  w-[500px] h-[500px] rounded-3xl p-4 shadow-lg">
      <h6 className='text-4xl pb-12 font-serif font-bold drop-shadow text-yellow-300'> SignUp </h6>
        <form>
          <label htmlFor="username" className="block text-gray-700 font-medium">
            Username:
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="w-full mt-2 p-2 border focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
          />
           <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
          </label>
          <input
            id="email"
            type="text"
          
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            className="w-full mt-2 p-2 border focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-md"
          />
               <label htmlFor="password" className="block text-gray-700 font-medium">
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
        <p>Have an account already ? <Link to={"/login"} className='text-yellow-300 py-32'>Login</Link> here </p>
      </div>
    </section>
  );
};

export default SignUp;
