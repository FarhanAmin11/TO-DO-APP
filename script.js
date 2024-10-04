let unorderList = document.createElement('ul');
let body = document.body;
let lastChildOfBody = document.body.lastElementChild;
body.insertBefore(unorderList, lastChildOfBody);

let addTodo = (e) => {
    e.preventDefault();
    let myInput = document.querySelector("#myInput").value;
    if (myInput.trim() === "") return;  // Prevent adding empty items
    
    let li = document.createElement('li');
    li.setAttribute('class', 'listItem');
    li.innerHTML = myInput;
    unorderList.append(li);

    let button = document.createElement('button');
    button.setAttribute('class', 'deleteButton');
    button.innerHTML = "Delete";
    button.onclick = () => li.remove();  // Attach delete function to button
    
    li.append(button);
    e.target.reset();  // Reset the form
};

let myForm = document.querySelector(".myForm");
myForm.addEventListener('submit', addTodo);
