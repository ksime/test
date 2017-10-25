import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NotesMenu from './NotesMenu';

const App = props => (
  <div className="App" style={{ display: 'flex', justifyContent: 'center', margin: '5%' }}>
    {props.showPanel ? null : (
      <Button bsStyle="primary" bsSize="large" onClick={() => props.toggleMenu()}>
        Open menu
      </Button>
    )}
    <NotesMenu />
  </div>
);

App.propTypes = {
  showPanel: PropTypes.bool,
  toggleMenu: PropTypes.func,
};

App.defaultProps = {
  showPanel: false,
  toggleMenu: () => ({ type: 'TOGGLE_MENU' }),
};

const mapStateToProps = state => state;

export default connect(mapStateToProps, actions)(App);
