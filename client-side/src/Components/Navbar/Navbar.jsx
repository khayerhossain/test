import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../Providers/AuthContext';
import mainLogo from '../../assets/main-logo-2.png';

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
      .then(() => navigate('/login'))
      .catch((error) => console.log(error.message));
  };

  const linkStyle = ({ isActive }) =>
    isActive
      ? 'text-white underline underline-offset-4 decoration-white font-semibold'
      : 'text-white hover:text-white transition';

  return (
    <div className="sticky top-0 z-50 bg-green-900 shadow-md">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between py-3">

        {/* Navbar Start: Logo */}
        <div className="flex items-center justify-center">
          <img className="w-10" src={mainLogo} alt="Logo" />
          <span className="text-xl font-bold text-white">GreenSpot</span>
        </div>

        {/* Navbar Center - Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/exploregardeners" className={linkStyle}>Explore Gardeners</NavLink>
          <NavLink to="/browsetips" className={linkStyle}>Browse Tips</NavLink>
          <NavLink to="/sharetip" className={linkStyle}>Share Gardener Tip</NavLink>
          <NavLink to="/mytip" className={linkStyle}>My Tips</NavLink>
          {user && <NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink>}
        </div>

        {/* Navbar End - Avatar + Button */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                  <img src={user.photoURL || "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"} alt="Profile" />
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="bg-white text-black px-6 py-2 rounded-3xl cursor-pointer font-semibold hover:bg-green-100 transition hidden md:inline-block"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-white text-black px-6 py-2 rounded-3xl cursor-pointer font-semibold hover:bg-green-100 transition hidden md:inline-block">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Dropdown */}
        <div className="lg:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#388E3C] text-white shadow-md rounded-box w-52 mt-3 z-50">
            <li><NavLink to="/" className={linkStyle}>Home</NavLink></li>
            <li><NavLink to="/exploregardeners" className={linkStyle}>Explore Gardeners</NavLink></li>
            <li><NavLink to="/browsetips" className={linkStyle}>Browse Tips</NavLink></li>
            <li><NavLink to="/sharetip" className={linkStyle}>Share Gardener Tip</NavLink></li>
            <li><NavLink to="/mytip" className={linkStyle}>My Tips</NavLink></li>
            {user && (
              <li><NavLink to="/dashboard" className={linkStyle}>Dashboard</NavLink></li>
            )}
            <li>
              {user ? (
                <button onClick={handleSignOut}>Logout</button>
              ) : (
                <NavLink to="/login" className={linkStyle}>Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
