const item = document.querySelector(".item"); //для одного элемента
const placeholders = document.querySelectorAll(".placeholder"); //для нескольких

item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragover);
  placeholder.addEventListener("dragenter", dragenter);
  placeholder.addEventListener("dragleave", dragleave);
  placeholder.addEventListener("drop", dragdrop);
}

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => event.target.classList.add("hide"), 0);
}

function dragend(event) {
  event.target.classList.remove("hold"); //так же можно сделать ('hold', 'hide'), либо вместо classList - className = 'item', важно className работает со строчкой(string), а classList это некоторый объект у которого есть методы, которые позволяют манипулировать классом.
  event.target.classList.remove("hide");
}

function dragover(event) {
  event.preventDefault();
}
function dragenter(event) {
  event.target.classList.add("hovered");
}
function dragleave(event) {
  event.target.classList.remove("hovered");
}
function dragdrop(event) {
  event.target.classList.remove("hovered");
  event.target.append(item);
}
