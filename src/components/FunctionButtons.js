import React from 'react';

const FunctionButtons = props => {
    const {
        undo,
        reset,
        solve,
        check,
        newGame
    } = props;

    return (
        <div className='buttons_container row'>
            <button className='col-5 col-md-1' onClick={check}>Check</button>
            <button className='col-5 col-md-1' onClick={newGame}>New Game</button>
            <button className='col-5 col-md-1' onClick={solve}>Solve</button>
            <button className='col-5 col-md-1' onClick={reset}>Reset</button>
            <button className='col-5 col-md-1' onClick={undo}>Undo</button>
        </div>
    )
}

export default FunctionButtons;