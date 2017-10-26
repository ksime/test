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
      deleted: false,
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
          disabled={this.state.deleted}
          onChange={event => this.setState({ inputValue: event.target.value })}
        />
        {this.state.deleted ? null : (
          <Button
            bsStyle="danger"
            onClick={() => {
              this.setState({ deleted: !this.state.deleted });
            }}
          >
            Delete Note
          </Button>
        )}
        {!this.state.deleted ? null : (
          <Button
            bsStyle="success"
            onClick={() => {
              this.setState({ deleted: !this.state.deleted });
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
};

Note.defaultProps = {
  number: 0,
  text: '',
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(Note);
