var myColor;

//color picker
function showColor(button){
    myColor = button.id.replace("-"," ");
    var colorName = document.getElementById("colour");

    
    //set the output
    colorName.innerHTML = myColor;
}

//set the color in words
function setColor(){

    if(myColor === undefined){
        document.getElementById("lblModalColor").innerHTML = " ";
    }else{
        document.getElementById("lblModalColor").innerHTML = myColor;
    }
   
}
