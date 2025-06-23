const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Todo App
const todoForm = $("#todo-form");
const todoInput = $("#todo-input");

const tasks = [
    {
        name: "Rua bat",
        completed: false,
    },
    {
        name: "Quet nha",
        completed: true,
    },
];

todoForm.onsubmit = function (event) {
    event.preventDefault();

    const newTask = {
        task: todoInput.value,
        completed: false,
    };

    tasks.unshift(newTask); // Thêm vào đầu mảng

    todoInput.value = ""; // Clear input
    todoInput.focus(); // Focus input

    renderTasks();
};

function renderTasks() {
    const html = tasks
        .map(
            (task) => `
    <li class="${task.completed ? "completed" : ""}">
      ${task.name}
      <button class="edit">
      ${
          task.completed
              ? `<i class="fa-solid fa-square-check"></i>`
              : `<i class="fa-regular fa-square"></i>`
      }
      </button>
      <button class="edit">
        <i class="fa-solid fa-pen"></i>
      </button>
      <button class="edit">
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
    `
        )
        .join("");

    const todoList = $("#todo-list");
    todoList.innerHTML = html;
}

// Render lần đầu cho dữ liệu khởi tạo của mảng "tasks"
renderTasks();
