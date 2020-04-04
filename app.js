
  let task = document.querySelector("#task");
let addList = document.querySelector("ul");
let form = document.querySelector(".task_form");


let buildHTML = text => {
  let html = `<li class = "list">
                <span>${text}</span>
                <i class="far fa-trash-alt delete"></i>
              </li>`;
  addList.innerHTML += html;
  // return html;
};

task.addEventListener("keydown", function(e) {
  let input = task.value;
  
  if (e.which === 13) {
    // 押されたキーがエンターキーの時
    if(input !== ""){
    e.preventDefault();
    // デフォルトのイベントを無効にする
    buildHTML(input);
    // addList.insertAdjacentHTML ('beforeend',buildHTML(input));
    form.reset();
    // フォームに入力した文字をクリアする
    // reset()はフォームに対してセットする
    }
  }
 
});

let btn = document.querySelector(".delete");

addList.addEventListener("click",function(e){
  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }
});



