import React, { useEffect } from 'react';
import netflix from '../assets/netflix.jpg';
import food from '../assets/food.jpg';
import nlp from '../assets/nlp.jpg';
import instagram from '../assets/instagram.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import ecommerce2 from '../assets/ecommerce2.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experience from './Experience';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: true // Only once animation
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Ecommerce-App (MERN)',
      image: ecommerce,
      demoLink: 'https://sharmaomja.github.io/ecommerce-react/',
      codeLink: 'https://github.com/sharmaomja/ecommerce-react',
      description: 'MERN stack ecommerce platform for sellers and customers.',
    },
    {
      id: 2,
      title: 'Ecommerce-App (NextJS)',
      image: ecommerce2,
      demoLink: 'https://sharmaomja.github.io/ecommerce-nextjs/',
      codeLink: 'https://github.com/sharmaomja/ecommerce-nextjs',
      description: 'Modern e-commerce solution using Next.js and TypeScript.',
    },
    {
      id: 3,
      title: 'Food Delivery App (MERN)',
      image: food,
      demoLink: 'https://sharmaomja.github.io/food-app/',
      codeLink: 'https://github.com/sharmaomja/food-app',
      description: 'Food ordering website for seamless ordering experience.',
    },
    {
      id: 4,
      title: 'Instagram Clone (MERN)',
      image: instagram,
      demoLink: 'https://sharmaomja.github.io/instagram-clone/',
      codeLink: 'https://github.com/sharmaomja/instagram-clone',
      description: 'Instagram Clone with core features replication using MERN stack.',
    },
    {
      id: 5,
      title: 'Netflix Clone (MERN)',
      image: netflix,
      demoLink: 'https://sharmaomja.github.io/netflix-clone/',
      codeLink: 'https://github.com/sharmaomja/netflix-clone',
      description: 'Netflix clone: React, Firebase, TMDB API; dynamic, engaging content',
    },
    {
      id: 6,
      title: 'Text Prediction System',
      image: nlp,
      demoLink: 'https://colab.research.google.com/drive/10y3ZQPmubpqUXrkDOg1ksKst1p5kFRNh',
      codeLink: 'https://colab.research.google.com/drive/1EMPSRAx09oRKrxIKokt3AO57AFJj2243',
      description: 'Text Prediction system with innovative regex rules achieving 95% accuracy rate.',
    },
  ];
  

  return (
    <div name="projects" className="w-full bg-gradient-to-b from-pink-200 to-pink-100 min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20">
        <div className="pb-4 py-24">
          <p className="text-4xl font-bold inline border-b-4 border-pink-800 text-pink-">Projects</p>
          <p className="py-3 font-semibold text-pink-600">Check out some of my work right here.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="shadow-md shadow-pink-500 rounded-lg" data-aos="fade-up">
              <img src={project.image} alt={project.title} className="rounded-t-md h-36 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className='text-sm mb-4'>{project.description}</p>
                <div className="mt-4 flex justify-between">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-600 text-white py-2 px-4 rounded-md">Demo</a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="bg-pink-400 hover:bg-pink-600 text-white py-2 px-4 rounded-md">Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Experience/>
    </div>
  );
}

export default Projects;