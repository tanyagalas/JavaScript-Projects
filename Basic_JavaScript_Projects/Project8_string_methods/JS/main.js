function concatenate() {
    var part1 = "Red";
    var part2 = "blue";
    var part3 = "yellow";
    var wholeSentence = part1.concat(", ", part2, ", and ", part3);
    document.getElementById("concatenation").innerHTML = wholeSentence;
}

function slice() {
    var sentence = "The quick brown fox jumps over";
    var section = sentence.slice(16, 19);
    document.getElementById("slicing").innerHTML = section;
}

function toString() {
    var num = 123;
    document.getElementById("toString").innerHTML = num.toString();
}

function toPrecision() {
    var num = 3.14159265359;
    document.getElementById("toPrecision").innerHTML = num.toPrecision(4);
}