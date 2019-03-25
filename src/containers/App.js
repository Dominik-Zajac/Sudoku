import React from 'react';
import Board from '../components/Board'
import { hot } from 'react-hot-loader';
import sudoku from 'sudoku-umd';

import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: '487591623325786914619243785793168542142975368568432197856314279271859436934627851',
            board: '487591623325786914619243785793168542142975368568432197856314279271859436934627851',
            backBoard: '',
            difficult: 'easy',
            message: ''
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

    easyLevel() {
        const easyDifficult = 'easy';
        
        this.setState({
            difficult: easyDifficult
        })
    };

    mediumLevel() {
        const mediumDifficult = 'medium';
        
        this.setState({
            difficult: mediumDifficult
        })
    };

    hardLevel() {
        const hardDifficult = 'hard';
        
        this.setState({
            difficult: hardDifficult
        })
    };

    insaneLevel() {
        const insaneDifficult = 'insane';
        
        this.setState({
            difficult: insaneDifficult
        })
    };

    inhumanLevel() {
        const inhumanDifficult = 'inhuman';
    
        this.setState({
            difficult: inhumanDifficult
        })
    };

    render() {
        return (
            <div className='container_app'>
                <h1 className='title'>Sudoku</h1>
                <Board 
                    initialBoard={ this.state.initialBoard } 
                    board={ this.state.board }
                    onChange={ this.onChange.bind(this) }
                />
                <p className='information'>{this.state.message}</p>
                <div className='buttons_container'>
                    <button onClick={ this.check.bind(this) }>Check</button>
                    <button onClick={ this.newGame.bind(this) }>New Game</button>
                    <button onClick={ this.solve.bind(this) }>Solve</button>
                    <button onClick={ this.reset.bind(this) }>Reset</button>
                    <button onClick={ this.undo.bind(this) }>Undo</button>
                </div>
                <p className='level_info'>Select level: {this.state.difficult}</p>
                <div className='buttons_difficult'>
                    <button onClick={ this.easyLevel.bind(this) }>Easy</button>
                    <button onClick={ this.mediumLevel.bind(this) }>Medium</button>
                    <button onClick={ this.hardLevel.bind(this) }>Hard</button>
                    <button onClick={ this.insaneLevel.bind(this) }>Insane</button>
                    <button onClick={ this.inhumanLevel.bind(this) }>Inhuman</button>
                </div>          
            </div>
        )
    }
};

export default hot(module)(App);
