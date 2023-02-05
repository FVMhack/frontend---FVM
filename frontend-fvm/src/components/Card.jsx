import React from 'react';

const Card = ({ bountyDetails }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg my-10 mx-auto">
      <img class="w-full" src={bountyDetails.imgUrl} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{bountyDetails.projectDescription}</div>
        <p class="text-gray-700 text-base">
          Reward: {bountyDetails.rewardAmount} ETH <br />
          Deadline: {bountyDetails.deadline}
        </p>
      </div>
      <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #bounties
        </span>
      </div>
    </div>
  );
};

export default Card;
