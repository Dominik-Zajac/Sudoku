import React from 'react';
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';
import Board from '../components/Board'
import Message from '../components/Message';
import FunctionButtons from '../components/FunctionButtons';

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.scss';

const levels = ['easy', 'medium', 'hard', 'insane', 'inhuman'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '487591623325786914619243785793168542142975368568432197856314279271859436934627851',
            board: '487591623325786914619243785793168542142975368568432197856314279271859436934627851',
            backBoard: '',
            difficult: 'easy',
            message: '',
        }
    }

    onChange(e, index) {
        if (e.target.value > 0 && e.target.value <= 9 && isNaN(e.target.value) === false) {
            let playerUpdateBoard = this.state.board.split('').map((value, newValue) => {
                if (newValue === index) {
                    return e.target.value;
                } else {
                    return value;
                }
            });

            const undoBoard = this.state.board.split('');
            
            this.setState({
                board: playerUpdateBoard.join(''),
                backBoard: undoBoard.join('')
            })
        }
    };

    check () {
        const prompt = sudoku.solve(this.state.board);

        if (prompt) {
            this.setState({
                message: 'Good for you!'
            });
        } else {
            this.setState({
                message: 'You made a mistake!'
            });
        }
    };

    newGame() {
        const level = this.state.difficult;
        const newBoard = sudoku.generate(level);
        
        this.setState({
            board: newBoard,
            initialBoard: newBoard,
            backBoard: newBoard,
            message: ''
        })
    };

    solve() {
        const answer = sudoku.solve(this.state.board);
        
        if (answer) {
            this.setState({
                board: answer,
                initialBoard: answer,
                backBoard: answer,
                message: 'Solved sudoku!'
            })  
        } else {
            this.setState({
                message: 'Error of the solution!'
            })
        }        
    };

    reset() {
        const initialBoard = this.state.initialBoard;
    
        this.setState({
            board: initialBoard,
            backBoard: initialBoard,
            message: ''
        })
    };

    undo() {
        const backBoard = this.state.backBoard;
    
        this.setState({
            board: backBoard
        })
    };

    selectLevel(index) {
        const easyDifficult = index;
        
        this.setState({
            difficult: easyDifficult
        })
    };

    render() {
        const {selectLevel, onChange, check, newGame, solve, reset, undo} = this;
        const {initialBoard, board, message, difficult} = this.state;

        const buttons = levels.map((level, index) => (
            <button
                key={index}
                className='col-5 col-md-1'
                onClick={selectLevel.bind(this, `${level}`)}
            >
                {level}
            </button>
        ))
        
        return (
            <div className='container_app'>
                <h1 className='title'>Sudoku</h1>
                <Board 
                    initialBoard={initialBoard} 
                    board={board}
                    onChange={onChange.bind(this)}
                />
                <Message 
                    message={message} 
                />
                <FunctionButtons
                    check={check.bind(this)}
                    newGame={newGame.bind(this)}
                    solve={solve.bind(this)}
                    reset={reset.bind(this)}
                    undo={undo.bind(this)}
                />
                <p className='level_info'>Select level: {difficult}</p>
                <div className='buttons_difficult row'>
                   {buttons}
                </div>          
            </div>
        )
    }
};

export default hot(module)(App);
