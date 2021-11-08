var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector('#volume').innerHTML = video.volume*100 + '%'
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate=0.95*video.playbackRate;
	console.log("New speed is "+video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate=video.playbackRate/0.95;
	console.log("New speed is "+video.playbackRate)
});


document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime+15<=video.duration){
		console.log("Original location "+video.currentTime)
		video.currentTime=video.currentTime+15
		console.log("New location "+video.currentTime)
	}
	else{
		console.log("Original location "+video.currentTime)
		console.log('Going back to beginning')
		video.currentTime=0
		console.log("New location "+video.currentTime)

	}

});



document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector('#mute').innerHTML=='Mute')
	{
		document.querySelector('#mute').innerHTML='Unmute'
		video.muted= true
	}
	else{
		document.querySelector('#mute').innerHTML='Mute'
		video.muted= false
	}

});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value/100);
	video.volume=this.value /100;
	document.querySelector('#volume').innerHTML=this.value+'%'

});





document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add('oldSchool')
	
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.remove('oldSchool')
	
});


