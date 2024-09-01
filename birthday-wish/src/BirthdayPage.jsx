import React from 'react';
import Tree from './components/Tree';

const BirthdayPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-pink-500 to-yellow-300">
      <div className="relative w-full h-full max-w-lg">
        <Tree />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-4xl font-bold mb-4 text-white">Happy Birthday!</h1>
          <p className="text-lg mb-4 text-white">
            Dear [Crush's Name],<br />
            Wishing you a day filled with love, joy, and all the happiness in the world. You deserve the best on your special day!
          </p>
          <img
            src="https://via.placeholder.com/200"
            alt="Birthday Cake"
            className="mx-auto mb-4 rounded-full shadow-md"
          />
          <button
            className="mt-4 px-6 py-2 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
            onClick={() => alert('You are amazing!')}
          >
            Send Wishes
          </button>
        </div>
      </div>
    </div>
  );
}

export default BirthdayPage;
