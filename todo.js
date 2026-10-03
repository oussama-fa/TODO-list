var addingTaskes = document.getElementById("taskes");

function saveTasks() {
    localStorage.setItem("tasks", addingTaskes.innerHTML);
}

var savedTasks = localStorage.getItem("tasks");

if (savedTasks) {
    addingTaskes.innerHTML = savedTasks;
}
addingTaskes.addEventListener("click", (event) => {

    if (event.target.closest(".btndel")) {
        let conf = confirm("Are you sure :")
        if (conf) {
            event.target.closest(".task").remove();
        }
        saveTasks()
        return;
    }

    if (event.target.closest(".btnmod")) {
        var btn = event.target.closest(".btnmod");
        var task = event.target.closest(".task");
        var taskName = task.querySelector(".taskName");

        var newTask = window.prompt("Edit task:", taskName.textContent);

        if (!newTask || !newTask.trim()) {
            return;
        }

        taskName.textContent = newTask.trim();
        saveTasks()
    }

    if (event.target.closest(".btnok")) {
        var btn = event.target.closest(".btnok");
        var task = event.target.closest(".task");

        if (btn.classList.contains("not-done")) {
            btn.textContent = "OK";
            btn.classList.remove("not-done");
            task.classList.remove("not-done-task");
        } else {
            btn.textContent = "KO";
            btn.classList.add("not-done");
            task.classList.add("not-done-task");
        }
        saveTasks()
    }
});


document.getElementById("btnpls").addEventListener("click", () => {
    var res = window.prompt("Adding task:", "Enter task...");
    if (!res || !res.trim())
        return;
    res = res.trim();
    var content = `
        <div class="task not-done-task">
            <h3 class="taskName">${res}</h3>
            <div class="actions">
                <button class="btndel" title="Delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
                <button class="btnmod" title="Edit">
                    E
                </button>
                <button class="btnok not-done" title="Mark as done">
                    KO
                </button>
            </div>

        </div>
    `;

    addingTaskes.insertAdjacentHTML("beforeend", content);
    localStorage.setItem("tasks", addingTaskes.innerHTML);
})
