# MWAD-EX_03-To-Do-List-using-JavaScript
## Date:

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do App</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>To-Do App</h1>
            <p>Manage your tasks efficiently</p>
        </header>
        
        <form class="todo-form">
            <input type="text" class="todo-input" placeholder="Add a new task...">
            <button class="todo-button" type="submit">Add</button>
        </form>
        
        <div class="filter-container">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
            <button class="filter-btn" data-filter="uncompleted">Uncompleted</button>
        </div>
        
        <div class="todo-container">
            <ul class="todo-list">
    
            </ul>
        </div>
        
        <button class="clear-btn">Clear All</button>
    </div>
   <script src="./script.js"></script>
</body>
</html>
```
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Container */
.container {
    width: 100%;
    max-width: 600px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-top: 20px;
}

/* Header */
header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    color: #3498db;
    font-size: 32px;
    margin-bottom: 10px;
}

header p {
    color: #777;
    font-size: 16px;
}

/* Form styling */
.todo-form {
    display: flex;
    margin-bottom: 20px;
}

.todo-input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    font-size: 16px;
}

.todo-input:focus {
    outline: none;
    border-color: #3498db;
}

.todo-button {
    padding: 12px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.todo-button:hover {
    background-color: #2980b9;
}


.todo-container {
    margin-top: 20px;
}

.todo-list {
    list-style: none;
}

.todo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.todo-item {
    flex: 1;
    padding: 0 10px;
    font-size: 16px;
}

.completed {
    text-decoration: line-through;
    opacity: 0.6;
}

/* Buttons */
.todo-buttons {
    display: flex;
}

.complete-btn, .delete-btn, .edit-btn {
    padding: 8px 12px;
    margin-left: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
}

.complete-btn {
    background-color: #2ecc71;
    color: white;
}

.complete-btn:hover {
    background-color: #27ae60;
}

.delete-btn {
    background-color: #e74c3c;
    color: white;
}

.delete-btn:hover {
    background-color: #c0392b;
}

.edit-btn {
    background-color: #f39c12;
    color: white;
}

.edit-btn:hover {
    background-color: #d35400;
}

/* Filter */
.filter-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.filter-btn {
    padding: 8px 15px;
    margin: 0 5px;
    border: none;
    border-radius: 4px;
    background-color: #ecf0f1;
    color: #555;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn.active {
    background-color: #3498db;
    color: white;
}

/* Clear All Button */
.clear-btn {
    display: block;
    width: 100%;
    padding: 12px 20px;
    margin-top: 20px;
    background-color: #95a5a6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.clear-btn:hover {
    background-color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        width: 95%;
    }
}

@media (max-width: 480px) {
    .todo-form {
        flex-direction: column;
    }
    
    .todo-input {
        border-radius: 4px;
        margin-bottom: 10px;
    }
    
    .todo-button {
        border-radius: 4px;
        width: 100%;
    }
    
    .todo {
        flex-direction: column;
    }
    
    .todo-item {
        margin-bottom: 10px;
        text-align: center;
    }
    
    .todo-buttons {
        width: 100%;
        justify-content: center;
    }
}
```
```js


const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.querySelector('.clear-btn');


document.addEventListener('DOMContentLoaded', getTodos);
todoForm.addEventListener('submit', addTodo);
todoList.addEventListener('click', handleTodoActions);
filterBtns.forEach(btn => btn.addEventListener('click', filterTodos));
clearBtn.addEventListener('click', clearTodos);


function addTodo(e) {
   
    e.preventDefault();
    
    const todoText = todoInput.value.trim();
   
    if (todoText !== '') {
       
        const todo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };
        
     
        saveLocalTodos(todo);
        
        createTodoElement(todo);
        
        todoInput.value = '';
    }
}

function createTodoElement(todo) {
  
    const todoDiv = document.createElement('li');
    todoDiv.classList.add('todo');
    todoDiv.dataset.id = todo.id;
    
    if (todo.completed) {
        todoDiv.classList.add('completed');
    }
    
 
    const todoItem = document.createElement('span');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todo.text;
    todoDiv.appendChild(todoItem);
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('todo-buttons');
    
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Complete';
    buttonsDiv.appendChild(completeBtn);
   
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';
    buttonsDiv.appendChild(editBtn);
   
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    buttonsDiv.appendChild(deleteBtn);
    
    todoDiv.appendChild(buttonsDiv);
    
    todoList.appendChild(todoDiv);
}

function handleTodoActions(e) {
    const item = e.target;
    const todo = item.parentElement.parentElement;
  
    if (item.classList.contains('complete-btn')) {
        todo.classList.toggle('completed');
        updateLocalTodo(todo.dataset.id);
    }
   
    if (item.classList.contains('delete-btn')) {
        todo.remove();
        removeLocalTodo(todo.dataset.id);
    }
    
   
    if (item.classList.contains('edit-btn')) {
        const todoItem = todo.querySelector('.todo-item');
        const newText = prompt('Edit your task:', todoItem.textContent);
        
        if (newText !== null && newText.trim() !== '') {
            todoItem.textContent = newText;
            editLocalTodo(todo.dataset.id, newText);
        }
    }
}

function filterTodos(e) {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    e.target.classList.add('active');
    
    const todos = todoList.childNodes;
    const filter = e.target.dataset.filter;
    
    todos.forEach(todo => {
        if (todo.nodeType === 1) { // Element node
            switch (filter) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    todo.classList.contains('completed')
                        ? todo.style.display = 'flex'
                        : todo.style.display = 'none';
                    break;
                case 'uncompleted':
                    !todo.classList.contains('completed')
                        ? todo.style.display = 'flex'
                        : todo.style.display = 'none';
                    break;
            }
        }
    });
}

function clearTodos() {
    // Clear UI
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    
    // Clear localStorage
    localStorage.removeItem('todos');
}

// Local Storage Functions
function saveLocalTodos(todo) {
    let todos = getLocalTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getLocalTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}

function getTodos() {
    const todos = getLocalTodos();
    todos.forEach(todo => createTodoElement(todo));
}

function removeLocalTodo(id) {
    let todos = getLocalTodos();
    todos = todos.filter(todo => todo.id !== parseInt(id));
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updateLocalTodo(id) {
    let todos = getLocalTodos();
    todos = todos.map(todo => {
        if (todo.id === parseInt(id)) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

function editLocalTodo(id, newText) {
    let todos = getLocalTodos();
    todos = todos.map(todo => {
        if (todo.id === parseInt(id)) {
            todo.text = newText;
        }
        return todo;
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}
```


## OUTPUT
![screencapture-file-C-Users-arunk-Desktop-ModernWebApplicationDevelopment-todolist-index-html-2025-04-30-08_54_13](https://github.com/user-attachments/assets/d3e49569-5349-44ef-a1dc-f830339b8da1)

     
## RESULT
The program for creating To-do list using JavaScript is executed successfully.
