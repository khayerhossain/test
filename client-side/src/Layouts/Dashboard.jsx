import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router'; 
import { IoMdCloseCircle } from "react-icons/io";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const linkClass = ({ isActive }) =>
    isActive
      ? 'block py-2 px-4 bg-green-700 text-white rounded-md'
      : 'block py-2 px-4 hover:bg-green-200 rounded-md';

  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 bg-green-100 shadow-md p-6 w-64 h-screen transform transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-4 md:hidden">
          <button onClick={toggleSidebar} className="text-2xl text-green-900">
            <IoMdCloseCircle />
          </button>
        </div>

        <h2 className="text-xl font-bold text-green-900 mb-6 text-center md:text-left">Dashboard Menu</h2>
        <ul className="space-y-3">
          <li>
            <NavLink to="/" className={linkClass} onClick={() => setSidebarOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" end className={linkClass} onClick={() => setSidebarOpen(false)}>Overview</NavLink>
          </li>
          <li>
            <NavLink to="/sharetip" className={linkClass} onClick={() => setSidebarOpen(false)}>Share Tip</NavLink>
          </li>
          <li>
            <NavLink to="/mytip" className={linkClass} onClick={() => setSidebarOpen(false)}>My Tips</NavLink>
          </li>
        </ul>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Hamburger button only on mobile */}
        <div className="md:hidden flex items-center justify-between bg-green-100 px-4 py-3 shadow-md">
          <button onClick={toggleSidebar} className="text-2xl text-green-900 font-bold">
            ☰
          </button>
         
        </div>

        {/* Outlet jekhane Overview & other child routes render hobe */}
        <main className="flex-1 bg-white p-6 md:p-10 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
