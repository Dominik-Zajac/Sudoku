import React from 'react';

import './Tile.scss';

const Tile = props => 
    <input
        type='number'
        min='1'
        max='9'
        value={ props.value }
        onChange={ props.playerOnChange }
        className={ `${ props.readonly ? 'disable' : 'write' }` }
    />
    
export default Tile;