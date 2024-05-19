import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function SuccessPopup({ visible, togglePopup }) {
  const [formData, setFormData] = useState({
    fullName: '',
    testnetId: '',
    tokenAmount: '',
    email: '',
  });

  const fullNameRef = useRef(null);
  const testnetIdRef = useRef(null);
  const tokenAmountRef = useRef(null);
  const emailRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the form data to the sendToken.cjs script
      const response = await axios.post('http://localhost:3000', formData);
      console.log('Form data sent successfully');
      console.log('Airdrop response:', response.data);
      togglePopup();
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <div>
      <div className="bg-black opacity-70 top-0 w-full h-full absolute"></div>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              ref={fullNameRef}
              value={formData.fullName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="testnetId" className="block text-gray-700 text-sm font-bold mb-2">
              Testnet ID:
            </label>
            <input
              type="text"
              id="testnetId"
              name="testnetId"
              ref={testnetIdRef}
              value={formData.testnetId}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tokenAmount" className="block text-gray-700 text-sm font-bold mb-2">
              Token Amount:
            </label>
            <input
              type="number"
              id="tokenAmount"
              name="tokenAmount"
              ref={tokenAmountRef}
              value={formData.tokenAmount}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className='w-full'>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}