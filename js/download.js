var canvas = document.getElementById("avatarCanvas");
var dlButton = document.getElementById("download");

var download_img = function (el) {
    var image = canvas.toDataURL("image/png");
    el.href = image;
};
