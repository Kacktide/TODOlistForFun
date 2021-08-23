let todoVal = document.getElementById("inputBar");

function todoCreate() {
  let e = document.createElement("div");
  e.setAttribute("class", "todo");
  e.innerHTML =
    todoVal.value +
    `<span class="delete" onclick="this.parentElement.style.display = 'none';"><ion-icon name="trash-outline"></ion-icon></span>`;
  console.log(e);


  if (todoVal.value == "" || todoVal.value == " ") {
        return;
  }  else {
    let todoArea = document.getElementById("eee");
    todoArea.appendChild(e);
    todoVal.value = "";
  }

}

