var optionEye = ""

var radios = document.getElementById("formeyes");

radios.addEventListener("change", function(event) {
    optionEye = event.target.value;
    console.log(optionEye);
    drawAvatar();
});


// var optionEye = ""

// var radios = document.getElementById("formeyes").options;

// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onchange = function() {
//         optionEye = this.value
//         console.log(optionEye);
//         drawAvatar()
//     }
// }
