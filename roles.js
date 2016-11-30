//2. certain user event on an emotion and let it react accordingly
// - hover over Joy - change color or let it shake or omsething 
// - click on sadness - let it turn blue and cry
// - click on disgust - green
// - click on anger - smoke comes out :D
// - hover over fear - let it shake?


function reactRole(){
	joy = document.getElementById('joy');
	joy.src = 'img/joy-mouse-over.jpg';
}

function resetRole(){
	joy = document.getElementById('joy');
	joy.src = 'img/joy.png';
}

function addRoleListener(){
  joy = document.getElementById('joy');
  joy.addEventListener("click", reactRole);
  joy.addEventListener("dblclick", resetRole);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addRoleListener);