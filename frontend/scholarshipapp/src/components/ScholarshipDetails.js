import React from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const ScholarshipDetails = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/scholarships/${id}`);
        setScholarship(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchScholarship();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
}

return (
  <div className="scholarship-details">
    <h1>{scholarship.name}</h1>
    <p>{scholarship.description}</p>
    <p>Award Amount: ${scholarship.amount}</p>
    <p>Deadline: {scholarship.deadline}</p>
    <Link to={`/scholarships`}>Back to Scholarship List</Link>
  </div>
);
};

export default ScholarshipDetails;

