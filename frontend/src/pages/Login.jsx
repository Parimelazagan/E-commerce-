import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form 
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 
                     gap-4 text-gray-800 '
      onSubmit={onSubmitHandler}

    >

     <div className='inline-flex items-center gap-2 mb-2 mt-10 '>
        <p className='text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800 '/>
     </div>

     {currentState === 'Login' ? '' :      
      <input 
        type="text" 
        name="" 
        id=""
        placeholder='Name'
        required
        onChange={(e) => setName(e.target.value) }
        value={name}
        className='w-full border border-gray-400 px-3 py-2 rounded-sm'
      />
     }

     <input 
      type="email" 
      name="" 
      id=""
      placeholder='Email'
      required
      onChange={(e) => setEmail(e.target.value) }
      value={email}
      className='w-full border border-gray-400 px-3 py-2 rounded-sm'
     />

     <input 
      type="password" 
      name="" 
      id=""
      placeholder='Password'
      required
      onChange={(e) => setPassword(e.target.value) }
      value={password}
      className='w-full border border-gray-400 px-3 py-2 rounded-sm'
     />

     <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-blue-600 cursor-pointer'>
          Forgot password?
        </p>

        {currentState === 'Login' 
          ? <p className='text-blue-600 cursor-pointer' onClick={() => setCurrentState('Sign Up')}>
              Create account
            </p>
          : <p className='text-blue-600 cursor-pointer' onClick={() => setCurrentState('Login')}>
              Login here
            </p>
        }
     </div>

     <button
        className='bg-black text-white px-8 py-2 mt-4 rounded'
     >
        {currentState === 'Login' ? "Sign In" : "Sign Up"}
     </button>
      
    </form>
  )
}

export default Login
