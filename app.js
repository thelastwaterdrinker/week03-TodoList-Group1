const form = document.getElementById('form');
const list = document.getElementById('list');
const submit = document.getElementById('submit');
const orderedList = document.getElementById('orderedList');

let newBullet = '';

// Preventing form submission when input field is empty
function empty() {
    var x;
    x = document.getElementById("submit").value;
    if (x == "") {
        alert("Type in something");
        return false;
    };
}


//creating the handleSubmit function that is used at the end.
const handleSubmit = (e)=> {
    e.preventDefault();

    //add the new list item to ordered list
    const addBulletToList = document.createElement('li');
    addBulletToList.innerText = newBullet;
    orderedList.appendChild(addBulletToList);
    //clean the submit area after submitting the last list item
    submit.value = '';

    //checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = 1; 
    checkbox.name = 'Todo[]';
    orderedList.appendChild(checkbox);
    //ul.appendChild(list);

}

//in case of change, get the value of the new event in the targeted area
submit.addEventListener('change', (e)=> {
    newBullet = e.target.value;
});

form.addEventListener('submit', handleSubmit);




