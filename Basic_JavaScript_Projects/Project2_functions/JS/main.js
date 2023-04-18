function myFunction() {
    var str = "This text is orange!";
    var result = str.fontcolor("orange");
    document.getElementById("Blue_Text").innerHTML = result;
}

function changeColor(newColor) {   //This utilizes the paragraph element
    var elem = document.getElementById('Green_text');
    elem.style.color = newColor;
}

function My_Function() {            //This is the concatenate string
    var sentence = "I am learning";
    sentence += " a lot from this JavaScrip course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
