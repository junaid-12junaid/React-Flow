import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import { render } from '@testing-library/react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/SearchBox/search-box.component';
class App extends Component {
  constructor(){
    super()

    this.state={
      monster:[],
      searchFeild:""
    }
    // this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(user=>this.setState({monster:user})).catch(err=>console.log("It is error"))
  }

  handleChange=(e)=>{
    this.setState({searchFeild:e.target.value})
  }
  render(){
    const {monster,searchFeild}=this.state
    const filteredFriend=monster.filter(friend=>friend.name.toLowerCase().includes(searchFeild.toLowerCase()))
    return(

          <div className="App">
            <h1 className='SearchHead'>Search For Your Friend</h1>
            <SearchBox placeholder="Search for Friend" searchHandler={this.handleChange}/>

            <CardList monster={filteredFriend}/>
            
            
          </div>
        );
      };
  
  }


export default App;
