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



// var hair = ""
// var radios = document.forms["formHair"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         hair = this.value
//         drawAvatar()
//     }
// }

// var haircolor = ""
// var radios = document.forms["formHaircolor"].elements["myradio"];
// for (var i = 0; i < radios.length; i++) { 
//     radios[i].onclick = function() {
//         haircolor = this.value
//         drawAvatar()
//     }
// }




