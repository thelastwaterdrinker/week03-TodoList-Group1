const form = document.getElementById('form-content');
const add_task_btn = document.getElementById('add_task_btn');
const newTask = document.getElementById('newTask');

add_task_btn.onclick = (e) => {

    e.preventDefault();

    //create div
    const div = document.createElement('div');
    div.style.minWidth = '200px';
    div.style.maxWidth = '400px';
    div.style.height = '30px';
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    div.style.margin = '1vh 0vh 1vh 0vh';
    form.append(div);

    //create checkbox
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.style.margin = '0px 5px 0px 5px';
    checkbox.checked= '';
    div.append(checkbox);

    //add span
    const span = document.createElement('span');
    span.innerHTML = newTask.value;
    span.style.display = 'flex';
    span.style.flexDirection = 'column';
    span.style.minWidth = '20vh';
    span.style.justifyContent = 'center';
    span.style.margin = '0px 0px 0px 5px';
    div.append(span);

    //add edit button
    const editBtn = document.createElement('button');
    editBtn.innerHTML = `<i class="fas fa-edit"></i>`;
    editBtn.classList.add("edit-btn");
    editBtn.style.margin = '0px 5px 0px 0px';
    div.append(editBtn);

    //add delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    deleteBtn.classList.add("delete-btn");
    deleteBtn.style.margin = '0px 15px 0px 0px';
    div.append(deleteBtn);

    // it is switching between edit and save from the edit icon - working
    editBtn.addEventListener('click', (e) => {
        if (editBtn.innerText.toLowerCase() === "edit") {
            editBtn.innerText = "Save";
            let input = document.createElement("input");
                input.type = "text";
                input.value = span.innerHTML;
                span.append(input);
                input.focus();
                input.addEventListener("blur", () => {
                input.innerHTML = span.value;
                input.remove();
    });
            
        } else {
            editBtn.innerText = "Edit";
        }
    });

    
    // dele button is working now
    deleteBtn.addEventListener('click', (e) => {
        div.removeChild(deleteBtn);
        div.removeChild(editBtn);
        div.removeChild(checkbox);
        div.removeChild(span);
    });

    // checkbox listener
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          console.log("Checkbox is checked..");
        } else {
          console.log("Checkbox is not checked..");
        }
      });

    //local storage is missing


    function setStyles() {
        const currentnewTask = localStorage.getItem('newTask');
        const currentcheckBox = localStorage.getItem('checkbox');
      
        document.getElementById('newTask').value = currentnewTask;
       
       
      }


    function populateStorage() {
        localStorage.setItem('newTask', document.getElementById('newTask').value);
        localStorage.setItem('checkbox', checkbox.value);
      
        setStyles();
      } as
      populateStorage()

}





 