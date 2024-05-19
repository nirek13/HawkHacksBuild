import React, { useRef, useState } from 'react'

export default function Popup({visible, togglePopup}) {
    const [formData, setFormData] = useState({
      fullName: '',
      age: '',
      email: '',
      about: '',
      additional: ''
    });
  
    const fullNameRef = useRef(null);
    const ageRef = useRef(null);
    const emailRef = useRef(null);
    const aboutRef = useRef(null);
    const additionalRef = useRef(null);
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value)
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // // Here you can access the refs if needed
      // console.log('Full Name:', fullNameRef.current.value);
      // console.log('Age:', ageRef.current.value);
      // console.log('Email:', emailRef.current.value);
      // console.log('About:', aboutRef.current.value);
      // console.log('Additional Notes:', additionalRef.current.value);

      // console.log('Form Data:', formData);
      togglePopup();
    };
    
  return (
    <div>
        <div className="bg-black opacity-70 top-0 w-full h-full absolute"></div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
                <div>
                    <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
                    <input onChange={handleChange} ref={fullNameRef} name="fullName" type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required/>
                </div>
                <div>
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
                    <input onChange={handleChange} ref={ageRef} name="age" type="number" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="21" required/>
                </div>  
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                <input onChange={handleChange} ref={emailRef} name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
            </div> 
            <div className="mb-6">
                <label htmlFor="about_them" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">About You</label>
                <input onChange={handleChange} ref={aboutRef} name="about" type="text" id="about" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="In 1-2 sentences, tell us more about you!" required/>
            </div> 
            <div className="mb-6">
                <label htmlFor="additional_info" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Additional Notes</label>
                <input onChange={handleChange} ref={additionalRef} name="additional" type="text" id="additional" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Additional Notes"/>
            </div> 
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
        </div>
    </div>
  )
}
