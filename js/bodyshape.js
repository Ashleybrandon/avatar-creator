var femaleImage = new Image()
femaleImage.src = "img/female.svg"

function drawFemale() {
    console.log("draw female")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(femaleImage, 0, 0, 300, 500)
}


var radios = document.forms["formA"].elements["myradio"];
for (var r of radios){
    r.onclick = function() {
        if(this.value ==="Triangle"){
            drawFemale()
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        

    }
}