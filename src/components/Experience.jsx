import React, { useEffect } from 'react';
import { MdWork } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact';

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
 <div>
 <div id="experience" className="w-full bg-gradient-to-b from-pink-200 to-pink-100 min-h-screen">
 <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20">
   <div className="pb-8 py-40" data-aos="fade-up">
     <p className="text-4xl font-bold inline border-b-4 border-pink-800 text-pink-">Experience</p>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     {/* BidsB2B */}
     <div className="bg-pink-100 shadow-md shadow-pink-400 rounded-lg p-6" data-aos="fade-up" data-aos-delay="400"> 
       <h3 className="text-2xl font-bold text-pink-900 flex items-center mb-2"><MdWork className="mr-2" /> SDE (Full-time) — BidsB2B</h3>
       <p className="text-lg font-semibold text-pink-700">July 2023 – Present</p>
       <p className="text-lg font-semibold text-pink-700">Full-Stack development</p>
       <p className="text-lg font-semibold text-pink-700">Pune, Maharashtra (Remote)</p>
       <ul className="list-disc pl-6">
         <li>Proficient in MERN, PERN, and Next.js stacks, adding versatility to full-stack development.</li>
         <li>Achieved 95% completion rate on time-sensitive milestones through effective collaboration with cross-functional teams.</li>
       </ul>
     </div>
     {/* ISRO Internship */}
     <div className="bg-pink-100 shadow-md shadow-pink-400 rounded-lg p-6" data-aos="fade-up" data-aos-delay="600">
       <h3 className="text-2xl font-bold text-pink-900 flex items-center mb-2"><MdWork className="mr-2" /> Research Trainee — ISRO</h3>
       <p className="text-lg font-semibold text-pink-700">June 2022 – August 2022</p>
       <p className="text-lg font-semibold text-pink-700">Guide- Ms. Divya Jain, Mr. Akhilesh Sharma</p>
       <p className="text-lg font-semibold text-pink-700">Ahmadabad, Gujarat</p>
       <ul className="list-disc pl-6">
         <li>Text Prediction system was worked on, leading to a 30% reduction in text composition time.</li>
         <li>Applied innovative regex rules, achieving a 95% accuracy rate for sentence formatting and correction.</li>
       </ul>
     </div>
     {/* Education Section */}
     <div className="bg-pink-100 shadow-md shadow-pink-400 rounded-lg p-6" data-aos="fade-up" data-aos-delay="800">
       <div className="mb-4">
         <div>
           <h3 className="text-2xl font-bold text-pink-900 flex items-center mb-2"> BTech — Graphic Era University</h3>  
           <p className="text-lg font-semibold text-pink-700">Dehradun, Uttarakhand</p>
         </div>
         <div className='flex flex-row'>
           <p className="text-md font-semibold text-pink-700">July 2019 – May 2023, &nbsp;</p>
           <p className="text-md font-semibold text-pink-700"> B.Tech CSE, &nbsp;</p>
           <p className="text-md font-semibold text-pink-700">CGPA - 8.4/10</p>
         </div>
         <div>
           <h4 className="text-lg font-semibold text-pink-900">Coursework:</h4>
           <ul className="list-disc pl-6">
             <li>Data Structures</li>
             <li>Software Engineering</li>
             <li>Computer Networks</li>
             <li>Object-oriented Programming(OOPs)</li>
             <li>Cloud Computing</li>
             <li>Machine Learning</li>
             <li>Database Management System</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
<Contact/>
 </div> 
  );
};

export default Experience;
