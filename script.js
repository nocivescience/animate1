//genrate random letters
function randomText(){
  
  let text = "अआइईउऊएऐओऔअंअःऋॠकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ";
  
  letter = text[Math.floor(Math.random() * text.length)];
  
  return letter;
}


//hacking animation

function rain(){
  
  
    let e = document.createElement('div');
  
  let left = Math.floor(Math.random() * 100);
  let size = Math.random() * 1.8;
  let duration = Math.random() * 2;
  
    e.classList.add('text');
    e.innerText = randomText();
   document.body.appendChild(e);
  
  e.style.left = left + '%';
  e.style.fontSize = 0.3 + size + 'em';
  e.style.animationDuration = 1 + duration  + 'px';
  
    //remove
  setTimeout(function(){
    document.body.removeChild(e)
  },4050)
  
}



setInterval(function(){
  rain()
},20);