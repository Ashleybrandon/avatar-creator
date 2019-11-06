// var eye = ""

// var radios = document.forms["formeyes"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         eye = this.value
//         drawAvatar()
//     }
// }


// var eye = ""

// var radios = document.getElementById("formeyes").options;

// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function(el) {
//         alert(1);
//         eye = this.value
//         drawAvatar()
//     }
// }

// console.log(radios);


var eye = ""

var radios = document.getElementById("formeyes");

radios.addEventListener("change", function(event) {
    eye = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});