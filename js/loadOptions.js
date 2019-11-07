//initial state


var shape = ""

document.addEventListener("DOMContentLoaded", function() {
  

    console.log(ctx);
    // drawImage(femaleApple)
    // drawImage(eyeBlack)
    // drawImage(quiffShortGrey)
//     var apple = drawImage(femaleApple);
// console.log(apple);
shape = femaleApple;
drawAvatar(ctx.femaleApple);
  });



//loads skin color


var radios = document.getElementById("formShape");

radios.addEventListener("change", function(event) {
    shape = event.target.value;
    // console.log(optionEye);
    console.log(event.target.value);
    drawAvatar();
});


//loads eyes

var eye = ""

var radios = document.getElementById("formeyes");

radios.addEventListener("change", function(event) {
    eye = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});

//loads shoulders

var shoulders = ""

var radios = document.getElementById("formShoulders");

radios.addEventListener("change", function(event) {
    shoulders = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});


// loads hair

var hair = ""

var radios = document.getElementById("formHair");

radios.addEventListener("change", function(event) {
    hair = event.target.value;
    console.log(hair);
    drawAvatar();
});


var haircolor = ""

var radios = document.getElementById("formHaircolor");

radios.addEventListener("change", function(event) {
    haircolor = event.target.value;
    console.log(haircolor);
    drawAvatar();
});


//loads eyebrows

var eyebrows = ""

var radios = document.getElementById("eyebrowColor");

radios.addEventListener("change", function(event) {
    eyebrows = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});

//loads beards

var beard = ""

var radios = document.getElementById("formBeard");

radios.addEventListener("change", function(event) {
    beard = event.target.value;
    // console.log(optionEye);
    
    drawAvatar();
});



