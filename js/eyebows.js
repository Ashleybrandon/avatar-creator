// var eyebrows = ""

// var radios = document.forms["eyebrowColor"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         eyebrows = this.value
//         drawAvatar()
//     }
// }

var eyebrows = ""

var radios = document.getElementById("eyebrowColor");

radios.addEventListener("change", function(event) {
    eyebrows = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});







