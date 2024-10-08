import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Scholarship Hub</h1>
        <p>Empowering Education, Enhancing Futures</p>
        <a href='/scholarships'><button>Explore Scholarships</button></a>
      </header>
      <section className="intro-section">
        <h2>About Us</h2>
        <p>
          Scholarship Hub is a platform dedicated to connecting students with
          life-changing scholarship opportunities. Our mission is to make
          education accessible and affordable for all.
        </p>
      </section>
      <section className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>Search and apply for scholarships</li>
          <li>Personalized matching for optimal results</li> 
          <li>Comprehensive scholarship database</li>
          <li>User-friendly application process</li>
        </ul>
      </section>
      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        <a href='/register'><button>Register Now</button></a>
      </section>
    </div>
  );
};

export default Home;

