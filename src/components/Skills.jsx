import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import java from '../assets/skills/java.png';
import python from '../assets/skills/python.png';
import django from '../assets/skills/django.png';
import expressjs from '../assets/skills/expressjs.png';
import github from '../assets/skills/github.png';
import dsa from '../assets/skills/dsa.png';
import git from '../assets/skills/git.png';
import cloud from '../assets/skills/cloud.png';
import machinelearning from '../assets/skills/machinelearning.png';
import javascript from '../assets/skills/javascript.png';
import mongodb from '../assets/skills/mongodb.png';
import react from '../assets/skills/react.png';
import nextjs from '../assets/skills/nextjs.png';
import nodejs from '../assets/skills/nodejs.png';
import postgres from '../assets/skills/postgres.png';
import redux from '../assets/skills/redux.png';
import sql from '../assets/skills/sql.png';
import html from '../assets/skills/html.png';
import api from '../assets/skills/api.png';
import wordpress from '../assets/skills/wordpress.png';
import tailwind from '../assets/skills/tailwind.png';
import typescript from '../assets/skills/typescript.png';
import vscode from '../assets/skills/vscode.png';
import Projects from './Projects';

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  return (
    <div>
    <div name="skills" className="w-full bg-gradient-to-b from-pink-200 to-pink-100 min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20">
        <div className="pb-8 py-48">
          <p className="text-4xl font-bold ml-0 md:ml-12 inline border-b-4 border-pink-800 text-pink-900">Skills</p>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 justify-items-center">
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src={java} alt="Java" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Java</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src={python} alt="Python" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Python</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src={javascript} alt="JavaScript" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">JavaScript</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="400">
            <img src={typescript} alt="TypeScript" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">TypeScript</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img src={mongodb} alt="MongoDB" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Mongo</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img src={expressjs} alt="Express.js" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Express.js</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img src={react} alt="React" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">React</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="800">
            <img src={nodejs} alt="Node.js" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Node.js</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
            <img src={nextjs} alt="Next.js" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Next.js</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
            <img src={github} alt="GitHub" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">GitHub</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
            <img src={api} alt="Git" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Rest API</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1200">
            <img src={react} alt="React" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">React Native</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1600">
            <img src={sql} alt="SQL" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">SQL</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1600">
            <img src={postgres} alt="Postgres" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Postgres</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1600">
            <img src={tailwind} alt="Tailwind CSS" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Tailwind</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="1600">
            <img src={redux} alt="Redux" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Redux</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2000">
            <img src={django} alt="Django" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Django</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2000">
            <img src={vscode} alt="VSCode" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">VSCode</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2000">
            <img src={dsa} alt="DSA" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">DSA</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2000">
            <img src={git} alt="Git" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Git</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2400">
            <img src={html} alt="Git" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">HTML</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2400">
            <img src={wordpress} alt="Cloud" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Wordpress</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2400">
            <img src={cloud} alt="Cloud" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">Cloud</p>
          </div>
          <div className="text-center" data-aos="fade-up" data-aos-delay="2400">
            <img src={machinelearning} alt="Machine Learning" className="h-8 w-8 sm:h-16 sm:w-16 hover:scale-125" />
            <p className="text-pink-900 font-semibold text-sm mt-2 mb-2">AI/ML</p>
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    </div>
  );
};

export default Skills;
