/*Object that includes array*/

var accessories = ""

var information = {
    accessories: []
  }
  
  /*Function*/
  function letter(ev) {
    if (ev.target.checked) {
      information.accessories.push(ev.target.value);
    } else {
      var index = information.accessories.indexOf(ev.target.value); 
      if (index !== -1){
        information.accessories.splice(index, 1);
      }
    }
        accessories = this.value;
        drawAvatar()
    
  }
  
  /*Event Listener*/

  var box = document.getElementsByName("myCheck");
  if (box[0].addEventListener) {
  console.log("here 1");
    for (var i = 0; i < box.length; i++) {
      box[i].addEventListener("change", letter, false);
    }
  } else if (box[0].attachEvent) {
  console.log("here 2");
    for (var i = 0; i < box.length; i++) {
      box[i].attachEvent("onchange", letter);
    }
  }