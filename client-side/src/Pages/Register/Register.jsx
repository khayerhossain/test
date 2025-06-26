import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import loginImage from '../../assets/blackpot-plants2.jpg';
import { AuthContext } from '../../Providers/AuthContext';
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import Swal from 'sweetalert2';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { createUser, signInWithGoogle, updatedUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Password validator regex: min 8 chars, at least 1 uppercase, 1 lowercase, 1 special char
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    const form = e.target;
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    // Check password validity
    if (!validatePassword(userData.password)) {
      setError('Password must be at least 8 characters, include uppercase, lowercase & special character.');
      return;
    }

    // Create user and handle rest
    createUser(userData.email, userData.password)
      .then((result) => {
        const user = result.user;

        updatedUser({
          displayName: userData.name,
          photoURL: userData.photo
        })
          .then(() => {
            const updated = { ...user, displayName: userData.name, photoURL: userData.photo };
            setUser(updated);

            // Save user to backend
            fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(userData)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Account Created Successfully!",
                    icon: "success",
                    draggable: true
                  });
                }
                navigate('/');
              });

            form.reset();
          })
          .catch(err => {
            console.error("Profile update error:", err);
            setError("Profile update failed.");
          });
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleRegisterWithGoogle = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-6 pt-0 lg:pt-20 pb-0 lg:pb-32">
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
            Hello!<br /> Register to get started
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your name"
              name='name'
              required
              className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Enter your PhotoURL"
              name='photo'
              required
              className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name='email'
              required
              className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                name='password'
                required
                className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-4 text-gray-500 cursor-pointer'
              >
                {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
              </button>
            </div>

            {/* Forgot Password link */}
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Show error message below Forgot Password */}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

            <button
              type="submit"
              className="w-full cursor-pointer py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Register
            </button>
          </form>

          <div className="flex items-center justify-center space-x-2 text-gray-400 mt-5 text-sm">
            <hr className="w-1/4 border-gray-300" />
            <span>Or Login with</span>
            <hr className="w-1/4 border-gray-300" />
          </div>

          <button
            onClick={handleRegisterWithGoogle}
            className="btn w-full mt-4 py-6 rounded-md bg-white text-black border border-gray-300 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50"
          >
            <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
              </g>
            </svg>
            Login with Google
          </button>

          <div className='text-center mt-5'>
            <small>Already Have An Account? <Link className='text-violet-500' to='/login'>Login Now</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
