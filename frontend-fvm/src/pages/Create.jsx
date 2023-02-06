import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Create = () => {
  const [bountyDetails, setBountyDetails] = useState({
    projectTitle: "",
    projectDescription: "",
    rewardAmount: 0,
    deadline: "",
    imgUrl: "",
    file: null
  });

  const handleInputChange = event => {
    setBountyDetails({
      ...bountyDetails,
      [event.target.name]: event.target.value
    });
  };

  const handleFileChange = event => {
    setBountyDetails({
      ...bountyDetails,
      file: event.target.files[0]
    });
  };


  const handleSubmit = async event => {
    event.preventDefault();

    // Code for deploying the bounty contract goes here
  };

  return (
    <>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="projectTitle">
            Project Title
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectTitle"
            name="projectTitle"
            value={bountyDetails.projectTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="projectDescription">
            Project Description:
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectDescription"
            name="projectDescription"
            value={bountyDetails.projectDescription}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="file">
            Upload File:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="deadline">
            Deadline:
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            id="deadline"
            name="deadline"
            value={bountyDetails.deadline}

      onChange={handleInputChange}
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="imgUrl">
      Image URL:
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      id="imgUrl"
      name="imgUrl"
      value={bountyDetails.imgUrl}
      onChange={handleInputChange}
    />
  </div>
  <button
    class="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
    type="submit"
    onClick={handleSubmit}
  >
    Deploy Bounty Contract
  </button>
</form>
</>
);
};

export default Create;




