import React from "react";
import { Link } from "react-router-dom";

const Card = ({ project, onClick }) => {
  return (
    <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg">
      <img src={project.imgUrl} alt={project.projectTitle} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{project.projectTitle}</div>
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
      <Link
        to={{
          pathname: `/marketplace/${project.id}`,
          state: { project }
        }}
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
        onClick={onClick}
      >
        View Contract
      </Link>
      <Link
        to={{
          pathname: '/createBounty',
          state: { projectId: project.id }
        }}
        className="bg-indigo-500 mx-3 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      >
        Bid 
      </Link>
    </div>
  );
};

export default Card;
