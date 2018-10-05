import React, { Component } from "react";
import './home.css';
import {Link } from 'react-router-dom';


class Home extends React.Component {
  render() {
    return (
    	<div class="container container1">
	    	<div id="compo1">
	    		<div className="home_h1">
		    		<h1>Trello lets you work more collaboratively and get more done.</h1>
		    		<p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible and rewarding way.</p>
						<Link to={`/register`} className="btn1">Sign Up</Link>
						<h2>Already use Trello? <Link to={`/login`}>Log In</Link></h2>
					</div>
				</div>
				<div id="compo2">
					<p>The Design Team shares updates on current projects so everyone in the company knows what is going on.</p>
					<img src={window.location.origin + '/images/board.jpg'} />
				</div>
				<div id="compo3">
					<h1>Work With Any Team</h1>
					<p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
					<img src={window.location.origin + '/images/team.jpg'} />
				</div>
			</div>
		);
  }
}
export default Home;