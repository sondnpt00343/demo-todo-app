const todoForm = document.querySelector("#todo-form");
const todoTitle = document.querySelector("#todo-title");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
        title: todoTitle.value,
        createdAt: new Date(),
    };

    fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
    })
        .then((res) => res.json())
        .then((newTask) => {
            const item = document.createElement("li");
            item.textContent = newTask.title;
            todoList.prepend(item);

            todoTitle.value = "";
            todoTitle.focus();
        });
});

function renderTasks(tasks) {
    tasks.forEach((task) => {
        const item = document.createElement("li");
        item.textContent = task.title;
        todoList.appendChild(item);
    });
}

async function start() {
    try {
        const res = await fetch("http://localhost:3000/tasks?_sort=-createdAt");
        const tasks = await res.json();
        renderTasks(tasks);
    } catch (error) {
        console.log(error);
    }
}

start();

// CRUD
// - Create
// - Read
// - Update
// - Delete

/*
DB:
{
    name: "John",
    age: 18,
    address: "Ha Noi"
}

Send request PATCH:

Payload:
{
    name: "Bob"
}

Result:
{
    name: "Bob",
    age: 18,
    address: "Ha Noi"
}

*/
