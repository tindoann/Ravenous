import Yelp from './util/Yelp.js'; //import yelp
import React, { Component } from 'react'; //import React and its Component
import logo from './logo.svg'; //import logo from current dir
import './App.css';//import css style
import BusinessList from './components/BusinessList/BusinessList.js';   //import BussinesList instance
import SearchBar from './components/SearchBar/SearchBar.js';//import SearchBar instance


// App class
class App extends Component {
  //add constructor
  constructor(props) {
    super(props);
    this.state = { businesses : [] }
    this.searchYelp = this.searchYelp.bind(this)
  }

  // 3-16 add searchYelp method
  searchYelp(term, location, sortBy){
  // 3-17 the method accepts three parameters 
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        this.setState( {businesses : businesses} )
      })
  }
//render method
  render() {
    return (
      <div className="App">
  <h1>ravenous</h1>
  {/*passing searchYelp attribute to SearchBar.js */}
  <SearchBar searchYelp={this.searchYelp}/>
  {/*passing busArray variable or key to BusinessList.js */}
  <BusinessList busArray={this.state.businesses} />
</div>
    );
  }
}

export default App;
