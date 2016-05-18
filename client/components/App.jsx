import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadData, requestMoveSquare } from '../actionCreators';
import { selectGrid } from '../reducers';
import GridContainer from './GridContainer';

const App = React.createClass({
  propTypes: {
    loadData: React.PropTypes.func.isRequired,
    requestMoveSquare: React.PropTypes.func.isRequired,
    grid: React.PropTypes.array.isRequired
  },

  componentDidMount: function() {
    this.props.loadData();
  },

  render() {
    const { grid } = this.props;
    return (
      <div>
        <GridContainer
          grid={ grid } 
          requestMoveSquare={ this.props.requestMoveSquare }
        />
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    grid: selectGrid(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadData,
    requestMoveSquare,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
