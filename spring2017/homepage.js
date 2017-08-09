jQuery(document).ready(function($) {
	var carousel = [
		{
			"image path": "images/Carolyn Weltman.png",
			caption: "Phase 1 - MML - Balloon Heaven"
		},
		{
			"image path": "images/shawn.png",
			caption: "Phase 1 - SIBL - :mobilia"
		},
		{
			"image path": "images/shakiyla_newland.png",
			caption: "Phase 1 - Columbus - The Beauty Closet"
		},
		{
			"image path": "images/Paola_Contardo.png",
			caption: "Phase 1 - Columbus - Panda Documentaries"
		},
		{
			"image path": "images/athanasia_kotopoulos.PNG",
			caption: "Phase 1 - BLC - Athanasia Travels"
		},
		{
			"image path": "images/Mohamed_Ismail.png",
			caption: "Phase 1 - MML - Feline Rescue"
		},
		{
			"image path": "images/Kestrel_Ambrose.png",
			caption: "Phase 1 - Chatham Square - Food-Folio"
		},
		{
			"image path": "images/Olufunmilayo-Akintayo-Mullis.png",
			caption: "Phase 1 - MML - Sanctuary for Traumatized Children"
		},
		{
			"image path": "images/adorable.png",
			caption: "Phase 1 - Countee Cullen -  Adorable Apartment"
		},
		{
			"image path": "images/LourdesEcheverry.PNG",
			caption: "Phase 1 - St. George -  Adorable Apartment"
		},
		{
			"image path": "images/Maryann Yin.png",
			caption: "Phase 2 - MML -  Meet A. Hamilton"
		},
		{
			"image path": "images/Ana-Gamboa.png",
			caption: "Phase 2 - MML -  Unusual Travel"
		},
		{
			"image path": "images/Andrew.png",
			caption: "Phase 2 - SIBL -  New York City Neighborhood Guide"
		}
	];

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	carousel = shuffle(carousel);

	for (var i = 0; i < carousel.length; i++) {
		var indicator = document.createElement("li");
		indicator.setAttribute("data-target", "#myCarousel");
		indicator.setAttribute("data-slide-to", i);
		if (i == 0) {
			indicator.className = "active";
		}
		document.getElementById("carousel-indicators").appendChild(indicator);

		var item = document.createElement("div");

		if (i == 0) {
			item.className = "item carousel-text active";
		} else {
			item.className = "item carousel-text";
		}

		var itemImage = document.createElement("img");
		itemImage.setAttribute("src", carousel[i]["image path"]);
		item.appendChild(itemImage);

		var caption = document.createElement("p");
		caption.appendChild(document.createTextNode(carousel[i]["caption"]));
		item.appendChild(caption);

		document.getElementById("carousel-inner").appendChild(item);
	}
});
