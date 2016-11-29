//1. click on circle and a random emotion appears
//2. certain user event on an emotion and let it react accordingly
// - hover over Joy - change color or let it shake or omsething 
// - click on sadness - let it turn blue and cry
// - click on disgust - green
// - click on anger - smoke comes out :D
// - hover over fear - let it shake?

function createEmotion(){
  
  //allow create emotion to take in an argument?


  // cookieImg = document.createElement('img');
  // cookieImg.setAttribute('src', 'img/cookie-dough.jpg');
  // size = '30px';
  // cookieImg.style.width = size;
  // cookieImg.style.height = size;
  // cookieImg.style.margin = '3px';
  // cookieCount += 1;
  // return cookieImg;
}

function addEmotion(){

  emotionCircle = document.getElementById('emo-circle');


  emotionCircle.innerHTML = 'dsaf'
  //Your code goes here  



  //remember to read up on appendChild (what Tristan mentioned) and guide the students accordingly
}


function addEmotionListener(){
  addEmotionCircle = document.getElementById('emo-circle');
  addEmotionCircle.addEventListener("click", addEmotion);
}

// wait for DOM content to load before binding an event
document.addEventListener('DOMContentLoaded', addEmotionListener);
