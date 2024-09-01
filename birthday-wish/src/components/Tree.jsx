import React from 'react';
import HeartLeaf from './HeartLeaf';

const Tree = () => {
  const leaves = [
    'top-10 left-1/2 transform -translate-x-1/2', // top leaves
    'top-24 left-1/4',
    'top-24 right-1/4',
    'top-40 left-1/3',
    'top-40 right-1/3',
    'top-56 left-1/2 transform -translate-x-1/2', // bottom leaves
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative text-green-700 text-6xl">
        {/* Tree trunk */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-brown-800 w-4 h-24 rounded-md" />

        {/* Leaves */}
        {leaves.map((position, index) => (
          <HeartLeaf key={index} position={position} />
        ))}
      </div>
    </div>
  );
}

export default Tree;
