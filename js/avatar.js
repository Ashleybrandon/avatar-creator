//Male avatar body types
var maleApple = new Image()
maleApple.src = "img/male_apple.svg"

var maleRectangle = new Image()
maleRectangle.src = "img/male_rectangle.svg"

var maleHourglass = new Image()
maleHourglass.src = "img/male_hourglass.svg"

var malePear = new Image()
malePear.src = "img/male_pear.svg"

var maleTriangle = new Image()
maleTriangle.src = "img/male_triangle.svg"

// Female avatar body types
var femaleApple = new Image()
femaleApple.src = "img/female_apple.svg"

var femaleRectangle = new Image()
femaleRectangle.src = "img/female_rectangle.svg"

var femaleHourglass = new Image()
femaleHourglass.src = "img/female_hourglass.svg"

var femalePear = new Image()
femalePear.src = "img/female_pear.svg"

var femaleTriangle = new Image()
femaleTriangle.src = "img/female_triangle.svg"

var eyeBlue = new Image()
eyeBlue.src = "img/blue_eyes.svg"

var eye2 = ""
eye2.src = ""

function drawBodyshape() {
    if (gender === "Female") {
        if (shape === "Triangle") {
            drawImage(femaleTriangle)
        }
        else if (shape === "Pear") {
            drawImage(femalePear)
        }
        else if (shape === "Circle") {
            drawImage(femaleApple)
        }
        else if (shape === "Rectangle") {
            drawImage(femaleRectangle)
        }
        else if (shape === "Hourglass") {
            drawImage(femaleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else if (gender === "Male") {
        if (shape === "Triangle") {
            drawImage(maleTriangle)
        }
        else if (shape === "Pear") {
            drawImage(malePear)
        }
        else if (shape === "Circle") {
            drawImage(maleApple)
        }
        else if (shape === "Rectangle") {
            drawImage(maleRectangle)
        }
        else if (shape === "Hourglass") {
            drawImage(maleHourglass)
        }
        else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

function drawEyes() {
    if (eye === "Blue") {
        drawImage(eyeBlue)
    }
    else {
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
}

function drawHair() {
    if (hair === "Nohair") {

    }
    else if (hair === "Shorthair") {
        if (haircolor === hairc1) {
            drawImage()
        }
        if (haircolor === hairc2) {
            drawImage()
        }
        if (haircolor === hairc3) {
            drawImage()
        }
        if (haircolor === hairc4) {
            drawImage()
        }
        if (haircolor === hairc5) {
            drawImage()
        }
        if (haircolor === hairc6) {
            drawImage()
        }
        if (haircolor === hairc7) {
            drawImage()
        }
    }
    else if (hair === "Mediumhair") {
        if (haircolor === hairc1) {
            drawImage()
        }
        if (haircolor === hairc2) {
            drawImage()
        }
        if (haircolor === hairc3) {
            drawImage()
        }
        if (haircolor === hairc4) {
            drawImage()
        }
        if (haircolor === hairc5) {
            drawImage()
        }
        if (haircolor === hairc6) {
            drawImage()
        }
        if (haircolor === hairc7) {
            drawImage()
        }
    }
    else if (hair === "Longhair") {
        if (haircolor === hairc1) {
            drawImage()
        }
        if (haircolor === hairc2) {
            drawImage()
        }
        if (haircolor === hairc3) {
            drawImage()
        }
        if (haircolor === hairc4) {
            drawImage()
        }
        if (haircolor === hairc5) {
            drawImage()
        }
        if (haircolor === hairc6) {
            drawImage()
        }
        if (haircolor === hairc7) {
            drawImage()
        }
    }
}


function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBodyshape()
    drawEyes()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}
var eyeImage = ""