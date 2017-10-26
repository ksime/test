import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, ListGroup, ButtonGroup } from 'react-bootstrap';
import * as actions from '../actions';
import Note from './Note';

class NotesMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      number: 1,
    };
  }

  render() {
    const { notes } = this.state;
    if (this.props.showPanel) {
      return (
        <div>
          <ButtonGroup style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Button
              bsStyle="success"
              onClick={() =>
                this.setState({
                  notes: [
                    ...this.state.notes,
                    {
                      deleted: false,
                      number: this.state.number,
                      id: Math.random(),
                      text: '',
                    },
                  ],
                  number: this.state.number + 1,
                })}
            >
              Add Note
            </Button>
            <Button bsStyle="warning" onClick={() => this.props.toggleMenu()}>
              Hide menu
            </Button>
          </ButtonGroup>

          <ListGroup>
            {notes.map(note => (
              <Note deleted={note.deleted} number={note.number} key={Math.random()} id={note.id} />
            ))}
          </ListGroup>
        </div>
      );
    }
    return null;
  }
}

NotesMenu.propTypes = {
  toggleMenu: PropTypes.func,
  showPanel: PropTypes.bool,
};

NotesMenu.defaultProps = {
  toggleMenu: () => ({ type: 'TOGGLE_MENU' }),
  showPanel: false,
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(NotesMenu);
