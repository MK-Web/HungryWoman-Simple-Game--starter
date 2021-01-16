 function isTouching(a,b) {
     const aRect = a.getBoundingClientRect();
     const bRect = b.getBoundingClientRect();

 return ! (
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  
 );
}


const avatar = document.querySelector('#player');
const Burger = document.querySelector('#burger');


window.addEventListener('keyup',function(e) {
    if(e.key === 'ArrowDown' || e.key === "Down") {
        moveVertical(avatar,50)
        
    } else if (e.key === "ArrowUp" || e.key ==='Up') {
        moveVertical(avatar,-50)
        
    } else if (e.key ==="ArrowRight" || e.key==="Right"){
         moveHorizontal(avatar,50);
         avatar.style.transform = 'scale(1,1)'
    } else if (e.key ==="ArrowLeft" || e.key==="Left"){
        moveHorizontal(avatar,-50);
        avatar.style.transform = 'scale(-1,1)'
    }
   
   if (isTouching(avatar,Burger)) moveBurger ();
});
const moveVertical = (element,amount) =>{
    const currTop= extractPosition(element.style.top);
    element.style.top =`${currTop+amount}px`
}

const moveHorizontal = (element,amount) =>{
    const currLeft= extractPosition(element.style.left);
    element.style.left =`${currLeft+amount}px`
}

const extractPosition = (position) => {
    if (!position) return 100;
    return parseInt(position.slice(0,-2));
}

const moveBurger = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    Burger.style.top= `${y}px`;
    Burger.style.left= `${x}px`;
};

moveBurger();