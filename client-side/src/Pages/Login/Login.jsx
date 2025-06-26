import React, { use, useState } from 'react';
import loginImage from '../../assets/blackpot-plants2.jpg';
import { Link, useNavigate } from 'react-router';
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { AuthContext } from '../../Providers/AuthContext';
import toast from 'react-hot-toast';
import { auth } from '../../Firebase/Firebase.init';
const Login = () => {
  const [showPassword,setShowPassword]=useState(false);
  const {signInUser,signInWithGoogle,setUser}=use(AuthContext);
  const navigate=useNavigate();
    const handleLogin=e=>{
      e.preventDefault();
       const form=e.target;
      const formData=new FormData(form);
      const userData=Object.fromEntries(formData.entries());
      console.log(userData);
       
       signInUser(userData.email,userData.password).then(async result => {
          console.log(result)
          await auth.currentUser.reload(); 
          setUser(auth.currentUser); 
          toast.success('LoggedIn successfully!');
          navigate('/');
        })

    };
    const handleLoginWithGoogle=()=>{
     signInWithGoogle()
      .then(async result => {
        console.log(result)
        await auth.currentUser.reload();
        setUser(auth.currentUser);
        toast.success('LoggedIn successfully!');
        navigate('/');

  })
  .catch(error => {
    console.error("Google sign-in error:", error.message);
  });

    }

  return (
    <div className="flex items-center justify-center bg-gray-100  px-4 py-6 pt-0 lg:pt-20 pb-0 lg:pb-32">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl w-full border border-gray-200">
        
        {/* Left side - Image */}
        <div className="md:w-1/2 w-full hidden md:block">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right side - Form */}
        <div className="md:w-1/2 w-full p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Welcome back! Glad <br /> to see you, Again!
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              name='email'
              className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="relative">
               <input
                 type={showPassword ? 'text' : 'password'}
                 placeholder="Enter your password"
                 name='password'
                 className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
               />
               
                 <button
                   onClick={()=>setShowPassword(!showPassword)}
                   className='absolute right-3 top-4 text-gray-500 cursor-pointer'> 
                   {showPassword ? <IoMdEye size={20} />: <IoMdEyeOff size={20} /> }
                   </button>
  
               </div>

            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Login
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mt-5 text-sm">
            <hr className="w-1/4 border-gray-300" />
            <span>Or Login with</span>
            <hr className="w-1/4 border-gray-300" />
          </div>

          {/* Google login button */}
          <button onClick={handleLoginWithGoogle} className="btn w-full mt-4 py-6 rounded-md bg-white text-black border border-gray-300 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50">
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
          <div className='text-center mt-5'>
            <small>Don't Have An Account? <Link className='text-violet-500' to='/register'>Register</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
