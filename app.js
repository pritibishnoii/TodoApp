const item = document.querySelector("#item");
const toDoBox = document.querySelector("#tu-do-box");

item.addEventListener("keyup", (event) => {
  console.log(event.key);
  if (event.key == "Enter") {
    console.log(event.value);
    addToDo(item.value);
    console.log(item.value);
    item.value = "";
  }
});
const addToDo = (item) => {
  const listitem = document.createElement("li");
  listitem.innerHTML = `
  ${item}
  <i class="fas fa-times"></i>
  `;

  listitem.addEventListener("click", function () {
    this.classList.toggle("done");
  });
  listitem.querySelector("i").addEventListener("click", function () {
    listitem.remove();
  });
  toDoBox.appendChild(listitem);
};
