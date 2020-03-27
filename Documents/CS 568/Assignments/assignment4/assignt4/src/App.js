import React from 'react';
import './App.css';
import Person from './person';

class App extends React.Component {

    state = {
        persons: [
            { name: 'Alice', age: 20 },
            { name: 'Bob', age: 19 },
            { name: 'John', age: 25 }
        ]
    }

    makeOlder = () => {
        const personsCopy = [...this.state.persons];
        personsCopy.map(elm => {
            elm.age = elm.age + 1;
        })

        this.setState({ persons: personsCopy })

    }

    render() {
        return (
            <div className="App" >
                <Person name={this.state.persons[0].name}
                    age={this.state.persons[0].age}>
                </Person>
                <Person name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>

                </Person>
                <Person name={this.state.persons[2].name}
                    age={this.state.persons[2].age}>

                </Person>
                <button onClick={this.makeOlder}>Make Older</button>
            </div>);
    };
}
export default App;
