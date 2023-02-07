import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import ViewCard from './ViewCard';

const Marketplace = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);

  const actualInputArray = [    {      id: 1,      projectTitle: "Project 1",      dataSize: 100,      storageFees: 0.1,      deadline: "2020-12-31",      imgUrl: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"    },    {      id: 2,      projectTitle: "Project 2",      dataSize: 200,      storageFees: 0.2,      deadline: "2020-12-31",      imgUrl: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"    },    {      id: 3,      projectTitle: "Project 3",      dataSize: 300,      storageFees: 0.3,      deadline: "2020-12-31",      imgUrl: "https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_960_720.jpg"    }  ];

  const handleClick = project => {
    setSelectedProject(project);
  };

  useEffect(() => {
    setProjects(actualInputArray);
    if (id) {
      const project = actualInputArray.find(p => p.id === parseInt(id));
      setSelectedProject(project);

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
    }
  }, [id]);

  return (
    <>
      {selectedProject ? (
        <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg">
          <img
            src={selectedProject.imgUrl}
            alt={selectedProject.projectTitle}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {selectedProject.projectTitle}
            </div>
            <p className="text-gray-700 text-base mt-2">
              Data Size: {selectedProject.dataSize} Bytes
            </p>
            <p className="text-gray-700 text-base">
              Storage Fees: {selectedProject.storageFees} ETH
            </p>
          </div>
          <div className="px-4 py-4 mb-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {selectedProject.deadline}
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap p-1">
          {projects.map((project, index) => (
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" key={index}>
              
              <Card project={project} onClick={() => handleClick(project)} />
            </div>
          ))}
        </div>
      )}
      </>
  );
};

export default Marketplace;
