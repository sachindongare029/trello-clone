import React from 'react';
import { lists } from '../data.js';
import { Link } from 'react-router-dom';
import List from '../list';
import './board.scss';

const Board = () => (
  <section className="page container">
    <h1>OPT</h1>
    <div id="lists">
      {lists.map(list => (
        <List key={list._id} />
      ))}
    </div>
  </section>
);

export default Board;
