import React from 'react'; // import react
import ReactDOM from 'react-dom';
import './SearchBar.css'; //import css style

//sorting options
let sortByOptions = {
  'Best Match' : ' best_match',
  'Highest Rated' : 'rating',
  'Most Reviewed' : 'review_count'
}

//create Component
class SearchBar extends React.Component{
// 3-1 add constructor, pass props
constructor(props){
  super(props);
// 3-2/3 set initial state: term: refers to search term
//location refers location, sortBy refers to sort option
  this.state = {term:'',
               location: '',
               sortBy:'best_match'
             };
  // 3 -14/23 bind methods() to "this"
  this.handleSortByChange=this.handleSortByChange.bind(this);
  this.handleTermChange=this.handleTermChange.bind(this);
  this.handleLocationChange=this.handleLocationChange.bind(this);
  this.handleSearch=this.handleSearch.bind(this);
}

//this method returns the current CSS style class for a sorting option
//will prove useful in providing visual feedback to users
getSortByClass(sortByOption){
  if (this.state.sortBy=== sortByOption){
      return 'active';
    } else {
      return ''
    }
}
//method: sets the state of a sorting option
//method: useful when communicating with the Yelp API in the future
handleSortByChange(sortByOption){
this.setState({sortBy: sortByOption});
}
// 3-12 method: sets the state of search term
handleTermChange(event){
this.setState({term : event.target.value });
}
// 3-13 method: sets the state of location term
handleLocationChange(event){
this.setState({location : event.target.value });
}
//3 -19/21 method: handle a search
handleSearch(event){
//3-20 pass in the even parameter
this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
// 3-22 prevent the default action of clicking a link from triggering at the end of the method
event.preventDefault()
}

// method:  to sort the businesses by their option
//Object.keys() returns indices of array (argument). next, map indices using var sortByOption
renderSortByOptions() {
      return Object.keys(sortByOptions).map(sortByOption => {
        //  extract array value for index j and set it to var sortByOptionValue
        // store values in a variable. 
        // Inside the callback function, we access the sortByOptions values using the 
        // sortByOption parameter of the callback function
       let sortByOptionValue = sortByOptions[sortByOption];
       //return for map():
       // return a <li> element,. The list item has an attribute called key set to sortBy
       return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange}
       key={sortByOptionValue} >
       {sortByOption}
       </li>
     }
   );
  }
  // call this.renderSortByOptions with parenthesis () (not a getter)
  // 3-15 add onChange attribute to each <input> element 
  // 3-24 add an onClick attribute to the 'Let Go' button
  render(){
       return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
        // this refers to the class
           <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch} > Lets Go </a>
        </div>
      </div>  
  );
 }
}
// export the business Component
export default SearchBar;
