// 6. (2p) Skriv klart funktionen addBgColor.
// addBgColor tar in ett DOM-element och en färg-kod,
// addBgColor ska uppdatera elementets style med färgkoden.
// tips: använd elementets style
const element = document.querySelector("#myElement");

function addBgColor(element, bgColor) {

   element.style.color = bgColor;
  // lägg till din kod här
}




addBgColor(element, "green")
addBgColor(element, "Blue")
