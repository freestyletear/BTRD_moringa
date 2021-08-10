// Menu Hero Section
var navLinks = document.getElementById("navLinks");
var menuButton = document.getElementById("menuButton")
var closeButton = document.getElementById("closeButton")

function  showMenu(){
    navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-300px";
}
$(document).ready(function () {
  $("#menuButton").click(function () {
    menuButton.style.backgroundColor = "rgb(0,0,0,0.9)";
    menuButton.style.paddingBottom = "1250px";
    menuButton.style.paddingLeft = "1140px";
    menuButton.style.position = "absolute";
    menuButton.style.marginLeft = "-67px";
    menuButton.style.zIndex = "1";
    closeButton.style.display = "block";
  })
  $("#closeButton").click(function () {
    menuButton.style.backgroundColor = "transparent";
    menuButton.style.paddingBottom = "0";
    menuButton.style.paddingLeft = "0";
    menuButton.style.marginLeft = "83.8%";
    closeButton.style.display = "none";
  })
})
