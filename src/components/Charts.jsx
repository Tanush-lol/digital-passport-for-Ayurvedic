// components/Charts.js
import React, { useState } from 'react';

const Charts = () => {
  const [revenuePeriod, setRevenuePeriod] = useState('last7');
  const [distributionType, setDistributionType] = useState('region');

  return (
    <div className="charts">
      <div className="chart-container">
        <div className="chart-header">
          <h3>Revenue Overview</h3>
          <div className="chart-actions">
            <select value={revenuePeriod} onChange={(e) => setRevenuePeriod(e.target.value)}>
              <option value="last7">Last 7 days</option>
              <option value="last30">Last 30 days</option>
              <option value="last3m">Last 3 months</option>
            </select>
          </div>
        </div>
        <div className="chart-placeholder">
          Revenue Chart Visualization ({revenuePeriod})
        </div>
      </div>
      <div className="chart-container">
        <div className="chart-header">
          <h3>User Distribution</h3>
          <div className="chart-actions">
            <select value={distributionType} onChange={(e) => setDistributionType(e.target.value)}>
              <option value="region">By Region</option>
              <option value="age">By Age</option>
              <option value="device">By Device</option>
            </select>
          </div>
        </div>
        <div className="chart-placeholder">
          User Distribution Chart ({distributionType})
        </div>
      </div>
    </div>
  );
};

export default Charts;