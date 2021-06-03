import React from "react";
import "./css/SearchBox.css";

/* 
    //filtrování v search inputu
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

<input type = "search" placeholder = "search monsters" onChange={e => {this.setState({ searchField: e.target.value})
      }
      }/> 
      
*/

const SearchBox = (props) => {

    return(
        <input className = "search" type = {props.type} placeholder = {props.placeholder} onChange={props.onChange} />
    )
}

export default SearchBox;

