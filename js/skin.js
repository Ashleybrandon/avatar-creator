var skin = ""

var radios = document.forms["formSkin"].elements["myradio"];
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        skin = this.value
        drawAvatar()
    }
}
