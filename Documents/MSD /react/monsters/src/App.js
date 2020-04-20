import React, { Component } from 'react';
import './App.css';
// import axios from 'axios' 
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/Search-box.component'

class App extends Component {
    // constructor() {
    //     super()
    state = {
        monsters: [],
        searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ monsters: users }))
    }

    handleChange = (e) => {
        this.setState({ searchField: e.target.value })

    }
    render() {
        const { monsters, searchField } = this.state;
        //const monsters = this.state.monsters
        //const searchField = this.state.searchField
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        )
        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder='seacrch monsters'
                    handleChange={this.handleChange}></SearchBox>
                <CardList monsters={filteredMonsters}></CardList>

            </div>
        );
    }
}

export default App;
