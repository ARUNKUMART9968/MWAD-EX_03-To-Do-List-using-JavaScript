

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
