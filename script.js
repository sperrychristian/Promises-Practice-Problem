// Name: Christian Sperry
// Description: The function of this program is practice calling various Rest API's

// ### Dog CEO API
// Get a random dog image
// `https://dog.ceo/api/breeds/image/random`
// - Display the image inside the `<img id="dog-img">`.

async function getDog() {
  try {
    let dog = await fetch("https://dog.ceo/api/breeds/image/random");
    let dog_json = await dog.json();
    let image = document.querySelector("#dog-img"); // locating the image tag
    image.src = dog_json.message; // setting the image src to the value of whatever dog picture our api returns
    console.log(dog_json.message); // contents of getDog
  } catch (error) {
    console.log(`Dog API Error: ${error}`); // try catch statement statement to handle errors
  }
}

// the following two lines allow us isolate the dog-btn html and add an event listener so our function runs when clicking the button
let dog_button = document.querySelector("#dog-btn");
dog_button.addEventListener("click", getDog);

// ### AdviceSlip API
// Get random advice
// `https://api.adviceslip.com/advice`
// - Display the `"slip.advice"` inside `<blockquote id="advice-output">`.

async function getAdvice() {
  try {
    let advice = await fetch("https://api.adviceslip.com/advice");
    let advice_json = await advice.json();
    // the following tow lines isolate our advice html tag and displays whatever the api returns
    let advice_text = document.querySelector("#advice-output");
    advice_text.innerText = advice_json.slip.advice;
    console.log(advice_json.slip.advice); // contents of get advice
  } catch (error) {
    console.log(`Advice API Error: ${error}`);
  }
}

// adding an event listener so when the user clicks the button, it works
let advice_button = document.querySelector("#advice-btn");
advice_button.addEventListener("click", getAdvice);

// ### Joke API
// Get random advice
// `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
// - Display the `"slip.advice"` inside `<blockquote id="advice-output">`.

async function getJoke() {
  try {
    let joke = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single",
    );
    let joke_json = await joke.json();
    let joke_text = document.querySelector("#joke-output");
    joke_text.innerText = joke_json.joke; // setting the inner html of our joke text to the contents of the joke API
    console.log(joke_json.joke); // contents of getJoke
  } catch (error) {
    console.log(`Joke API Error: ${error}`);
  }
}

// adding our final event listener for when users click the get joke button
let joke_button = document.querySelector("#joke-btn");
joke_button.addEventListener("click", getJoke);
