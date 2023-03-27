const buttonEl = document.getElementById("btn");
const imageContentEl = document.querySelector(".image-content");
// getting elements by their class
const animeImgEl = document.querySelector(".anime-img");
const artistNameEl = document.querySelector(".artist-name");

// adding an event listener on click
// whenever we use await, we gotta define the function
// as async
buttonEl.addEventListener("click", async function () {
	try {
		// while the data is loading, we disable the button,
		// write 'Loading ...' and 'Updating ...' and display
		// a loading figure
		buttonEl.disabled = true;
		buttonEl.innerText = "Loading ...";
		artistNameEl.innerText = "Updating ...";
		animeImgEl.src = "./images and other resources/loading.svg";
		//fetching the response from the api
		const response = await fetch("https://api.catboys.com/img");
		// converting the api response to a json object
		const data = await response.json();
		// after the data is loaded, we change the enability
		// of the key back to enabled, and change the button text
		// back to normal
		buttonEl.disabled = false;
		buttonEl.innerText = "Get Anime";
		// changing the display style of image-content
		// to block instead of none
		imageContentEl.style.display = "block";
		// changing the pictures
		animeImgEl.src = data.url;
		// changing inner text of artist-name block
		artistNameEl.innerText = data.artist;
	} catch (error) {
		console.log(error);
		buttonEl.disabled = false;
		buttonEl.innerText = "Get Anime";
		animeImgEl.style.display = "none";
		buttonEl.style.marginBottom = "0";
		artistNameEl.style.margin = "1rem";
		artistNameEl.innerText =
			"Oops! Something happened, please try agian ...";
	}
});
