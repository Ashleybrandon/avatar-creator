//loads skin/face

var shape = "";

var radios = document.getElementById("formShape");

radios.addEventListener("change", function(event) {
    shape = event.target.value;
    drawAvatar();
});


//loads eyes

var eye = ""

var radios = document.getElementById("formeyes");

radios.addEventListener("change", function(event) {
    eye = event.target.value;
    drawAvatar();
});

//loads shoulders

var shoulders = ""

var radios = document.getElementById("formShoulders");

radios.addEventListener("change", function(event) {
    shoulders = event.target.value;
    drawAvatar();
});



//loads eyebrows

var eyebrows = ""

var radios = document.getElementById("eyebrowColor");

radios.addEventListener("change", function(event) {
    eyebrows = event.target.value;
    drawAvatar();
});

//loads beards

var beard = ""

var radios = document.getElementById("formBeard");

radios.addEventListener("change", function(event) {
    beard = event.target.value;
    drawAvatar();
});


//loads hair

var hair = ""

var radios = document.getElementById("formHair");

radios.addEventListener("change", function(event) {
    hair = event.target.value;
    drawAvatar();
});


var haircolor = ""

var radios = document.getElementById("formHaircolor");

radios.addEventListener("change", function(event) {
    haircolor = event.target.value;


drawAvatar();
});


//loads glasses

var glasses = ""

var radios = document.getElementById("formGlasses");

radios.addEventListener("change", function(event) {
    glasses = event.target.value;
    drawAvatar();
});

//loads accessories

var accessories = ""

var radios = document.getElementById("formAccessoriesOne");

radios.addEventListener("change", function(event) {
    accessories = event.target.value;
    drawAvatar();
});

var accessoriesTwo = ""

var radios = document.getElementById("formAccessoriesTwo");

radios.addEventListener("change", function(event) {
    accessoriesTwo = event.target.value;
    drawAvatar();
});
