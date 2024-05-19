import React, { useState } from 'react';
import BrainImage from '../../assets/img.png';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Google Generative AI with your API key
const genAI = new GoogleGenerativeAI('AIzaSyBelNC78JHbK2szV_V6ErVusxd0SbeSrE4');

// Global array to store the topics
let topicsArray = [];
window.topicsArray = []
localStorage.setItem('topicsArray', JSON.stringify(topicsArray));

const Personalize = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mindset, setMindset] = useState('');
  const [learningStyle, setLearningStyle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const generatedTopics = await generatePrompt('topics', { Name: name, Mindset: mindset, LearningStyle: learningStyle, Language: 'English', Conditions: 'none' });
    topicsArray = generatedTopics.split(',');
    setLoading(false);
    console.log(topicsArray)
    console.log('Created')
  };

  const handleLearningStyleChange = (e) => {
    setLearningStyle(e.target.value);
  };

  const generatePrompt = async (type, options) => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    let prompt;

    switch (type) {
      case 'topics':
        prompt = `I want you to generate a list of topics to study for a person named ${options.Name}, his self-described mindset is ${options.Mindset}, his learning style is ${options.LearningStyle}, his language is ${options.Language}, and as an additional note, the user said ${options.Conditions}. Return a list of 200 subjects he may be interested in, in a CSV format separated by commas remember only return the topics and not numbers.`;
        break;
      default:
        throw new Error('Invalid type');
    }

    const result = await model.generateContent(prompt);
    return result.response.text();
  };

  return (
      <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center text-white p-5">
        <div className="flex flex-col text-left w-full max-w-md p-5 specialdiv">
          <form onSubmit={handleSubmit} className="p-8 w-full rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center shining-text">Personalize Your Experience</h1>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="name">Name</label>
              <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="age">Age</label>
              <input
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your age"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="learningStyle">Learning Style</label>
              <select
                  id="learningStyle"
                  value={learningStyle}
                  onChange={handleLearningStyleChange}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your learning style</option>
                <option value="Visual">Visual</option>
                <option value="Auditory">Auditory</option>
                <option value="Kinesthetic">Kinesthetic</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="mindset">MindSet</label>
              <textarea
                  id="mindset"
                  value={mindset}
                  onChange={(e) => setMindset(e.target.value)}
                  className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter 1-2 sentences describing who you are and your interests"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full max-w-md p-5 mt-10 lg:mt-0 lg:ml-10">
          <img
              src={BrainImage}
              alt="Brain"
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
          <p className="text-lg font-semibold mt-4 text-center">"Use your brain, earn more gain!"</p>
        </div>
        {loading && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
              <div className="text-white text-xl">Loading...</div>
            </div>
        )}
      </div>
  );
};

export default Personalize;