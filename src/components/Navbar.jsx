import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaBars, FaTimes, FaHome, FaUser, FaFolder, FaBriefcase, FaEnvelope, FaCode } from 'react-icons/fa';
import { Link  } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
      icon: <FaHome />,
    },
    {
      id: 2,
      link: 'about',
      icon: <FaUser />,
    },
    {
      id: 3,
      link: 'skills',
      icon: <FaCode />,
    },
    {
      id: 4,
      link: 'projects',
      icon: <FaFolder />,
    },
    {
      id: 5,
      link: 'experience',
      icon: <FaBriefcase />,
    },
    {
      id: 6,
      link: 'contact',
      icon: <FaEnvelope />,
    },
  ];

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className='md:min-w-full bg-pink-200 w-screen bg-gradient-to-b pink-200 px-4 fixed z-50'>
      <div className='flex justify-between items-center h-20'>
        <div>
          <h1 className='text-md md:text-xl font-bold font-serif text-center text-pink-900 py-4 hover:text-pink-700 transition duration-300 bg-pink-200 p-4 rounded-full' data-aos="fade-out" data-aos-delay={900}>
            OMJA UJESHA JETSHREE
          </h1>
        </div>
        <div className='md:hidden ml-16 mb-2'>
          {nav ? (
            <FaTimes onClick={() => setNav(!nav)} className='cursor-pointer text-gray-900' />
          ) : (
            <FaBars onClick={() => setNav(!nav)} className='cursor-pointer text-gray-900' />
          )}
        </div>

        <ul className='hidden md:flex'>
          {links.map((link) => (
            <li
              key={link.id}
              className='ml-2 cursor-pointer capitalize font-medium text-pink-900 hover:scale-110 duration-200 flex items-center bg-gradient-to-t from-pink-200 to-pink-300 shadow-md p-2 rounded-md my-2 md:my-0'
              data-aos="fade-in" data-aos-delay={600}
            >
              <Link to={link.link} smooth duration={500}>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>
      {nav && (
        <div className='justify-top mt-10 items-center bg-gradient-to-b from-pink-200 fixed top-20 left-0 w-screen h-screen'>
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.link}
              smooth
              duration={500}
              className='text-white text-2xl w-full p-2 text-center my-2 rounded-md cursor-pointer bg-pink-400 hover:bg-pink-600 transition duration-300 ease-in-out flex items-center justify-center'
            >
              {link.icon}
              <span className='ml-2'>{link.link.toUpperCase()}</span>
            </Link>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Navbar;
