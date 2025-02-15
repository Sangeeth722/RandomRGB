const body = document.getElementsByTagName("body")

function changeColor(color){
    document.body.style.backgroundColor = color;
}

function randomColr(){
    random =  Math.floor(Math.random() * 255);
    red = Math.floor(Math.random() * 255);
    
    green =Math.floor(Math.random() * 255);
    
    blue = Math.floor(Math.random() * 255);
    color =  `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = color;
    

}