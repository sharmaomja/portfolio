import React from 'react';
import 'aos/dist/aos.css';
import Skills from './Skills';

const About = () => {
  return (
    <div name="about" className='w-full bg-gradient-to-b from-pink-200 to-pink-100 md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20'>
        <p className='text-3xl lg:text-4xl font-bold inline text-pink-900 underline text-center md:text-left pl-4 mt-8 md:mt-0' data-aos="fade-down" data-aos-delay={600}>About</p>
        <p className='text-sm lg:text-xl mt-10 text-pink-700 text-center md:text-left pl-4 font-semibold' data-aos="fade-left" data-aos-delay={900}>
          Hey there! I'm Omja Sharma, a passionate Full-Stack Developer with a knack for crafting seamless digital experiences. Armed with a Bachelor's degree in Computer Science Engineering from Graphic Era University, I've delved deep into the world of technology, constantly honing my skills and expanding my knowledge base. Whether it's coding in Java, Python, or diving into the realms of web development with React.js and Next.js, I thrive on the challenges that come with creating innovative solutions.
        </p>
        <br />
        <p className='text-sm lg:text-xl text-pink-700 text-center md:text-left pl-4 font-semibold mb-10' data-aos="fade-right" data-aos-delay={1200}>
          Currently, I'm immersed in the dynamic environment of BidsB2B as a Software Development Engineer, where I've been spearheading end-to-end product lifecycle management. From ideation to implementation, I've been instrumental in driving projects forward, leveraging my expertise in MERN, PERN, and Next.js stacks to deliver robust solutions. My journey in the tech world has also taken me to the Indian Space Research Organisation, where I interned and contributed to the development of a Text Prediction system, enhancing communication speed and efficiency. With a portfolio boasting projects like ecommerce platforms, Instagram clones, and NLP-based systems, I'm constantly pushing boundaries and exploring new horizons in the ever-evolving landscape of technology. Join me on this exciting journey as we turn ideas into reality and make an impact in the digital realm!
        </p>
      </div>
      <Skills/>
    </div>
  );
};

export default About;
