import React from 'react'; // import react
import './BusinessList.css'; //import css style
import Business from '../Business/Business.js'; //import Business Component
//BussinesList class component
class BusinessList extends React.Component{
  render(){
    return (
<div className="BusinessList">
  {
   this.props.busArray.map(business=> {
     return <Business business = {business} key={business.id}/>;
   })
 }
</div>
    )
  }
}

// export the BusinessList Component
export default BusinessList;


// 6. created a prop and call the .map() method
// 7. inside of the map() method, pass a callback function
// with one parameter called business
// 8. Pss the info from the Maps function 
// Give our business component a prop of the 