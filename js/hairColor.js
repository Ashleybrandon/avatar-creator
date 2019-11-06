var haircolor = ""

var radios = document.getElementById("formHaircolor");

radios.addEventListener("change", function(event) {
    haircolor = event.target.value;
    console.log(haircolor);
    drawAvatar();
});