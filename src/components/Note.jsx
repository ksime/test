import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, FormGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.text !== this.props.text) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <FormGroup style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ fontSize: '20px', marginRight: '5px' }}>{this.props.number} </span>
        <FormControl
          value={this.state.inputValue}
          disabled={this.props.deleted}
          type="text"
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        {this.props.deleted ? null : (
          <Button
            bsStyle="danger"
            onClick={() => {
              this.props.deleteNote(this.props.id);
            }}
          >
            Delete Note
          </Button>
        )}
        {!this.props.deleted ? null : (
          <Button
            bsStyle="success"
            onClick={() => {
              this.props.deleteNote(this.props.id);
            }}
          >
            Show Note
          </Button>
        )}
      </FormGroup>
    );
  }
}

Note.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  deleted: PropTypes.bool,
  id: PropTypes.number,
  deleteNote: PropTypes.func,
};

Note.defaultProps = {
  number: 0,
  text: '',
  deleted: false,
  id: -1,
  deleteNote: id => ({ type: 'DELETE_NOTE', id }),
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(Note);
