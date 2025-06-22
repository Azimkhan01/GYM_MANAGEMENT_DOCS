import React, { useEffect } from 'react';
import { FaTachometerAlt, FaUserPlus, FaEye, FaEdit, FaTrashAlt, FaClipboardList, FaWhatsapp, FaSms } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Home() {
  

  const features = [
    { icon: <FaTachometerAlt />, title: 'Dashboard', desc: 'Quick summary of all gym activities', link: 'dashboard' },
    { icon: <FaUserPlus />, title: 'Insert Member', desc: 'Add new members to the gym', link: 'insert' },
    { icon: <FaEye />, title: 'View Members', desc: 'See all/pending/expired/cleared members', link: 'view' },
    { icon: <FaEdit />, title: 'Update Member', desc: 'Edit member details', link: 'update' },
    { icon: <FaTrashAlt />, title: 'Delete Member', desc: 'Remove a member from the database', link: 'delete' },
    { icon: <FaClipboardList />, title: 'Attendance', desc: 'Track check-ins and history', link: 'attendance' },
    { icon: <FaWhatsapp />, title: 'WhatsApp Jugaad', desc: 'Send messages via WhatsApp', link: 'whatsapp' },
    { icon: <FaSms />, title: 'SMS Jugaad', desc: 'Send SMS notifications', link: 'sms' },
  ];

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Gym Management System</h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Manage your gym efficiently with all essential features.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-white shadow hover:shadow-md transition rounded-xl p-6 flex flex-col items-center text-center group"
            >
              <div className="text-4xl text-blue-600 group-hover:scale-110 transition mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
