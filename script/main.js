const form = document.querySelector("form");
const container = document.querySelector(".container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input");
  const span = document.createElement("span");
  span.innerHTML = input.value;
  container.appendChild(span);
  span.addEventListener("click", () => {
    span.remove();
    localStorage.setItem("todo", container.innerHTML);
  });
  localStorage.setItem("todo", container.innerHTML);
});
container.innerHTML = localStorage.getItem("todo") || "";
container.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    e.target.remove();
    localStorage.setItem("todo", container.innerHTML);
  }
});