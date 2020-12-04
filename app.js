function randomRGB(){
    const r= Math.round(Math.random()*256);
    const g= Math.round(Math.random()*256);
    const b= Math.round(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}

const letters=document.querySelectorAll('.letter');
const delay=700;
const intervalId=setInterval(function(){
    for (let letter of letters){
        letter.style.color=randomRGB();
    }
},delay)