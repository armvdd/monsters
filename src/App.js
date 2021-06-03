import React, { Component } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [ ],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }
  
  change = (e) => {
    {this.setState({ searchField: e.target.value})}
  }

  render (){
    //filtrování v search inputu
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox type = "search" placeholder = "search monsters" onChange={this.change}/> 
        <CardList monsters = {filteredMonsters} />
    </div>
  );
    }}

export default App;
