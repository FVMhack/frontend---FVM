import React from 'react';
import Card from '../components/Card';

const ViewCard = ({ project }) => {


  return (
    <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg">
      <img
        src={project.imgUrl}
        alt={project.projectTitle}
        className="w-full"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {project.projectTitle}
        </div>
        <p className="text-gray-700 text-base mt-2">
          Data Size: {project.dataSize} Bytes
        </p>
        <p className="text-gray-700 text-base">
          Storage Fees: {project.storageFees} ETH
        </p>
      </div>
      <div className="px-4 py-4 mb-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {project.deadline}
        </span>
      </div>
    </div>
  );
};

export default ViewCard;
