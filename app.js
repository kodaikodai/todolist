let task = document.querySelector("#task");
let addList = document.querySelector("ul");

let buildHTML = text => {
  let html = `<li>${text}</li>`;
  addList.innerHTML += html;
  // return html;
};

let form = document.querySelector(".task_form")

task.addEventListener("keydown", function(e) {
  let input = task.value;

  if (e.which === 13) {
    e.preventDefault();
    buildHTML(input);
    // addList.insertAdjacentHTML ('beforeend',buildHTML(input));
    form.reset();
  }
});
