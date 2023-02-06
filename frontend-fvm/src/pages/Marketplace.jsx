import React, { useState, useEffect } from "react";
import Card from "../components/Card";

const Marketplace = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // dummy data for testing
    setProjects([
      {
        projectTitle: "Build a website",
        projectDescription: "Build a website using React",
        deadline: "2023-12-31",
        imgUrl: "https://images.unsplash.com/photo-1516245834210-c4c142787335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZpbnRlY2h8ZW58MHx8MHx8&w=1000&q=80",
        contractAddress: "0x123456789"
      },
      {
        projectTitle: "Develop a mobile app",
        projectDescription: "Develop a mobile app using React Native",
        deadline: "2023-12-31",
        imgUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&w=1000&q=80",
        contractAddress: "0x987654321"
      }
    ]);
  }, []);

  return (
    <div class="flex flex-wrap p-1">
    {projects.map((project, index) => (
      <div class="sm:w-1/2 md:w-1/3 lg:w-1/4 p-3" key={index}>
        <Card project={project} />
      </div>
    ))}
  </div>
  
  );
};

export default Marketplace;
