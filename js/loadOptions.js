//loads skin/face

var skin = "";

var optionOne = document.getElementById("formSkin");

optionOne.addEventListener("change", function(event) {
    skin = event.target.value;
    drawAvatar();
});


//loads eyes

var eye = ""

var optionTwo = document.getElementById("formeyes");

optionTwo.addEventListener("change", function(event) {
    eye = event.target.value;
    drawAvatar();
    console.log('eye event listener');
});

//loads shoulders

var shoulders = ""

var optionThree = document.getElementById("formShoulders");

optionThree.addEventListener("change", function(event) {
    shoulders = event.target.value;
    drawAvatar();
});

//loads eyebrows

var eyebrows = ""

var optionFour = document.getElementById("eyebrowColor");

optionFour.addEventListener("change", function(event) {
    eyebrows = event.target.value;
    drawAvatar();
});

//loads beards

var beard = ""

var optionFive = document.getElementById("formBeard");

optionFive.addEventListener("change", function(event) {
    beard = event.target.value;
    drawAvatar();
});


//loads hair

var hair = ""

var optionSix = document.getElementById("formHair");

optionSix.addEventListener("change", function(event) {
    hair = event.target.value;
    drawAvatar();
});


var haircolor = ""

var optionSeven = document.getElementById("formHaircolor");

optionSeven.addEventListener("change", function(event) {
    haircolor = event.target.value;


drawAvatar();
});


//loads glasses

var glasses = ""

var option = document.getElementById("formGlasses");

option.addEventListener("change", function(event) {
    glasses = event.target.value;
    drawAvatar();
});

//loads accessories

var accessories = ""

var option = document.getElementById("formAccessoriesOne");

option.addEventListener("change", function(event) {
    accessories = event.target.value;
    drawAvatar();
});

var accessoriesTwo = ""

var option = document.getElementById("formAccessoriesTwo");

option.addEventListener("change", function(event) {
    accessoriesTwo = event.target.value;
    drawAvatar();
});
