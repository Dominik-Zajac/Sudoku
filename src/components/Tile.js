import React from 'react';

import style from './Tile.scss';

const Tile = props => 
	<input
		type='number'
		min='1'
		max='9'
		value={ props.value }
		onChange={ props.playerOnChange }
		className={ `${props.readonly ? style.disable : style.write}` }
	/>
	
export default Tile;