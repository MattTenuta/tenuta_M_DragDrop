(() => {
	//make the connections to the elements on the page 
	//that we want the user to interact with
	let theButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		dropZones = document.querySelectorAll(".drop-zone"),
		theGameBoard = document.querySelector(".puzzle-board");

	const piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	//theButtons becomes this:
	// [
	// <img>
	// <img>
	// <img>
	// <img>
	//]

	function changeImageSet() {	
		// debugger; //pause out code execution at this point
		let key = this.dataset.bgref;
		console.log(key);

		theGameBoard.style.backgroundImage = `url(images/backGround${key}.jpg)`

	piecePaths.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.bgref}.jpg `
	})
	}

	function startDrag(event) {
		event.dataTransfer.setData("draggedElement", event.target.id);
	}

	function draggedOver(event) {
		// event is the user (a click, drag, a drop)
		// some elements have default behaviour (like an anchor tag) -> we need to block that behaviour
		// and script our own
		// Thats what event.preventDefault() does -> override the default behaviour (block it) 
		event.preventDefault();
		console.log("dragged over me");
		// save a reference to the element were dragging

	}

	function handleDrop(event) {
		event.preventDefault();
		console.log("dropped on me");
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log("dropped this element:", currentEl);
		//appendChild (add child) is a built in js method that adds an element to a containing element
		//The "this" keyword is a reference to the element you are dropping onto (or into)
		this.appendChild(document.querySelector(`#${currentEl}`));
	}

	theButtons.forEach(button => button.addEventListener("click", changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
	});
	
})();
