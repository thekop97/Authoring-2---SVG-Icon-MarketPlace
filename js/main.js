(() => {
	console.log('fired!');

	let	svgBadge = document.querySelectorAll("svg");
	
	function logID() {
		console.log(this.id);
	}

	svgBadge.forEach(e => e.addEventListener('click',logID))
})();