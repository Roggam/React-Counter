import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },

        ]
    };
    handleIncrement = counter => {
        const counters = [...this.state.counters]; //...spread operator to clone array
        const index = counters.indexOf(counter); //finds index of counter
        counters[index] = { ...counter }; // clones object
        counters[index].value++; // increments counter
        this.setState({ counters }) // updates states

    }


    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        })

        this.setState({ counters: counters });
    }

    render() {
        return (

            <div>
                <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
                {this.state.counters.map(counter => (
                    <Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}>
                    </Counter>
                ))}
            </div>

        );
    }
}

export default Counters;