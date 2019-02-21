import React from 'react';
import PollList from './PollList';
import PollListFilters from './PollListFilters';
import PollsSummary from './PollsSummary';

const DashboardPage = () => (
  <div>
    <PollsSummary />
    <PollListFilters />
    <PollList />
  </div>
);

export default DashboardPage;
