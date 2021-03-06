import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import React, { Component } from 'react';


class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
    
        ]
    };
    handleIncrement = (counter) => {
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

    handleDecrement =(counter) => {
        const counters = [...this.state.counters]; //...spread operator to clone array
        const index = counters.indexOf(counter); //finds index of counter
        counters[index] = { ...counter }; // clones object
        counters[index].value--; // increments counter
        this.setState({ counters }) // updates states
    }

    render() { 
        return (

      <>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
     
     <main className='container'>
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset} 
        onIncrement={this.handleIncrement} 
        onDelete={this.handleDelete}
        onDecrement={this.handleDecrement}/> 
     </main>
    
   </>
    
        );
    }
}
 
export default App;

