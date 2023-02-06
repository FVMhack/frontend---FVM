import React from "react";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  return (
    <div class="max-w-sm py-4   rounded overflow-hidden shadow-lg">
      <img src={project.imgUrl} alt={project.projectTitle} class="w-full" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{project.projectTitle}</div>
        <p class="text-gray-700 text-base">{project.projectDescription}</p>
      </div>
      <div class="px-4 py-4 mb-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {project.deadline}
        </span>
      </div>
      <Link
        to={{
          pathname: `/contract/${project.contractAddress}`,
          state: { project }
        }}
        class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4  rounded-full focus:outline-none focus:shadow-outline"
      >
        View Contract
      </Link>
    </div>
  );
};

export default Card;
