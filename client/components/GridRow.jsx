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
    return (
      <div>
        { row.map((value) => <Square rowNum={ rowNum } value={ value } gridSize={ gridSize } requestMoveSquare={ requestMoveSquare } />) }
      </div>
    );
  },
});

export default GridRow;
