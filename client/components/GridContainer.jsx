import React from 'react';
import GridRow from './GridRow';

const GRID_SIZE_IN_PIXELS = 400;

const GridContainer = React.createClass({
  propTypes: {
    requestMoveSquare: React.PropTypes.func.isRequired,
    grid: React.PropTypes.array.isRequired,
  },

  render() {
    const { grid, requestMoveSquare } = this.props;

    const style = {
      width: GRID_SIZE_IN_PIXELS,
      height: GRID_SIZE_IN_PIXELS,
    };

    return (
      <div style={ style }>
        { grid.map((row) => <GridRow row={ row } gridSize={ GRID_SIZE_IN_PIXELS } requestMoveSquare={ requestMoveSquare }/>) }
      </div>
    );
  },
});

export default GridContainer;
