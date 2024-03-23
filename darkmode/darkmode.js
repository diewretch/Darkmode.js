document.addEventListener('DOMContentLoaded', function() {
    let mode = "ninja";
    let color = "ghostWhite";
    let image = "/img/light-icon.png";
    let label = "Light Mode";
    const bodyElement = document.body;
    const modeIcon = document.getElementById("modeIcon");
    const modeLabel = document.getElementById("modeLabel");

    switch (mode) {
        case "dark":
            bodyElement.className = "dark-mode";
            image = "/img/dark-icon.png";
            label = "Dark Mode";
            break;
        case "light":
            bodyElement.className = "light-mode";
            image = "/img/light-icon.png";
            label = "Light Mode";
            break;
    case
     bodyElement = "ninja-mode":
     image = "/img/ninja-icon.png";
     label = "Ninja Mode";
    break;
  default:

   break; 
 } 

 document.body.style.backgroundColor = color;
document.getElementById('modeIcon').src = image
document.getElementById('toggleModBtn').textContent = label; })
