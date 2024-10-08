import React from 'react';
import ScholarshipCard from './ScholarshipCard';
import './ScholarshipList.css';

const scholarships = [
  {
    id: 1,
    name: 'Coca-Cola Scholars Program',
    amount: '$20,000',
    deadline: 'October 31',
    eligibility: 'High school seniors',
  },
  {
    id: 2,
    name: 'National Merit Scholarship',
    amount: '$2,500',
    deadline: 'October 31',
    eligibility: 'High school juniors',
  },
  {
    id: 3,
    name: 'Gates Millennium Scholars Program',
    amount: 'Full Tuition',
    deadline: 'September 15',
    eligibility: 'Minority students',
  },
  {
    id: 4,
    name: 'Jack Kent Cooke Foundation Scholarship',
    amount: '$40,000',
    deadline: 'November 1',
    eligibility: 'High-achieving students with financial need',
  },
  {
    id: 5,
    name: 'Dell Scholars Program',
    amount: '$20,000',
    deadline: 'December 1',
    eligibility: 'Students with GPA above 2.4',
  },
  {
    id: 6,
    name: 'AXA Achievement Scholarship',
    amount: '$25,000',
    deadline: 'December 15',
    eligibility: 'Students with community involvement',
  },
  {
    id: 7,
    name: 'Elks National Foundation Scholarship',
    amount: '$50,000',
    deadline: 'November 5',
    eligibility: 'U.S. citizens',
  },
  {
    id: 8,
    name: 'Hispanic Scholarship Fund',
    amount: '$5,000',
    deadline: 'February 1',
    eligibility: 'Hispanic students',
  },
  // Add more scholarships here...
];

const ScholarshipList = () => {
  return (
    <div className="scholarship-list">
      {scholarships.map((scholarship) => (
        <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
      ))}
    </div>
  );
};

export default ScholarshipList;
