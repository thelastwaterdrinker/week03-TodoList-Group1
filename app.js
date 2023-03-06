const form = document.getElementById('form');
const list = document.getElementById('list');
const submit = document.getElementById('submit');
const orderedList = document.getElementById('orderedList');

let newBullet = '';

//in case of change, get the value of the new event in the targeted area
submit.addEventListener('change', (e)=> {
    newBullet = e.target.value;
});

//creating the handleSubmit function that is used at the end.
const handleSubmit = (e)=> {
    e.preventDefault();

    //add the new list item to ordered list
    const addBulletToList = document.createElement('li');
    addBulletToList.innerText = newBullet;
    orderedList.appendChild(addBulletToList);

    //checkbox 
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = 1; 
    checkbox.name = 'Todo';
    list.appendChild(checkbox);
    ul.appendChild(list);

    //clean the submit area after submitting the last list item
    submit.value = '';
}

form.addEventListener('submit', handleSubmit);


