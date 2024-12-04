
const doUndoBtn = () => {
  if(todobtn.textContent === "do") {
    todobtn.textContent = "undo"
  } else if(todobtn.textContent === "undo") {
          todobtn.textContent = "do"
    }
};


async function getTodos() {
  try {
    
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    
    const data = await response.json();
    

    console.log(data);

    
    const toDoList = document.getElementById('toDoList');
    
    
    toDoList.innerHTML = '';

    
    data.forEach(todo => {
      const todoItem = document.createElement('li');
      const todobtn = document.createElement("button"); 
      const hrLine = document.createElement("hr")
      todobtn.textContent = "do";
      todoItem.textContent = `${todo.id}: ${todo.title} - ${todo.completed ? 'Completed' : 'Not completed'}`;
      toDoList.appendChild(todoItem); 
      toDoList.appendChild(hrLine)
      todoItem.appendChild(todobtn);
      todobtn.addEventListener("click", doUndoBtn);

      
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getTodos(); 











// Call the function to fetch and display the todos

  
  // 2.2 Lägg till en done-knapp under varje titel. Om todo-objektet är genomfört,
  // alltså completed: true, så ska det stå "Undo" på knappen annars "Done"
  
  // 2.3 Knappen ska kunna växla mellan "Undo" och "Done" när man trycker på den.
  // Om det står "Undo" på knappen ska titeln vara genomstruken, alltså i css:
  // text-decoration: line-through;
  // Annars ska den inte vara det.


  // 2.1 Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Skriv ut med html på skärmen titeln på alla todo-objekt som har
// userId: 1
