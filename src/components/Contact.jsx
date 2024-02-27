import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // You can send the form data to your backend or handle it in any other way
  };

  return (
    <div name="contact" className="w-full bg-gradient-to-b from-pink-200 to-pink-100 min-h-screen">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full lg:px-20">
      <div className="pb-4 py-40">
          <p className="text-4xl font-bold inline border-b-4 border-pink-800 text-pink-">Contact me</p>
          <p className="py-3 font-semibold text-pink-600">Submit the form to get in touch with me.</p>
        </div>
        <form onSubmit={handleSubmit} className='bg-pink-100 p-8 shadow-md shadow-pink-500' data-aos="fade-up">
          <div className="mb-4">
            <label htmlFor="name" className="block text-pink-900 font-semibold">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border-b-2 border-pink-900 focus:outline-none focus:border-pink-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-pink-900 font-semibold">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b-2 border-pink-900 focus:outline-none focus:border-pink-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-pink-900 font-semibold">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border-2 border-pink-900 focus:outline-none focus:border-pink-600" required></textarea>
          </div>
          <button type="submit" className="bg-pink-900 text-white font-semibold w-full rounded hover:bg-pink-700">Submit</button>
          <div className="mt-4 flex justify-center items-center">
            <div className="bg-pink-600 h-px w-1/3"></div>
            <div className="mx-2 text-pink-600 font-semibold">OR</div>
            <div className="bg-pink-600 h-px w-1/3"></div>
          </div>
          <a href="mailto:omjasharma287@gmail.com" className="mt-4 text-center block bg-pink-700 text-gray-100 rounded-md shadow-lg shadow-pink-300 font-semibold" data-aos="fade-up">Email me</a>
        </form>
      </div>
    </div>
  );
};

export default Contact;
