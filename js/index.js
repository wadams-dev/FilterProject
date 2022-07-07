function blueFilter() {
  var checkbox = document.getElementById("blueColor");
  var text = document.getElementsByClassName("blue-item");
  var items = document.getElementsByClassName("item");

  if (checkbox.checked == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = "inline-block";
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "inline-block";
    }
  }
}

function yellowFilter() {
  var checkbox = document.getElementById("yellowColor");
  var text = document.getElementsByClassName("yellow-item");
  var items = document.getElementsByClassName("item");

  if (checkbox.checked == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = "inline-block";
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "inline-block";
    }
  }
}

function greenFilter() {
  var checkbox = document.getElementById("greenColor");
  var text = document.getElementsByClassName("green-item");
  var items = document.getElementsByClassName("item");

  if (checkbox.checked == true) {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = "inline-block";
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = "inline-block";
    }
  }
}
