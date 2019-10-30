function drawSkin() {
    if (skin === "Skin1") {
        drawImage(skin1)

    } else if (skin === "Skin2") {
        drawImage(skin2)

    } else if (skin === "Skin3") {
        drawImage(skin3)

    } else if (skin === "Skin4") {
        drawImage(skin4)

    } else if (skin === "Skin5") {
        drawImage(skin5)
        
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

function drawBodyshape() {
        if (shape === "Triangle") {
            drawImage(femaleTriangle)
        }
        else if (shape === "Pear") {
            drawImage(femalePear)
        }
        else if (shape === "Apple") {
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
 
    // else if (gender === "Male") {
    //     if (shape === "Triangle") {
    //         drawImage(maleTriangle)
    //         console.log(maleTriangle)
    //     }
    //     else if (shape === "Pear") {
    //         drawImage(malePear)
    //     }
    //     else if (shape === "Apple") {
    //         drawImage(maleApple)
    //     }
    //     else if (shape === "Rectangle") {
    //         drawImage(maleRectangle)
    //     }
    //     else if (shape === "Hourglass") {
    //         drawImage(maleHourglass)
    //     }
    //     else {
    //         ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     }
    // }
 
}

function drawEyes() {
    if ( ((gender === "") || (shape === "")) && (eye !== "") ){
        alert("Bodystyle and gender must be chosen before eyes.")
        //eye = ""
    }
    else{
        if (eye === "Blue") {
            drawImage(eyeBlue)
        }
        else if(eye === "Green"){
            drawImage(eyeGreen)
        }
        else if(eye === "Brown"){
            drawImage(eyeBrown)
        }
        else if(eye === "Ogre"){
            drawImage(eyeOgre)
        }
    }
}

function drawHair() {
    if (( (gender === "") || (shape === "")) && ((hair != "") || (haircolor !== "")) ){
        alert("Bodystyle and gender must be chosen before hair.")
       // hair = ""
      //  haircolor = ""
    }
    else
    {
        if (hair === "Nohair") {
        
        }
        else if (hair === "Shorthair") {
            if (haircolor === "blonde") {
                drawImage(shortBlonde)
            }
            if (haircolor === "brown") {
                drawImage(shortBrown)
            }
            if (haircolor === "red") {
                drawImage(shortRed)
            }
            if (haircolor === "black") {
                drawImage(shortBlack)
            }
            if (haircolor === "blue") {
                drawImage(shortBlue)
            }
            if (haircolor === "pink") {
                drawImage(shortPink)
            }
            if (haircolor === "green") {
                drawImage(shortGreen)
            }
        }
        else if (hair === "Mediumhair") {
            if (haircolor === "blonde") {
                drawImage(mediumBlonde)
            }
            if (haircolor === "brown") {
                drawImage(mediumBrown)
            }
            if (haircolor === "red") {
                drawImage(mediumRed)
            }
            if (haircolor === "black") {
                drawImage(mediumBlack)
            }
            if (haircolor === "blue") {
                drawImage(mediumBlue)
            }
            if (haircolor === "pink") {
                drawImage(mediumPink)
            }
            if (haircolor === "green") {
                drawImage(mediumGreen)
            }
        }
        else if (hair === "Longhair") {
            if (haircolor === "blonde") {
                drawImage(longBlonde)
            }
            if (haircolor === "brown") {
                drawImage(longBrown)
            }
            if (haircolor === "red") {
                drawImage(longRed)
            }
            if (haircolor === "black") {
                drawImage(longBlack)
            }
            if (haircolor === "blue") {
                drawImage(longBlue)
            }
            if (haircolor === "pink") {
                drawImage(longPink)
            }
            if (haircolor === "green") {
                drawImage(longGreen)
            }
        }
    }
}
function drawNose(){
    if ( ((gender === "") || (shape === "")) && (nose !== "") ){
        alert("Bodystyle and gender must be chosen before nose.")
       // nose = ""
    }
    else{
        if(nose === "Flat"){
            drawImage(noseFlat)
        }
        else if(nose === "Triangle"){
            drawImage(noseTriangle)
        }
    }
}

function drawClothing() {
    g = clothing[gender]
    if (g != undefined) {
        s = g[shape]
        if (s != undefined) {
            img = s[clothes]
            if (img != undefined) {
                drawImage(img)
            }
        }
    }
}



function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSkin()
    drawBodyshape()
    drawEyes()
    drawNose()
    drawHair()
    drawClothing()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}


