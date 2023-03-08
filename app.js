const form = document.getElementById('form-content');
const add_task_btn = document.getElementById('add_task_btn');

add_task_btn.onclick = (e) => {

    //prevent refresh
    e.preventDefault();

    const newTask = document.getElementById('newTask');

    //create div
    const div = document.createElement('div');
    div.style.backgroundColor = 'blue';
    div.style.width = '200px';
    div.style.height = '30px';
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    form.append(div);

    //create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value', 'checkbox');
    div.append(checkbox);

    //add span
    const span = document.createElement('span');
    span.innerHTML = newTask.value;
    div.append(span);

    //add edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    editBtn.classList.add("edit-btn");
    div.append(editBtn);

    //add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.classList.add("delete-btn");
    div.append(deleteBtn);

    // delete and edit functions ----it does not work,
    // it is switching between edit and save from the edit icon - working
    editBtn.addEventListener('click', (e) => {
        if (editBtn.innerText.toLowerCase() == "edit") {
            editBtn.innerText = "Save";
            checkbox.focus();
        } else {
            editBtn.innerText = "Edit";
        }
    });

    deleteBtn.addEventListener('click', (e) => {
        div.removeChild(task_el);
    });

    //local storage is missing
}

