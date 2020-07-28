import React from 'react';
import Box from './Box'

const Grid = (props) => {

    let width = (props.cols * 14) + 1;
    let rowsArr = [];
    let boxClass = " ";
    for (let i = 0; i < props.rows; i++) {
        for (let j = 0; j < props.cols; j++) {
            let boxid = i + "_" + j;

            boxClass = props.gridFull[i][j] ? 'box on' : 'box off';
            rowsArr.push(
                <Box
                    boxClass={boxClass}
                    key={boxid}
                    boxid={boxid}
                    row={i}
                    col={j}
                    selectBox={props.selectBox}
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


export default Grid;

