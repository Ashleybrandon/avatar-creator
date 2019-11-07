
function drawBodyshape() {
        if (shape === "Triangle") {
             drawImage(femaleTriangle) + drawImage(straightLongBrown);
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
    if ( ((shape === "")) && (eye !== "") ){
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
    if (haircolor === "Blonde" && hair === "Quiff") {
        drawImage(quiffShortBlonde);
    }
    else if (haircolor === "Blonde" && hair === "Bob") {
        drawImage(bobBlonde);
    }
    else if (haircolor === "Blonde" && hair === "Bun") {
        drawImage(bunBlonde);
    }
    else if (haircolor === "Blonde" && hair === "Pony") {
        drawImage(ponyBlonde);
    }
    else if (haircolor === "Blonde" && hair === "Crew") {
        drawImage(crewBlonde);
    }
  
    else if (haircolor === "Blonde" && hair === "CurlyShort") {
        drawImage(curlyShortBlonde);
    }
    else if (haircolor === "Blonde" && hair === "CurlyLong") {
        drawImage(curlyLongBlonde);
    }
    else if (haircolor === "Blonde" && hair === "combOver") {
        drawImage(shortSidesLongTopBlonde);
    }
    else if (haircolor === "Blonde" && hair === "straightMedium") {
        drawImage(straightMediumBlonde);
    }
    else if (haircolor === "Blonde" && hair === "straightMedium") {
        drawImage(straightMediumBlonde);
    }
    else if (haircolor === "Blonde" && hair === "straightLong") {
        drawImage(straightLongBlonde);
    }
    else if (haircolor === "Brown" && hair === "Quiff") {
        drawImage(quiffShortBrown);
    }
    else if (haircolor === "Brown" && hair === "Bob") {
        drawImage(bobBrown);
    }
    else if (haircolor === "Brown" && hair === "Bun") {
        drawImage(bunBrown);
    }
    else if (haircolor === "Brown" && hair === "Pony") {
        drawImage(ponyBrown);
    }
    else if (haircolor === "Brown" && hair === "Crew") {
        drawImage(crewBrown);
    }

    else if (haircolor === "Brown" && hair === "CurlyShort") {
        drawImage(curlyShortBrown);
    }
    else if (haircolor === "Brown" && hair === "CurlyLong") {
        drawImage(curlyLongBrown);
    }
    else if (haircolor === "Brown" && hair === "combOver") {
        drawImage(shortSidesLongTopBrown);
    }
    else if (haircolor === "Brown" && hair === "straightMedium") {
        drawImage(straightMediumBrown);
    }
    else if (haircolor === "Brown" && hair === "straightMedium") {
        drawImage(straightMediumBrown);
    }
    else if (haircolor === "Brown" && hair === "straightLong") {
        drawImage(straightLongBrown);
    }

    else if (haircolor === "Red" && hair === "Quiff") {
        drawImage(quiffShortRed);
    }
    else if (haircolor === "Red" && hair === "Bob") {
        drawImage(bobRed);
    }
    else if (haircolor === "Red" && hair === "Bun") {
        drawImage(bunRed);
    }
    else if (haircolor === "Red" && hair === "Pony") {
        drawImage(ponyRed);
    }
    else if (haircolor === "Red" && hair === "Crew") {
        drawImage(crewRed);
    }

    else if (haircolor === "Red" && hair === "CurlyShort") {
        drawImage(curlyShortRed);
    }
    else if (haircolor === "Red" && hair === "CurlyLong") {
        drawImage(curlyLongRed);
    }
    else if (haircolor === "Red" && hair === "combOver") {
        drawImage(shortSidesLongTopRed);
    }
    else if (haircolor === "Red" && hair === "straightMedium") {
        drawImage(straightMediumRed);
    }
    else if (haircolor === "Red" && hair === "straightMedium") {
        drawImage(straightMediumRed);
    }
    else if (haircolor === "Red" && hair === "straightLong") {
        drawImage(straightLongRed);
    }

    else if (haircolor === "Black" && hair === "Quiff") {
        drawImage(quiffShortBlack);
    }
    else if (haircolor === "Black" && hair === "Bob") {
        drawImage(bobBlack);
    }
    else if (haircolor === "Black" && hair === "Bun") {
        drawImage(bunBlack);
    }
    else if (haircolor === "Black" && hair === "Pony") {
        drawImage(ponyBlack);
    }
    else if (haircolor === "Black" && hair === "Crew") {
        drawImage(crewBlack);
    }

    else if (haircolor === "Black" && hair === "CurlyShort") {
        drawImage(curlyShortBlack);
    }
    else if (haircolor === "Black" && hair === "CurlyLong") {
        drawImage(curlyLongBlack);
    }
    else if (haircolor === "Black" && hair === "combOver") {
        drawImage(shortSidesLongTopBlack);
    }
    else if (haircolor === "Black" && hair === "straightMedium") {
        drawImage(straightMediumBlack);
    }
    else if (haircolor === "Black" && hair === "straightMedium") {
        drawImage(straightMediumBlack);
    }
    else if (haircolor === "Black" && hair === "straightLong") {
        drawImage(straightLongBlack);
    }

    else if (haircolor === "Blue" && hair === "Quiff") {
        drawImage(quiffShortBlue);
    }
    else if (haircolor === "Blue" && hair === "Bob") {
        drawImage(bobBlue);
    }
    else if (haircolor === "Blue" && hair === "Bun") {
        drawImage(bunBlue);
    }
    else if (haircolor === "Blue" && hair === "Pony") {
        drawImage(ponyBlue);
    }
    else if (haircolor === "Blue" && hair === "Crew") {
        drawImage(crewBlue);
    }

    else if (haircolor === "Blue" && hair === "CurlyShort") {
        drawImage(curlyShortBlue);
    }
    else if (haircolor === "Blue" && hair === "CurlyLong") {
        drawImage(curlyLongBlue);
    }
    else if (haircolor === "Blue" && hair === "combOver") {
        drawImage(shortSidesLongTopBlue);
    }
    else if (haircolor === "Blue" && hair === "straightMedium") {
        drawImage(straightMediumBlue);
    }
    else if (haircolor === "Blue" && hair === "straightMedium") {
        drawImage(straightMediumBlue);
    }
    else if (haircolor === "Blue" && hair === "straightLong") {
        drawImage(straightLongBlue);
    }

    else if (haircolor === "Pink" && hair === "Quiff") {
        drawImage(quiffShortPink);
    }
    else if (haircolor === "Pink" && hair === "Bob") {
        drawImage(bobPink);
    }
    else if (haircolor === "Pink" && hair === "Bun") {
        drawImage(bunPink);
    }
    else if (haircolor === "Pink" && hair === "Pony") {
        drawImage(ponyPink);
    }
    else if (haircolor === "Pink" && hair === "Crew") {
        drawImage(crewPink);
    }

    else if (haircolor === "Pink" && hair === "CurlyShort") {
        drawImage(curlyShortPink);
    }
    else if (haircolor === "Pink" && hair === "CurlyLong") {
        drawImage(curlyLongPink);
    }
    else if (haircolor === "Pink" && hair === "combOver") {
        drawImage(shortSidesLongTopPink);
    }
    else if (haircolor === "Pink" && hair === "straightMedium") {
        drawImage(straightMediumPink);
    }
    else if (haircolor === "Pink" && hair === "straightMedium") {
        drawImage(straightMediumPink);
    }
    else if (haircolor === "Pink" && hair === "straightLong") {
        drawImage(straightLongPink);
    }

    else if (haircolor === "Grey" && hair === "Quiff") {
        drawImage(quiffShortGrey);
    }
    else if (haircolor === "Grey" && hair === "Bob") {
        drawImage(bobGrey);
    }
    else if (haircolor === "Grey" && hair === "Bun") {
        drawImage(bunGrey);
    }
    else if (haircolor === "Grey" && hair === "Pony") {
        drawImage(ponyGrey);
    }
    else if (haircolor === "Grey" && hair === "Crew") {
        drawImage(crewGrey);
    }

    else if (haircolor === "Grey" && hair === "CurlyShort") {
        drawImage(curlyShortGrey);
    }
    else if (haircolor === "Grey" && hair === "CurlyLong") {
        drawImage(curlyLongGrey);
    }
    else if (haircolor === "Grey" && hair === "combOver") {
        drawImage(shortSidesLongTopGrey);
    }
    else if (haircolor === "Grey" && hair === "straightMedium") {
        drawImage(straightMediumGrey);
    }
    else if (haircolor === "Grey" && hair === "straightMedium") {
        drawImage(straightMediumGrey);
    }
    else if (haircolor === "Grey" && hair === "straightLong") {
        drawImage(straightLongGrey);
    }
}


function drawEyebrows(){
    if(eyebrows === "blondeEyebrows"){
        drawImage(eyebrowsBlonde)
    }
    else if(eyebrows === "brownEyebrows"){
        drawImage(eyebrowsBrown)
    }
    else if(eyebrows === "redEyebrows"){
        drawImage(eyebrowsRed)
    }
    else if(eyebrows === "blackEyebrows"){
        drawImage(eyebrowsBlack)
    }
    else if(eyebrows === "blueEyebrows"){
        drawImage(eyebrowsBlue)
    }
    else if(eyebrows === "pinkEyebrows"){
        drawImage(eyebrowsPink)
    }
    else if(eyebrows === "greyEyebrows"){
        drawImage(eyebrowsGrey)
    }
}

function drawBeard(){
    if (beard === "noBeard") {
         
    }

    else if(beard === "shortBeardBlonde"){
        drawImage(shortBeardBlonde)
    }
    else if(beard === "shortBeardBrown"){
        drawImage(shortBeardBrown)
    }
    else if(beard === "shortBeardRed"){
        drawImage(shortBeardRed)
    }
    else if(beard === "shortBeardBlack"){
        drawImage(shortBeardBlack)
    }
    else if(beard === "shortBeardGrey"){
        drawImage(shortBeardGrey)
    }
    else if(beard === "longBeardBlonde"){
        drawImage(longBeardBlonde)
    }
    else if(beard === "longBeardBrown"){
        drawImage(longBeardBrown)
    }
    else if(beard === "longBeardRed"){
        drawImage(longBeardRed)
    }
    else if(beard === "longBeardBlack"){
        drawImage(longBeardBlack)
    }
    else if(beard === "longBeardGrey"){
        drawImage(longBeardGrey)
    }
}

function drawAccessories(){
    if(accessories === "eyeLashes"){
        drawImage(eyeLashes)
    }
    else if(accessories === "freckles"){
        drawImage(freckles)
    }
    else if(accessories === "glassesRound"){
        drawImage(glassesRound)
    }
    else if(accessories === "glassesSquare"){
        drawImage(glassesSquare)
    }
    else if(accessories === "goldEarrings"){
        drawImage(goldEarrings)
    }
    else if(accessories === "silverEarrings"){
        drawImage(silverEarrings)
    }
    else if(accessories === "hijab"){
        drawImage(hijab)
    }
    else if(accessories === "Headset"){
        drawImage(Headset)
    }
}


// function drawClothing() {
//     g = clothing[gender]
//     if (g != undefined) {
//         s = g[shape]
//         if (s != undefined) {
//             img = s[clothes]
//             if (img != undefined) {
//                 drawImage(img)
//             }
//         }
//     }
// }



function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    drawBodyshape()
    drawEyes()
    drawShoulders()
    drawHair()
    drawEyebrows()
    drawBeard()
    drawAccessories()
}

function drawImage(image) {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
} 


