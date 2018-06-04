// made with neo-ion.js 
// a simple js library by Animion

// neo-ion/math.js
var M = {
  floRand: function(x) {
    return Math.floor(Math.random() * x);
  },
  ceiRand: function(x) {
    return Math.ceil(Math.random() * x);
  },
  rand: function(x) {
    return (Math.random() * x);
  }
}
// neo-ion/selector_event.js
function $(elev, func) {
  w = window;
  if (elev == 'click') return w.onclick = func;
  else if (elev == 'load') return w.onload = func;
  else return document.querySelector(elev);
}
// eof neo-ion.js

i = 0;
W = window.innerWidth;
H = window.innerHeight;

function drawOrb() {
  n1 = M.ceiRand(H);
  n2 = M.ceiRand((W-20));
  R = M.ceiRand(255);
  G = M.ceiRand(255);
  B = M.ceiRand(255);
  A = M.ceiRand(1)/2;
  
  if (i == (W/10)) clearInterval(time);
  else i+=1;
  
  tag = document.createElement('div');
  tagId = tag.setAttribute('id', 'snow'+i);
  document.body.appendChild(tag);
  
  web_circ = '@-webkit-keyframes fall'+i+' {'+
    '0% {top: 0; left: '+n2+'px}'+
    '100% {top: '+n1+'px; left: '+n2+'px}'+
  '}';
  moz_circ = '@-moz-keyframes fall'+i+' {'+
    '0% {top: 0; left: '+n2+'px}'+
    '100% {top: '+n1+'px; left: '+n2+'px}'+
  '}';
  def_circ = '@keyframes fall'+i+' {'+
    '0% {top: 0; left: '+n2+'px}'+
    '100% {top: '+n1+'px; left: '+n2+'px}'+
  '}';
  
  css = document.createElement('style');
  css.innerHTML = web_circ + moz_circ + def_circ;
  document.head.appendChild(css);
  
  orb = $('#snow'+i);
  
  orb.style.WebkitAnimation = 'fall'+i+' 5s linear infinite';
  orb.style.MozAnimation = 'fall'+i+' 5s linear infinite';
  orb.style.animation = 'fall'+i+' 5s linear infinite';
  orb.style.width = '10px';
  orb.style.height = '10px';
  orb.style.boxShadow = '0 0 4px 2px rgba('+(R-30)+','+(G-30)+','+(B-30)+','+A+')';
  orb.style.background = 'rgba('+R+','+G+','+B+','+A+')';
  orb.style.position = 'fixed';
  orb.style.left = n2+'px';
  orb.style.borderRadius = '50%';
  
  $('html, body').style.background = 'url("http://image.kocholo.ir/reza/05_New/10_05/SweetCouples11.jpg") no-repeat 90% 50%';
  $('html, body').style.backgroundSize = 'cover';
  $('html, body').style.margin = 0;
  $('html, body').style.padding = 0;
  $('html, body').style.overflow = 'hidden';
}

//$('click', drawOrb);

time = setInterval(drawOrb, 500);


