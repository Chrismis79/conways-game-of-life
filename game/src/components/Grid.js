import React, { Component } from 'react';
import Box from './Box'

class Grid extends Component {

    render() {
        let width = (this.props.cols * 16) + 1;
        let rowsArr = [];
        let boxClass = " ";
        for (let i = 0; i < this.props.rows; i++) {
            for (let j = 0; j < this.props.cols; j++) {
                let boxid = i + "_" + j;

                boxClass = this.props.gridFull[i][j] ? 'box on' : 'box off';
                rowsArr.push(
                    <Box
                        boxClass={boxClass}
                        key={boxid}
                        boxid={boxid}
                        row={i}
                        col={j}
                        selectBox={this.props.selectBox}
                    />
                )
            }
        }



        return (
            <div className="grid" style={{ width: width }}>
                {rowsArr}
            </div>
        );
    }
}

export default Grid;

