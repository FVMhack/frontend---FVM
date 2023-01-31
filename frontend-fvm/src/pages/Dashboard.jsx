import React from 'react'

const Dashboard = () => {

  // Usage Tracking
const usageTrackingData = '123 GB';
// Storage Utilization
const storageUtilizationData = '67%';
// Cost Analysis
const costAnalysisData = '$12.34';
  return (   
    <div className="analytics-container p-4">
      <h2 className="text-2xl font-bold">Storage Usage Analytics</h2>
      <div className="analytics-data flex flex-row justify-between p-2">
        <div className="data-item flex flex-row justify-between p-2">
          <div className="data-name font-bold">Usage Tracking</div>
          <div className="data-value">{usageTrackingData}</div>
        </div>
        <div className="data-item flex flex-row justify-between p-2">
          <div className="data-name font-bold">Storage Utilization</div>
          <div className="data-value">{storageUtilizationData}</div>
        </div>
        <div className="data-item flex flex-row justify-between p-2">
          <div className="data-name font-bold">Cost Analysis</div>
          <div className="data-value">{costAnalysisData}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;