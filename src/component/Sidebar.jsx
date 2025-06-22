import React, { useState } from 'react';
import { FaBars, FaTimes, FaTachometerAlt, FaUserPlus, FaEye, FaEdit, FaTrashAlt, FaClipboardList, FaWhatsapp, FaSms } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { id: 'insert', label: 'Insert', icon: <FaUserPlus /> },
  { id: 'view', label: 'View', icon: <FaEye /> },
  { id: 'update', label: 'Update', icon: <FaEdit /> },
  { id: 'delete', label: 'Delete', icon: <FaTrashAlt /> },
  { id: 'attendance', label: 'Attendance', icon: <FaClipboardList /> },
  { id: 'whatsapp', label: 'WhatsApp Jugaad', icon: <FaWhatsapp /> },
  { id: 'sms', label: 'SMS Jugaad', icon: <FaSms /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate()
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md text-2xl "
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          `}
      >
        <h1 onClick={()=>{nav('/')}} className="text-2xl font-bold text-blue-600 mb-8 text-center">🏋️ Gym Docs</h1>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.id}`}
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 text-lg px-2 py-2 rounded-md hover:bg-blue-50 transition"
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
