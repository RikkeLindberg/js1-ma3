/*Question 1:
Convert the function below to an arrow function*/
(a, b) => a - b;

/*Question 2:
Make a call to the URL below, 
pass the JSON it returns to a function 
and inside that function loop through the results and log each game's name.
In the catch method of your code, redirect to error.html if there is an error.*/
fetch("https://api.rawg.io/api/games?genres=sports")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    for (let i = 0; i < json.results.lenght; i++) {
      console.log(json.results[i].name);
    }
  })
  .catch(function(error) {
    console.dir(error);
  });

/*Question 3:
Replace the word cats with the word giraffes in the following sentence:
These cats are outrageous.*/
let header = "These cats are outrageous";

const catHeading = document.querySelector("h1");
const formattedHeading = header.replace("cats", "giraffes");

catHeading.innerText = formattedHeading;

/*Question 4:
Given the URL below, write code that checks if there is a userId parameter in the query string.
If there is no userID parameter, redirect the browser to third.html.
If there is a userID parameter and its value is less than 10, redirect to first.html.
If there is a userID parameter and its value is 10 or greater, redirect to second.html. 
https://my.site.com?userId=7*/
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userId;

if (params.has("userId")) {
  userId = params.get("userId");
}

if (userId < 10) {
  document.location.href = "first.html";
} else if (userId >= 10) {
  document.location.href = "second.html";
} else {
  document.location.href = "third.html";
}

/*Questin 5:
Write code that removes the button, 
and only the button, from its parent element in the HTML below: */
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

/*Questin 6:
Create an li element with a text value of Parrots and a class of parrots.
Add the new item as the second item in the ul below (add it after Cows).*/

const elephants = document.querySelector(".elephants");
const list = document.createElement("li");
list.className = "parrots";

const listContent = document.createTextNode("Parrots");
list.appendChild(listContent);

elephants.before(list);

/*Questin 7:
Make a call to the URL below and pass the JSON it returns to a function.
Inside that function select the div from the HTML below 
and assign the rating property from the JSON object as it's text value.
In the catch method, log the error that may be returned.*/

fetch("https://api.rawg.io/api/games/3801")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.dir(json);
  })
  .catch(function(error) {
    console.dir(error);
  });
