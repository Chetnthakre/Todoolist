const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

const addTodo = ()=> {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0) {
        alert("You must write something in your to do");
    }

    //Creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);
    

    //creating Edit btn
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn", "editBtn");
    li.appendChild(editBtn); 

    //creating delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    deleteBtn.classList.add("btn", "deleteBtn");
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = ""; 
}

const updateTodo = (e)=> {
  
    if(e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
    }
}


addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);

