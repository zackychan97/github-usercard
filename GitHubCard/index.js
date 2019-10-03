/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/zackychan97')
  .then(response => {
    console.log(response);
  })



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 



   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />

  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>

</div>
*/
function githubCard(imgUrl, realName, hubName, location, githubURL, followers, following, bio){

  //creating my elements
  const newCard = document.createElement('div'),
  newImage = document.createElement('img'),
  userInfo = document.createElement('div'),
  userRealName = document.createElement('h3'),
  userHubName = document.createElement('p'),
  userLocation = document.createElement('p'),
  userProfile = document.createElement('p'),
  userAddress = document.createElement('a'),
  userFollowers = document.createElement('p'),
  userFollowing = document.createElement('p'),
  userBio = document.createElement('p');

  //adding text content
  newImage.src = imgUrl;
  userRealName.textContent = realName;
  userHubName.textContent = hubName;
  userLocation.textContent = location;
  userProfile.textContent = 'Profile: ';
  userAddress.src = githubURL;
  userFollowers.textContent = followers;
  userFollowing.textContent = following;
  userBio.textContent = bio;

  // adding classes
  newCard.classList.add('card');
  userInfo.classList.add('card-info');
  userRealName.classList.add('name');
  userHubName.classList.add('username');
 
  //appending
  newCard.appendChild(newImage);
  newCard.appendChild(userInfo);
  userInfo.appendChild(userRealName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(userProfile);
  userProfile.appendChild(userAddress);
  userInfo.appendChild(userFollowers);
  userInfo.appendChild(userFollowing);
  userInfo.appendChild(userBio);
}





/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
