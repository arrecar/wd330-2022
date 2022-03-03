const squareElement = document.getElementById('square');
let angle = 0;

setInterval( () => {
    angle = (angle + 2) % 360;
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);


function rotate() {
    angle = (angle + 2)%360;
    squareElement.style.transform = `rotate(${angle}deg)`
    window.requestAnimationFrame(rotate);
}

const id = requestAnimationFrame(rotate);

cancelAnimationFrame(id);

function showhost(){
    let x = window.location.host;
    document.getElementById("host").innerHTML = x;
}

function  back(){
    window.history.go(-1);
}

function popUp(){
    window.open('https://sitepoint.com','SitePoint','width=400,height=400,resizable=yes');
}