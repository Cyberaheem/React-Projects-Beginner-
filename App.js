import React from 'react'

class App extends React.Component {
   
    constructor() {
        super();
        this.state = {
            rockPaperScissorsComputer: ['Rock', 'Paper', 'Scissors'],
            rockPaperScissorsUser: null,
            random: null,
            outcome: '' // new state for containing the outcome message
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(type) {
        this.setState({ outcome: '' }, () => {
            const min = 0;
            const max = 3;
            const random = Math.floor(min + (Math.random() * (max - min)));
            this.setState({ random })
            this.setState({
                rockPaperScissorsUser: type
            })
            const tie = (this.state.rockPaperScissorsComputer[random] === type);
            const win = (
                ((type === 'Rock') && (random === 2)) ||
                ((type === 'Paper') && (random === 0)) ||
                ((type === 'Scissors') && (random === 1))
            );
            setTimeout(() => {
                
                this.setState({
                    outcome: (
                        <h1 className={win && 'ribbon'}>{
                            tie ? 'It was a tie' :
                                win ? 'You win' : 'The computer wins'
                        }</h1>
                    )
                })
            }, 500)
        })
    }


    render() {
        return (
            <div>
                <button value="Click me!" onClick={() => this.handleClick('Rock')}>Rock</button>
                <button value="Click me!" onClick={() => this.handleClick('Paper')}>Paper</button>
                <button value="Click me!" onClick={() => this.handleClick('Scissors')}>Scissors</button>


                <h2 className="x">You selected: {this.state.rockPaperScissorsUser}</h2>
                <h1 className='x'>The computer selected: {this.state.rockPaperScissorsComputer[Math.floor(this.state.random)]}</h1>

                {this.state.outcome}
            </div>
        );
    }
}

export default App


