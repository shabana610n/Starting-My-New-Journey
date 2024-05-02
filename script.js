// Selecting the input field, button, and output element from the DOM
const userInput = document.querySelector('input');
const submitBtn = document.querySelector('button');
const meaningOutput = document.querySelector('h3');

// Adding an event listener to the button for the click event
submitBtn.addEventListener('click', async () => {
    // Retrieving the value entered by the user in the input field
    const userWord = userInput.value;

    // Checking if the input field is empty or if it contains any numbers using a regular expression
    if (userWord === "" || /[0-9]/.test(userWord)) {
        // Alerting the user if the input is invalid (empty or containing numbers)
        alert("Please Enter a Valid Word!");
    } else {
        // If the input is valid, proceed to fetch the meaning of the word from an API

        // Constructing the URL for the API endpoint based on the user's word
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${userWord}`;

        // Fetching the meaning of the word from the API asynchronously using fetch
        let response = await fetch(apiUrl);

        // Parsing the response data as JSON
        let meaningData = await response.json();

        // Displaying the output element to show the meaning of the word
        meaningOutput.style.display = 'block';

        // Appending the meaning of the word to the output element
        meaningOutput.textContent += meaningData[0]['meanings'][0]["definitions"][0]["definition"];
    }
});