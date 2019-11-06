// var beard = ""

// var radios = document.forms["formBeard"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         beard = this.value
//         drawAvatar()
//     }
// }

var beard = ""

var radios = document.getElementById("formBeard");

radios.addEventListener("change", function(event) {
    beard = event.target.value;
    // console.log(optionEye);
    drawAvatar();
});