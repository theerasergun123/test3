function boldit(){
    document.getElementById("text").style.fontWeight = "bold";

}

function italicit(){
    document.getElementById("text").style.fontStyle = "italic";
}

function underit(){
    document.getElementById("text").style.textDecoration = "underline";

}

function backbitch(){
    document.getElementById("text").style.textDecoration = "none";
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.fontFamily = "Arial";
    document.getElementById("text").style.fontStyle = "normal";
    document.getElementById("text").style.fontSize = "16px";
    document.getElementById("text").style.color ="black";
    document.getElementById("colorChanger").value ="Change Color";
    document.getElementById("fonts").value = "Fonts";
    document.getElementById("sizes").value = "Font Size";




}

function getSelectValue()
{
    var selectedSize = document.getElementById("sizes").value;
    
    document.getElementById("text").style.fontSize = selectedSize + "px";
}

function getSelectValueTwo(){
var selectedFont = document.getElementById("fonts").value;

document.getElementById("text").style.fontFamily = selectedFont;
}

function colorIt(){
var selectedColor = document.getElementById("colorChanger").value;

document.getElementById("text").style.color = selectedColor;

}

