// 7.1 (3p) Skriv kod som lägger till 10 button element till html-sidan.
// Varje button ska innehålla en klass "primary"
// och texten "Button" + talet 1 till 10.
// Så här: <button class="primary">Button1</button> <button class="primary">Button2</button> ...
// Koden kan använda en for-loop

// 7.2 (2p) Lägg till addEventlistener på varje button.
// Vid eventet "click" på button ska klassen ändras till "secondary"







const container = document.getElementById("container");
function buttonsCreation() {
    for (let i = 1; i <= 10; i++) {
        const buttonEl = document.createElement("button");
        buttonEl.classList.add("primary")
        buttonEl.innerText = `button ${i}`;
        container.appendChild(buttonEl);

        function changingAtri(){
            buttonEl.classList = "secondary"
            console.log(buttonEl.classList)
        }

        buttonEl.addEventListener("click", changingAtri);
        console.log(buttonEl.classList)
    }
}




buttonsCreation();
