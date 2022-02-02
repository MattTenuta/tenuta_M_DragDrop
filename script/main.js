(() => {
	//make the connections to the elements on the page 
	//that we want the user to interact with
	const theButtons = document.querySelectorAll("#buttonHolder img"),
	theGameBoard = document.querySelector(".puzzle-board");

	//theButtons becomes this:
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	//]

	function changeBgImg() {
		// debugger; //pause out code execution at this point
		let key = this.dataset.bgref;
		console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`
	}

	theButtons.forEach(button => button.addEventListener("click", changeBgImg));
	
})();
