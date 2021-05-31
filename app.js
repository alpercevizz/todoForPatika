const taskItem = document.querySelector("#task");
const taskList = document.querySelector("#list");
const addButton = document.querySelector(".button");
 
addEventListeners();

function addEventListeners(){
    addButton.addEventListener("click", addNewItem);
    taskList.addEventListener("click", deleteItem);
}
 
function createLiItems(text) { 
    const liElement = document.createElement("li");
    liElement.appendChild(document.createTextNode(text)); 
    const xButton = document.createElement("span");
    xButton.className = "close";
    xButton.innerHTML = "x"; 
    liElement.appendChild(xButton);
    taskList.appendChild(liElement);
    
}

function addNewItem() {
    if(taskItem.value === '') {
        $(".error").toast("show");
    }
    else {
        $(".success").toast("show");
        createLiItems(taskItem.value); 
        taskItem.value = ''; 
    }
   
}

function deleteItem(e) {   
    if(e.target.className == 'close') {
        e.target.parentElement.remove();
    }

    e.preventDefault();
}

  

   
    






