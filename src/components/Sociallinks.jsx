import React from 'react';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const Links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://www.linkedin.com/in/omjasharma/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com/sharmaomja',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: 'mailto:omjasharma287@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: './assets/Omja_Resume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-10 mt-16' data-aos="fade-right" data-aos-delay={2300}>
      <ul>
        {Links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center h-16 w-40 px-4 ml-[-100px] hover:ml-[2px] bg-pink-400 hover:rounded-md duration-300 ${style}`}>
            <a
              href={href}
              className='flex justify-between items-center w-full text-white'
              download={download}
              target="_blank"
              rel="noreferrer"
              >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
