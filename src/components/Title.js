import React from 'react';

const Title = ({ texto }) => {
  return (
    <h2 className=" text-3xl font-montserrat font-bold text-gray-700">
      {texto}
    </h2>
  );
};

export default Title;
