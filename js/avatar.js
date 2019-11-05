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
  
}

function drawEyes() {
    if ( ( (shape === "")) && (eye !== "") ){
        alert("Skin colour and gender must be chosen before eyes.")
        //eye = ""
    }
    else{
        if (eye === "Blue") {
            drawImage(eyeBlue)
        }
        else if(eye === "Green"){
            drawImage(eyeGreen)
        }
        else if(eye === "Black"){
            drawImage(eyeBlack)
        }
        else if(eye === "Grey"){
            drawImage(eyeGrey)
        }
        else if(eye === "LightBrown"){
            drawImage(eyeLightBrown)
        }
        else if(eye === "DarkBrown"){
            drawImage(eyeDarkBrown)
        }
    }
}

//copy the hair logic above to do facial hair

function drawShoulders(){
    if ( ((shape === "")) && (nose !== "") ){
        alert("Bodystyle and gender must be chosen before Shoulders.")
       // nose = ""
    }
    else{
        if(shoulders === "Green-F"){
            drawImage(shouldersGreenF)
        }
        else if(shoulders === "Green-M"){
            drawImage(shouldersGreenM)
        }
        else if(shoulders === "Grey-F"){
            drawImage(shouldersGreyF)
        }
        else if(shoulders === "Grey-M"){
            drawImage(shouldersGreyM)
        }
    }
}

function drawHair() {
    if (( (shape === "")) && ((hair != "") || (haircolor !== "")) ){
        alert("Bodystyle and gender must be chosen before hair.")
   
    }
    else
    {
        if (hair === "Nohair") {
        
        }
        else if (hair === "Quiff") {
            if (haircolor === "blonde") {
                drawImage(quiffShortBlonde)
            }
            if (haircolor === "brown") {
                drawImage(quiffShortBrown)
            }
            if (haircolor === "red") {
                drawImage(quiffShortRed)
            }
            if (haircolor === "black") {
                drawImage(quiffShortBlack)
            }
            if (haircolor === "blue") {
                drawImage(quiffShortBlue)
            }
            if (haircolor === "pink") {
                drawImage(quiffShortPink)
            }
            if (haircolor === "grey") {
                drawImage(quiffShortGrey)
            }
        }

        else if (hair === "Bob") {
            if (haircolor === "blonde") {
                drawImage(bobBlonde)
            }
            if (haircolor === "brown") {
                drawImage(bobBrown)
            }
            if (haircolor === "red") {
                drawImage(bobRed)
            }
            if (haircolor === "black") {
                drawImage(bobBlack)
            }
            if (haircolor === "blue") {
                drawImage(bobBlue)
            }
            if (haircolor === "pink") {
                drawImage(bobPink)
            }
            if (haircolor === "grey") {
                drawImage(bobGrey)
            }
        }

        else if (hair === "Bun") {
            if (haircolor === "blonde") {
                drawImage(bunBlonde)
            }
            if (haircolor === "brown") {
                drawImage(bunBrown)
            }
            if (haircolor === "red") {
                drawImage(bunRed)
            }
            if (haircolor === "black") {
                drawImage(bunBlack)
            }
            if (haircolor === "blue") {
                drawImage(bunBlue)
            }
            if (haircolor === "pink") {
                drawImage(bunPink)
            }
            if (haircolor === "grey") {
                drawImage(bunGrey)
            }
        }

        else if (hair === "Pony") {
            if (haircolor === "blonde") {
                drawImage(ponyBlonde)
            }
            if (haircolor === "brown") {
                drawImage(ponyBrown)
            }
            if (haircolor === "red") {
                drawImage(ponyRed)
            }
            if (haircolor === "black") {
                drawImage(ponyBlack)
            }
            if (haircolor === "blue") {
                drawImage(ponyBlue)
            }
            if (haircolor === "pink") {
                drawImage(ponyPink)
            }
            if (haircolor === "grey") {
                drawImage(ponyGrey)
            }
        }

        else if (hair === "Crew") {
            if (haircolor === "blonde") {
                drawImage(crewBlonde)
            }
            if (haircolor === "brown") {
                drawImage(crewBrown)
            }
            if (haircolor === "red") {
                drawImage(crewRed)
            }
            if (haircolor === "black") {
                drawImage(crewBlack)
            }
            if (haircolor === "blue") {
                drawImage(crewBlue)
            }
            if (haircolor === "pink") {
                drawImage(crewPink)
            }
            if (haircolor === "grey") {
                drawImage(crewGrey)
            }
        }

        else if (hair === "CurlyShort") {
            if (haircolor === "blonde") {
                drawImage(curlyShortBlonde)
            }
            if (haircolor === "brown") {
                drawImage(curlyShortBrown)
            }
            if (haircolor === "red") {
                drawImage(curlyShortRed)
            }
            if (haircolor === "black") {
                drawImage(curlyShortBlack)
            }
            if (haircolor === "blue") {
                drawImage(curlyShortBlue)
            }
            if (haircolor === "pink") {
                drawImage(curlyShortPink)
            }
            if (haircolor === "grey") {
                drawImage(curlyShortGrey)
            }
        }

        else if (hair === "CurlyLong") {
            if (haircolor === "blonde") {
                drawImage(curlyLongBlonde)
            }
            if (haircolor === "brown") {
                drawImage(curlyLongBrown)
            }
            if (haircolor === "red") {
                drawImage(curlyLongRed)
            }
            if (haircolor === "black") {
                drawImage(curlyLongBlack)
            }
            if (haircolor === "blue") {
                drawImage(curlyLongBlue)
            }
            if (haircolor === "pink") {
                drawImage(curlyLongPink)
            }
            if (haircolor === "grey") {
                drawImage(curlyLongGrey)
            }
        }

        else if (hair === "combOver") {
            if (haircolor === "blonde") {
                drawImage(shortSidesLongTopBlonde)
            }
            if (haircolor === "brown") {
                drawImage(shortSidesLongTopBrown)
            }
            if (haircolor === "red") {
                drawImage(shortSidesLongTopRed)
            }
            if (haircolor === "black") {
                drawImage(shortSidesLongTopBlack)
            }
            if (haircolor === "blue") {
                drawImage(shortSidesLongTopBlue)
            }
            if (haircolor === "pink") {
                drawImage(shortSidesLongTopPink)
            }
            if (haircolor === "grey") {
                drawImage(shortSidesLongTopGrey)
            }
        }


        else if (hair === "straightMedium") {
            if (haircolor === "blonde") {
                drawImage(straightMediumBlonde)
            }
            if (haircolor === "brown") {
                drawImage(straightMediumBrown)
            }
            if (haircolor === "red") {
                drawImage(straightMediumRed)
            }
            if (haircolor === "black") {
                drawImage(straightMediumBlack)
            }
            if (haircolor === "blue") {
                drawImage(straightMediumBlue)
            }
            if (haircolor === "pink") {
                drawImage(straightMediumPink)
            }
            if (haircolor === "grey") {
                drawImage(straightMediumGrey)
            }
        }
        else if (hair === "straightLong") {
            if (haircolor === "blonde") {
                drawImage(straightLongBlonde)
            }
            if (haircolor === "brown") {
                drawImage(straightLongBrown)
            }
            if (haircolor === "red") {
                drawImage(straightLongRed)
            }
            if (haircolor === "black") {
                drawImage(straightLongBlack)
            }
            if (haircolor === "blue") {
                drawImage(straightLongBlue)
            }
            if (haircolor === "pink") {
                drawImage(straightLongPink)
            }
            if (haircolor === "grey") {
                drawImage(straightLongGrey)
            }
        }
    }
}



//copy nose logic above for accessories

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
    drawBodyshape()
    drawEyes()
    drawShoulders()
    drawHair()
    drawClothing()

    //add facial hair and accessories
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
}


