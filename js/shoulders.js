// var shoulders = ""

// var radios = document.forms["formShoulders"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         shoulders = this.value
//         drawAvatar()
//     }
// }

var shoulders = ""

var radios = document.getElementById("formShoulders");

radios.addEventListener("change", function(event) {
    shoulders = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});







