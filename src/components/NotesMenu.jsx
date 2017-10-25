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
    };
  }

  render() {
    if (this.props.showPanel) {
      return (
        <div>
          <ButtonGroup style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Button bsStyle="success" onClick={() => this.props.addNote()}>
              Add Note
            </Button>
            <Button bsStyle="warning" onClick={() => this.props.toggleMenu()}>
              Hide menu
            </Button>
          </ButtonGroup>

          <ListGroup>
            {this.props.notes.map(note => (
              <Note
                deleted={note.deleted}
                number={this.props.notes.indexOf(note) + 1}
                key={Math.random()}
                id={note.id}
              />
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
  addNote: PropTypes.func,
  notes: PropTypes.arrayOf(PropTypes.object),
};

NotesMenu.defaultProps = {
  toggleMenu: () => ({ type: 'TOGGLE_MENU' }),
  addNote: note => ({ type: 'ADD_NOTE', note }),
  showPanel: false,
  notes: [],
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(NotesMenu);
