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