let display = document.getElementById('display')
// console.log(display);
let btns = document.querySelectorAll(".button")

btns.forEach(function(btn){
    btn.addEventListener("click",function(dets){
        switch(dets.target.innerText){
            case 'C':
                display.innerText = ""
                break;
            case '<':
              if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
              }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText="Error"
                }
                break;
            default:
                display.innerText+= dets.target.innerText
        }
    })
})