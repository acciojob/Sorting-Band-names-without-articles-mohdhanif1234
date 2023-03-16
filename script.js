let str = "";
let touristSpots = ['Tajmahal', 'Victoria Memorial', 'The Virupaksha Temple'];
for(let i = 0; i < 3; i++){
	str += `<li>${touristSpots[i]}</li>`
}

document.getElementById("band").innerHTML = str;
