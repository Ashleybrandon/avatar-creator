var shape = ""

var radios = document.forms["formShape"].elements["myradio"];
for (var i = 0; i < radios.length; i++) { 
    radios[i].onclick = function() {
        shape = this.value
            drawAvatar()
    }
}

// var radios = document.getElementById("formShape").options;
// function testFunc(radios) {
//     var shape = ""

//     for (var i = 0; i < radios.length; i++) { 
//         radios[i] = function() {
//             shape = this.value
//                 drawAvatar()
//         }
//     }
// }
// console.log(radios);