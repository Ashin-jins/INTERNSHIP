function addItem() {
  var value = document.getElementById("item").value;

  if (value == "") return;

  var li = document.createElement("li");
  li.innerText = value;

  document.getElementById("list").appendChild(li);
}

function addTodo() {
  var value = document.getElementById("todo").value;

  if (value == "") return;

  var li = document.createElement("li");
  li.innerText = value;

  document.getElementById("todoList").appendChild(li);
}

function toggle() {
  var text = document.getElementById("text");

  if (text.style.display == "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}