import React from 'react';
import { boards } from './data';
import { Link } from 'react-router-dom';

const Boards = props => {
  return (
    <section className="page container">
      <h1>Boards</h1>
      <div id="boards">
        {boards.map(b => (
          <div key={b._id} className="board">
            <Link
              to={`${props.match.url}/b/${b._id}/${b.slug}`}
              className="board-tile"
            >
              <div className="board-details">
                <span className="board-title">{b.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Boards;
