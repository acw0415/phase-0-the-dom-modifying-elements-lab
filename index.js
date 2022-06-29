// Write your code here!
const elem = document.querySelector('body');
elem.removeChild(main);
const newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory")
const text = document.createTextNode("<h1>YOUR-NAME is the champion!</h1>");
newHeader.appendChild(text);
document.getElementById('h1').id = 'victory'