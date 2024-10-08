// Students.js
import React from 'react';
import './Students.css'; 

const students = [
  {
    id: 1,
    name: 'Lokesh',
    testimonial: 'I loved the scholarship program! It helped me achieve my dreams.',
  },
  {
    id: 2,
    name: 'Vardan ',
    testimonial: 'The scholarship program was life-changing. I\'m forever grateful.',
  },
  {
    id: 3,
    name: 'Sai Srinivas',
    testimonial: 'I was able to pursue my passion thanks to the scholarship program.',
  },
  {
    id: 4,
    name: 'Ritika Sharma',
    testimonial: 'The scholarship opened doors to opportunities I never thought possible.'
},
{
    id: 5,
    name: 'Aarav Patel',
    testimonial: 'I wouldn’t be where I am today without the support of this scholarship.'
},
{
    id: 6,
    name: 'Ananya Desai',
    testimonial: 'This program gave me the financial stability I needed to focus on my studies.'
},
{
    id: 7,
    name: 'Kiran Reddy',
    testimonial: 'The scholarship provided me with the confidence to chase my goals.'
},
{
    id: 8,
    name: 'Neha Gupta',
    testimonial: 'It transformed my academic journey and made my dreams a reality.'
},

];

const Students = () => {
  return (
    <div className="students-container">
      <h1>What Our Students Say</h1>
      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            
            <h2>{student.name}</h2>
            <p>{student.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
