import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import home from '../assets/home.jpg';
import About from './About';
import Navbar from './Navbar';
import SocialLinks from './Sociallinks';

const Home = () => {
  return (
    <div>
    <Navbar/>
      <div name="home" className='flex min-h-screen w-full bg-gradient-to-b from-pink-200 to-pink-100 items-center justify-center'>
        <div className='max-w-screen-lg mx-auto px-4 py-8 flex flex-col-reverse md:flex-row'>
          <div className='mt-4 flex-shrink-0 w-full md:w-1/2'>
            <img
              src={home}
              alt='Home'
              className='rounded-full shadow-lg mx-auto h-auto w-full object-cover transition duration-500 transform hover:scale-115'
              style={{ height: "390px", width: "390px" }}
              data-aos="fade-left" data-aos-delay={1100}
            />
          </div>
          <div className='flex flex-col items-center justify-center text-top text-pink-700 w-full md:w-2/3'>
            <h2 className='md:text-4xl text-2xl p-2 rounded-md font-bold md:text-justify-start text-justify-center' data-aos="fade-right" data-aos-delay={1200}>I'm a full stack developer</h2>
            <p className='text-md lg:text-xl mt-4 text-pink-700 text-center md:text-left pl-4 font-semibold' data-aos="fade-left" data-aos-delay={1400}>
              With eight months of hands-on experience. I bring expertise in a diverse tech-stack, encompassing Java, Python, SQL, and JavaScript, along with proficiency in frameworks such as Django, MERN (MongoDB, Express.js, React.js, Node.js), PERN, Next.js, and Redux. My skill set allows me to develop robust and scalable web apps, leveraging a combination of backend and frontend technologies to deliver efficient solutions
            </p>
            <div className="mt-4">
              <button className="group bg-pink-400 text-white font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-full cursor-pointer transition duration-300 hover:bg-pink-600 transform hover:translate-x-2" data-aos="fade-up" data-aos-delay={1500}>
                Explore Projects
                <span className='ml-1 transition duration-300 transform group-hover:rotate-90'>
                  <MdOutlineKeyboardArrowRight size={25} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <SocialLinks/>
      <About/>
    </div>
  );
};

export default Home;
