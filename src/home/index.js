import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home container">
      <div>
        <div className="home_h1">
          <h1>Trello lets you work more collaboratively and get more done.</h1>
          <p>
            Trello’s boards, lists, and cards enable you to organize and
            prioritize your projects in a fun, flexible and rewarding way.
          </p>
          <Link to={'/register'} className="btn1">
            Sign Up
          </Link>
          <h2>
            Already use Trello? <Link to={'/login'}>Log In</Link>
          </h2>
        </div>
      </div>
      <div>
        <p>
          The Design Team shares updates on current projects so everyone in the
          company knows what is going on.
        </p>
        <img src={window.location.origin + '/images/board.jpg'} alt="boards" />
      </div>
      <div>
        <h1>Work With Any Team</h1>
        <p>
          Whether it’s for work, a side project or even the next family
          vacation, Trello helps your team stay organized.
        </p>
        <img src={window.location.origin + '/images/team.jpg'} alt="teams" />
      </div>
    </div>
  );
};
export default Home;
