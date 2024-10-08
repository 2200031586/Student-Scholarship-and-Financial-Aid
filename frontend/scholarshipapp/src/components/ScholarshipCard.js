import React from 'react';

const ScholarshipCard = ({ scholarship }) => {
  return (
    <div className="scholarship-card">
      <h2>{scholarship.name}</h2>
      <p>Amount: {scholarship.amount}</p>
      <p>Deadline: {scholarship.deadline}</p>
      <p>Eligibility: {scholarship.eligibility}</p>
    </div>
  );
};

export default ScholarshipCard;
