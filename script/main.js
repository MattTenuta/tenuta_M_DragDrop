// Hi Trevor
// I just wanted to put these comments at the top to let you know I couldnt figure out how to reset the pieces or to stop the pieces from stacking
// I tried many different times and worked my way through it but I couldnt get it

// I left my code in that I added but it is commented out so you can take a look at my attempts
// I also left comments to show my thoughts as I wrote the code


(() => {
	let theButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePieces = document.querySelectorAll(".puzzle-pieces *"),
		dropZones = document.querySelectorAll(".drop-zone"),
		theGameBoard = document.querySelector(".puzzle-board");

	// I made this var to be the dragZone but nothing worked with it

	//	dragZone = document.querySelector(".puzzle-pieces");

	const piecePaths = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// Reset function but this does not work as intended

	// function resetPieces() {
	//	if (element.hasChildNodes()) {
	//		document.getElementById("puzzle-pieces").reset();
	//	}
    //	}

	function changeImageSet() {	
		
		//  check each zone, if child is there, move it back to drag zone (append it)
		// This also didnt seem to work as intended
		
		// dropZones.forEach(zone => {
		//	 if (zone.currentEl == 0) {
		//		 return;
		//	 }
		//	});

		// I also tried this but it also didnt work

	//	dragZone.forEach(zone => {
	//		if (zone.hasChild(puzzle-pieces)) {
	//			zone.appendChild();
	//		}
	//  });

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
		event.preventDefault();
		console.log("dragged over me");

	}

	function handleDrop(event) {
		event.preventDefault();
		console.log("dropped on me");
		let currentEl = event.dataTransfer.getData("draggedElement");
		console.log("dropped this element:", currentEl);
		this.appendChild(document.querySelector(`#${currentEl}`));

		// this code below is supposed to check if there is a child element and return if there is (block a drop)
		// I dont really understand why this doesnt work, I check for a child and then return if there isnt
		
		// if (this.childElementCount == 0) { return; }
		// else {}


		// Below is another failed attempt

		// if (dropZones.currentEl == 0) { return; }
		// else {}
	}

	theButtons.forEach(button => button.addEventListener("click", changeImageSet));

	puzzlePieces.forEach(piece => piece.addEventListener("dragstart", startDrag));

	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", handleDrop);
		
		// this below is supposed to check for a drop and then activate the resetPieces function
		// that will reset if there is a child

		// zone.addEventListener("drop", resetPieces);
	});
	
})();
