const addTaskButton = document.getElementById("add_task_btn");
addTaskButton.onclick = () => {

  //false: checkbox value
  const taskName = document.getElementById("task_text").value;
  addNewTaskToStorage(taskName, false);
};
//-----LOCAL STORAGE
//value: checbox checked or not 
//title: task label
function addNewTaskToStorage(title, value) {
  const tasksFromStorage =
    JSON.parse(localStorage.getItem("tasks")) || [];
  //console.log(tasksFromStorage.length);
  const newTask = {
    id: 1,
    title,
    value,
  };
  if (tasksFromStorage.length < 1) {
    newTask.id = 1;
  } else {
    newTask.id = tasksFromStorage[tasksFromStorage.length - 1].id + 1;
  }
  tasksFromStorage.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasksFromStorage));
  renderList();
}

function deleteItem(id) {
  const deleteButton = document.getElementById(`delete_task_btn_${id}`);
  deleteButton.onclick = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach((task, index) => {
      if (task.id === id) {
        tasks.splice(index, 1);
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderList();
  };
}

function editTitle(id) {
  const editButton = document.getElementById(`edit_task_btn_${id}`);
  const editInput = document.getElementById(`task_input_id_${id}`)
  const editLabel = document.getElementById(`task_label_${id}`)

  editButton.onclick = () => {
    if (editButton.innerHTML === "edit") {
      editButton.innerHTML = "save";
      //show input box
      editInput.style.display = 'flex'
      //hide label
      editLabel.style.display = 'none'
    } else {
      editButton.innerHTML = "edit";
      editInput.style.display = 'none'
      editLabel.style.display = 'flex'
      updateAndSaveTitle(id)
    }
  };
}

function updateAndSaveTitle(id) {
  const taskTitle = document.getElementById(`task_input_id_${id}`)
  const tasks = JSON.parse(localStorage.getItem('tasks'))
  tasks.forEach(task => {
      if(task.id === id) {
          task.title = taskTitle.value
      }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
  renderList()
}

function updateAndSaveCheckboxValue(id) {
  const checkboxValue = document.getElementById(`task_id_${id}`)
  checkboxValue.onchange = (evt) => {
      //console.log(evt.target.checked)
      const tasks = JSON.parse(localStorage.getItem('tasks'))
      tasks.forEach(task => {
          if(task.id === id) {
              task.value = evt.target.checked
          }
      })
      localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

function renderList() {
  const taskContainer = document.getElementById("task_container");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let renderItem = "";
  //console.log(tasks);
  if(tasks.length > 0) {
    tasks.forEach((task) => {
      renderItem += `
        <div class='main_container'>
            <input type="checkbox" id="task_id_${task.id}" name="task_" ${task.value ? 'checked' : ''}/>
            <label id="task_label_${task.id}" for="task_${task.id}">${task.title}</label><br />
            <input style="width: 100px; display: none;" type="text" id="task_input_id_${task.id}" value="${task.title}" />
            <button id="edit_task_btn_${task.id}">edit</button>
            <button id="delete_task_btn_${task.id}">delete</button>
        </div>
        `;
    });
    taskContainer.innerHTML = renderItem;

    tasks.forEach((task) => {
      deleteItem(task.id);
      editTitle(task.id);
      updateAndSaveCheckboxValue(task.id);
    });
  }
}
renderList();