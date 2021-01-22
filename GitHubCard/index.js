import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const URL = 'https://api.github.com/users/credleo95'
axios.get(URL)
    .then( response => {
      console.log(response.data); 
      console.log("It's working")
    }
        )
  
    .catch( error => {
        console.log("Error:", err);
    })

    const err = "Oh no... It didn't work. Try again."
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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
function cardCreator(data){
  const cardBox = document.createElement("div");
  cardBox.classList.add("card");
  
  const profilePic = document.createElement("img");
  cardBox.appendChild(profilePic);
  profilePic.src = data.avatar_url ;
  
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardBox.appendChild(cardInfo);
  
  const realName = document.createElement("h3");
  realName.classList.add("name");
  realName.textContent = data.name 
  cardBox.appendChild(realName);
  
  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = `${data.login}`
  cardInfo.appendChild(username);

  const location = document.createElement("p");
  location.textContent = `Location: ${data.location}`
  cardInfo.appendChild(location);
  const profile = document.createElement("p")
  profile.textContent = "Profile: "
  cardInfo.appendChild(profile);
  
  const address = document.createElement("a");
  address.href = `${data.html_url}`
  profile.appendChild(address);

  const followers = document.createElement("p")
  followers.textContent = `Followers: ${data.followers}`
  cardInfo.appendChild(followers)

  const following = document.createElement("p")
  following.textContent = `Following: ${data.following}`
  cardInfo.appendChild(following)

  const bio = document.createElement("p")
  bio.textContent =`Bio: ${data.bio}`
  cardInfo.appendChild(bio);

  return cardBox 
}
console.log(cardCreator(URL));


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
