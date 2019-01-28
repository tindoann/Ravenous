//clientId credentials for yelp API
const clientId =  'KIm-ZwWd259sMSMOL4No9g';
//secret credentials for yelp api
const spiKey = 'utMk1VvVDFbhCkw1I4bEtj8qQmfm5EU6DivJ69EWHuMtsuGFufkWEGUBp6DtkCB75Oa5olrgGiCvfYsCeKkhNLNwEpZDclYNDOsMGdwBIelqagQ6JnCLaBF8tFJOXHYx';
var accessToken='';
// create object names yelp
let Yelp = {
//add getAccessToken() mehtod which is necessary to retrieve an access token
// from the Yelp API so that you can authenticate your requests and retrieve data.
getAccessToken(){
  if(accessToken){
    return new Promise(resolve => resolve(accessToken));
       }
//not true then fetch
  return (
    fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${clientId}&client_secret=${secret}`,
  {method: 'POST'}
         ).then(response => {
                return response.json();
              }).then(jsonResponse =>
                      accessToken = jsonResponse.access_token).then(
                        console.log('checkTokenOK')
                      ) //ends then function
          ) //ends return
    }, // ends getAccessToken

// search method that pass in three parameters
search(term, location, sortBy){
return Yelp.getAccessToken().then(
  () => {return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                     {
                     headers : { Authorization : `Bearer ${accessToken}`, 'origin' : 'origin' }
                   }) //ends fetch
         }).then(response => {
                return response.json();
              }).then(jsonResponse => {
                     console.log(jsonResponse)
                     if (jsonResponse.businesses) {
                           return jsonResponse.businesses.map( business => {
                             return {//yelp api will return these specific attributes
                                   id : business.id,
                                  imageSrc : business.image_url,
                                  name : business.name,
                                  address : business.location.address1,
                                  city : business.location.city,
                                  state : business.location.state,
                                  zipCode : business.location.zip_code,
                                  category : business.categories[0].title,
                                  rating : business.rating,
                                  reviewCount : business.review_count
                                }
                       }) //closes map
                     } //closes if
                   }) //closes last then method
                 } //closes search mthod
}; //ends yelp

export default Yelp;
