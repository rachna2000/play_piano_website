window.addEventListener('load',()=>{
    const sound= document.querySelectorAll('.sound')
    const pads= document.querySelectorAll('.pads div')
    const visual =document.querySelector('.visual')
    const colors=[
        "lightgreen",
        "rgb(197, 64, 64)",
        "royalblue",
        "rgb(245, 245, 100)",
        "rgb(220, 65, 225)",
        "rgb(100, 245, 189)"
    ]
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',()=>{
            sound[index].currentTime=0;
            sound[index].play()
            createbubble(index)
        });
    });
    const createbubble=(index)=>{
        const bubble = document.createElement("div")
        visual.appendChild(bubble)
        bubble.style.backgroundColor=colors[index]
        bubble.style.animation='jump 1s ease'
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this)
        })
    }
});
