import React, { useState } from 'react';

const CreateBounty = (project) => {
  const [funding, setFunding] = useState('');
  const [auctionLength, setAuctionLength] = useState('');
  const [otherInformation, setOtherInformation] = useState('');
  const [projectId, setprojectId] = useState({
    projectId: project.id
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your submit logic here, e.g. sending the form data to your API
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg">
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="funding"
        >
          Project ID: {projectId.projectId}
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="projectId"
          type="number"
          value={projectId.projectId}
          onChange={(e) => setprojectId(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="funding"
        >
          Bidding Amount
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="funding"
          type="number"
          value={funding}
          onChange={(e) => setFunding(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="auctionLength"
        >
          Wallet Address 
        </label>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="auctionLength"
          type="text"
          value={auctionLength}
          onChange={(e) => setAuctionLength(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="otherInformation"
        >
          Other Information
        </label>
        <textarea
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          id="otherInformation"
          value={otherInformation}
          onChange={(e) => setOtherInformation(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end">
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateBounty;
