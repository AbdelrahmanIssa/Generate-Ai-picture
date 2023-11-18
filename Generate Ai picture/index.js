// Your OpenAI API key
let API = "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";

// Getting the user input element
let userInput = document.getElementById("userInput");

// Getting the button for triggering image generation
let generate = document.getElementById("generate");

// Function to make a request and generate images
let getImage = async () => {
  // Request configuration
  let methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API}`
    },
    body: JSON.stringify({
      "prompt": userInput.value,
      "n": 3,
      "size": "256x256"
    })
  };

  // Fetching data from the OpenAI API
  let result = await fetch("https://api.openai.com/v1/images/generations", methods);
  let data = await result.json();

  // Extracting and displaying images
  let listImages = data.data;
  images.innerHTML = "";
  listImages.map(photo => {
    // Creating a container for each image
    let container = document.createElement("div");
    images.append(container);

    // Creating an image element
    let img = document.createElement("img");
    container.append(img);

    // Setting the image source from the API response
    img.src = photo.url;
  });
}

// Adding a click event listener to the "Generate" button
document.getElementById("generate").addEventListener("click", getImage);
