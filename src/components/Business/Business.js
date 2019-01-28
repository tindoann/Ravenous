import React from 'react';
import './Business.css'; //import .css style file for business Component

//Business class
class Business extends React.Component {
  render(){
// creating a return statement that renders the HTML
    return (
  <div className="Business">
  <div className="image-container">
    <img src={this.props.business.imageSrc} alt=''/>
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <div className="Business-address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state} {this.props.business.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category}</h3>
      <h3 className={this.props.business.rating}> Stars</h3>
      <p>{this.props.business.reviewCount}</p>
    </div>
  </div>
</div>
    )
  }
}
// export the business Component
export default Business;
