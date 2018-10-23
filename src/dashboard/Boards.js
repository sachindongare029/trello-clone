import React from 'react';
import { boards } from './data';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import autoBind from 'auto-bind';
import ReactModal from 'react-modal';

class Boards extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.el = document.createElement('div');
    this.state = {
      showModal: false
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    let { match } = this.props;
    let { showModal } = this.state;
    return (
      <section className="page container">
        <h1>
          Boards{' '}
          <Button bsStyle="primary" onClick={this.handleOpenModal}>
            + New Board
          </Button>
        </h1>
        <div id="boards">
          {boards.map(b => (
            <div key={b._id} className="board">
              <Link
                to={`${match.url}/b/${b._id}/${b.slug}`}
                className="board-tile"
              >
                <div className="board-details">
                  <span className="board-title">{b.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <ReactModal
          isOpen={showModal}
          className="Modal"
          overlayClassName="Overlay"
          contentLabel="Inline Styles Modal Example"
        >
          <p>Modal text!</p>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </section>
    );
  }
}

export default Boards;
