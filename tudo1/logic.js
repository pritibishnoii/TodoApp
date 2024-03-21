const pushitem = document.querySelector("#push");
pushitem.onclick = function () {
  let newtask = document.querySelector("#newtask input");

  if (newtask.value.length == 0) {
    alert("Pleace enter a task");
  } else {
    let tasks = document.querySelector("#tasks");
    tasks.innerHTML += `
    <div class="task">
    <span id="taskname">
    ${newtask.value}
    </span>
    <button class="delete">
   
    <i class="far fa-trash-alt"> Delete</i>
    </button>
    </div>
    `;
    // reset value 
    newtask.value = "";
    // delete items
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      console.log(current_tasks[i]);
      current_tasks[i].onclick = function () {
        console.log(this.parentNode);
        console.log(this.parentNode.remove);
        this.parentNode.remove();
      };
    }
  }
};
