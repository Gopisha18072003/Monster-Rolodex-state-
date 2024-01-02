import {Component} from 'react';
import './App.css';
import CardList from './card-list.component';
import { SearchBox } from './searchbox/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}));
    }

  handleChange = (e) => {
    this.setState({searchField: e.target.value}) 
  }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search Monster' 
          handleChange={this.handleChange}
          />
        <CardList monsters={filteredMonster}/>
        {console.log(filteredMonster)}
      </div>
    );
  }
  
}

export default App;
