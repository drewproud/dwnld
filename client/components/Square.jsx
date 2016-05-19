import React from 'react';

function getSquareSize(gridSize) {
  return gridSize / 4; 
}

const Square = React.createClass({
  propTypes: {
    value: React.PropTypes.number.isRequired,
    rowNum: React.PropTypes.number.isRequired,
    colNum: React.PropTypes.number.isRequired,
    gridSize: React.PropTypes.number.isRequired,
    requestMoveSquare: React.PropTypes.func.isRequired,
  },

  handleClick: function(event) {
    event.preventDefault();
    const { requestMoveSquare, rowNum, colNum } = this.props;
    requestMoveSquare(rowNum, colNum);
  },

  render() {
    const { value, gridSize, requestMoveSquare } = this.props;

    const size = getSquareSize(gridSize);
    const style = {
      float: 'left',
      backgroundColor: 'aliceblue',
      width: size,
      height: size,
      textAlign: 'center',
    };

    if (value) {
      return (
        <div style={ style }>
          <a
            href="#!"
            onClick={ this.handleClick }
            style={{ display: 'block', width: '100%', height: '100%' }}
          >
            { value }
          </a>
        </div>
      );
    }

    return (
      <div style={{ ...style, backgroundColor: 'transparent' }}>
      </div>
    );
  },
});

export default Square;
