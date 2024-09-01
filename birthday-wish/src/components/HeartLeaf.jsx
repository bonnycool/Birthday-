import React from 'react';

const HeartLeaf = ({ position }) => {
  return (
    <div className={`absolute ${position} text-red-500 text-4xl`}>
      ❤️
    </div>
  );
}

export default HeartLeaf;
