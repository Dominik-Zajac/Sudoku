import React from 'react';
import Tile from './Tile';

import style from './Board.scss';

const Board = props => {
	const splitBoard = props.board.split('');
	const splitInitialBoard = props.initialBoard.split('');

	const renderBoard = splitBoard.map((value, index) => {
		if(splitInitialBoard[index] == '.') {
			return <Tile playerOnChange={(e)=>props.onChange(e, index)} key={ index } value={ value } />
		} else {
			return <Tile key={ index } value={ value } readonly/>
		}
	})

	return(
		<div className={ style.board }>
			{ renderBoard }
		</div>
	)
}

export default Board;