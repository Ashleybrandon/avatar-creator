var skin = ""

var radios = document.forms["formSkin"].elements["myradio"];
for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = function () {
        skin = this.value
        drawAvatar()
    }
}

var skin1 = new Image()
skin1.src = "../avatar-parts/Skin/Skin 1.svg"

var skin2 = new Image()
skin2.src = "../avatar-parts/Skin/Skin 2.svg"

var skin3 = new Image()
skin3.src = "../avatar-parts/Skin/Skin 3.svg"

var skin4 = new Image()
skin4.src = "../avatar-parts/Skin/Skin 4.svg"

var skin5 = new Image()
skin5.src = "../avatar-parts/Skin/Skin 5.svg"