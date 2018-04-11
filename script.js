var date = new Date();
localStorage.setItem("soundclick", 0)


function statistics(){
	document.getElementById("time").innerHTML = date; 
	}

function sounds(){
	localStorage.soundclick = Number(localStorage.soundclick) + 1;

	alert(soundclicks)
}