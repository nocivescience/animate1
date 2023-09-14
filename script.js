//genrate random letters
function randomText() {

    let text = "αβγδεζηθικλμνξοπρστυφχψω";

    letter = text[Math.floor(Math.random() * text.length)];

    return letter;
}


//hacking animation

function rain() {

    const estilo = document.createElement('style');
    estilo.innerHTML = `
    @keyframes animate{
        0%{
          transform:translateY(0) scale(1);
        }
        
        70%{
          transform:translateY(200%) scale(1);
        }
        
         100%{
          transform:translateY(0) scale(1);
        }
      }
        position:absolute;
        top:-10px;
        width:100%;
        height:100%;
        line-height:45px;
        text-transform:uppercase;
        color:#${Math.round(Math.random()*9)}e${Math.round(Math.random()*9)}b${Math.round(Math.random()*9)}e;
        text-shadow:0 0 5px #149414,
          0 0 15px #149414,
          0 0 30px #149414;
        transform-origin:bottom;
        animation: animate 4s linear forwards;
    `;
    document.head.appendChild(estilo);
    let e = document.createElement('div');

    let left = Math.floor(Math.random() * 100);
    let size = Math.random() * 1.8;
    let duration = Math.random() * 2;

    // e.classList.add('text');
    e.innerText = randomText();
    document.body.appendChild(e);

    //add style
    e.style.cssText = estilo.innerHTML;

    e.style.left = left + '%';
    e.style.fontSize = Math.random()*4 + size + 'em';
    e.style.animationDuration = 1 + duration + 'px';

    //remove
    setTimeout(function () {
        document.body.removeChild(e)
    }, 4050)

}



setInterval(function () {
    rain()
}, 20);