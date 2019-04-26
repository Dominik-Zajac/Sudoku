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
        <div className='buttons_container'>
            <button onClick={check}>Check</button>
            <button onClick={newGame}>New Game</button>
            <button onClick={solve}>Solve</button>
            <button onClick={reset}>Reset</button>
            <button onClick={undo}>Undo</button>
        </div>
    )
}

export default FunctionButtons;