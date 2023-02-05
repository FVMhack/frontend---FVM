import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";


const Dashboard = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [bountyDetails, setBountyDetails] = useState({
    projectDescription: "",
    rewardAmount: 0,
    deadline: ""
  });
  const [contractAddress, setContractAddress] = useState("");

  useEffect(() => {
  }, []);

  const handleInputChange = event => {
    setBountyDetails({
      ...bountyDetails,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

  };

  if (isConnected) {
    return <p>Please connect to a supported wallet to continue</p>;
  }

  if (contractAddress) {
    return (
      <Link
        to={{
          pathname: "/contract",
          state: { contractAddress }
        }}
      />
    );
  }

  return (
    <form class="bg-white p-6 rounded-lg shadow-md">
   <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="projectDescription">
      Project Title
    </label>
    <textarea
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="projectTitle"
      name="projectTitle"
      value={bountyDetails.projectTitle}
      onChange={handleInputChange}
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="projectDescription">
      Project Description:
    </label>
    <textarea
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="projectDescription"
      name="projectDescription"
      value={bountyDetails.projectDescription}
      onChange={handleInputChange}
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="rewardAmount">
      Reward Amount:
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="number"
      id="rewardAmount"
      placeholder="In ETH"
      name="rewardAmount"
      value={bountyDetails.rewardAmount}
      onChange={handleInputChange}
    />
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-medium mb-2" for="deadline">
      Deadline:
    </label>
    <input
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  >
    Deploy Bounty Contract
  </button>
</form>

  );
};

export default Dashboard;
