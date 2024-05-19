import React from 'react';
import BrainImage from '../../assets/img.png';

const posts = [
  {
    description: 'The human brain is an extraordinary organ. It is the center of our nervous system, allowing us to think, feel, and interact with the world. In this post, we discuss its capabilities and how much crypto can be earned by leveraging its potential.',
    cryptoEarned: '0.5 BTC'
  },
  {
    description: 'Did you know that the brain is composed of approximately 86 billion neurons? This intricate network allows for complex thought processes. Discover how understanding the brain can lead to significant crypto earnings.',
    cryptoEarned: '1.2 ETH'
  },
  {
    description: 'The brain’s plasticity is its ability to adapt and change as a result of experience. This post explores the implications of brain plasticity in the crypto world and the potential earnings.',
    cryptoEarned: '3.4 LTC'
  },
];

const Forum = () => {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <div className="py-0">
        <h1 className="text-4xl font-bold text-center mb-10">Crypto Forum</h1>
      </div>
      <div className="flex-grow overflow-y-scroll p-4 bg-white rounded-t-lg shadow-lg">
        <div className="container mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 mb-6 flex items-center">
              <div className="w-1/2 flex justify-center items-center">
                <a href="#" className="focus:outline-none">
                  <img
                    src={BrainImage}
                    alt="Brain"
                    className="w-48 h-48 md:w-64 md:h-64"
                  />
                </a>
              </div>
              <div className="w-1/2 flex flex-col justify-center p-4">
                <p className="text-gray-300 mb-4">{post.description}</p>
                <div className="text-right">
                  <span className="text-sm text-gray-400">Crypto Earned:</span>
                  <span className="text-lg font-semibold text-white ml-2">{post.cryptoEarned}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
