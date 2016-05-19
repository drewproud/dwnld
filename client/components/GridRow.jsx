import React from 'react';
import Square from './Square';

const GridRow = React.createClass({
  propTypes: {
    row: React.PropTypes.array.isRequired,
    rowNum: React.PropTypes.number.isRequired,
    requestMoveSquare: React.PropTypes.func.isRequired,
    gridSize: React.PropTypes.number.isRequired,
  },

  render() {
    const { row, gridSize, requestMoveSquare, rowNum } = this.props;
    const columns = row.map(function(value, idx) {
      return (
        <Square
          rowNum={ rowNum }
          colNum={ idx }
          key={ idx }
          value={ value }
          gridSize={ gridSize }
          requestMoveSquare={ requestMoveSquare }
        />
      );
    });

    return (
      <div>
        { columns }
      </div>
    );
  },
});

export default GridRow;
