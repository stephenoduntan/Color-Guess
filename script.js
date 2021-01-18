const colorPicker = document.querySelector('.colorPicker');
const colorBlock = document.querySelectorAll('.colorBlock');
const message = document.querySelector('#message');
const display = document.querySelector('h1');
const menuBtn = document.querySelectorAll('.menuBar button');

let numColor = 6;
let colors = arrColor(numColor);
let pickedColor = pickColor();

colorPicker.textContent = pickedColor;

//color block loop
for(i = 0; i < colorBlock.length; i++){
    colorBlock[i].style.background = colors[i];
    colorBlock[i].addEventListener('click', function(){
        let clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            message.textContent = 'Correct!!';
            display.style.background = pickedColor;
            changeColor(clickedColor);  
        }else{
            message.textContent = 'Try Again'
            this.style.background = '#232323';
        }
    })
}

//menu button loop
for(i = 0; i < menuBtn.length; i++){
    menuBtn[i].addEventListener('click', buttonFunc)
}

function buttonFunc(e){
    //for 'new colors' button
    if(e.target.innerText === 'NEW COLORS'){
        colors = arrColor(numColor);
        for(i = 0; i < colorBlock.length; i++){
            colorBlock[i].style.background = colors[i];
        }

        pickedColor = pickColor();
        colorPicker.textContent = pickedColor;
        display.style.background = 'steelblue';
        message.textContent = '';
    }
    //for 'easy' button
    if(e.target.innerText === 'EASY'){
        numColor = 3;
        colors = arrColor(numColor);
        pickedColor = pickColor();
        for(i = 0; i < colorBlock.length; i++){
            if(colors[i]){
                colorBlock[i].style.background = colors[i];
            }else{
                colorBlock[i].style.background = 'none';
            }
        }
        for(i = 0; i < menuBtn.length; i++){
            if(menuBtn[i].classList.contains('btnBG')){
                menuBtn[i].classList.remove('btnBG')
            }
            this.classList.add('btnBG')
        }
        
        colorPicker.textContent = pickedColor;
        display.style.background = 'steelblue';
        message.textContent = '';
    }
    //for 'hard' button
    if(e.target.innerText === 'HARD'){
        numColor = 6;
        colors = arrColor(numColor);
        pickedColor = pickColor();
        for(i = 0; i < colorBlock.length; i++){
            colorBlock[i].style.background = colors[i];
        }
        for(i = 0; i < menuBtn.length; i++){
            if(menuBtn[i].classList.contains('btnBG')){
                menuBtn[i].classList.remove('btnBG')
            }
            this.classList.add('btnBG')
        }
        
        colorPicker.textContent = pickedColor;
        display.style.background = 'steelblue';
        message.textContent = '';
    }

}

//Change color of all square to right color
function changeColor(clickedColor){
    for(i = 0; i < colorBlock.length; i++){
        colorBlock[i].style.background = clickedColor;
        if(numColor === 3){
            if(colors[i]){
                colorBlock[i].style.background = clickedColor;
            }else{
                colorBlock[i].style.background = 'none';
            }
        }
    }
    return clickedColor;
}

//Random number
function random(min, max){
    const num = Math.floor(Math.random() * (max - min) + 1) + min;
    return num;
}

//Picks random color from colors array
function pickColor(){
    let select = Math.floor(Math.random() * colors.length);
    return colors[select];
}

//Specify number of array length for color array
function arrColor(num){
    let arr = [];
    for(i = 0; i < num; i++){
        let color = `rgb(${random(0, 225)}, ${random(0, 225)}, ${random(0, 225)})`; 
        arr.push(color);
    }
    return arr;
}

