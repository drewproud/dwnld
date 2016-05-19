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

    const rows = grid.map(function(row, idx) {
      return (
        <GridRow
          row={ row }
          key={ idx }
          rowNum={ idx }
          gridSize={ GRID_SIZE_IN_PIXELS }
          requestMoveSquare={ requestMoveSquare }
        />
      );
    });

    return (
      <div style={ style }>
        { rows }
      </div>
    );
  },
});

export default GridContainer;
