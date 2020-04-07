//----------------------- 入力されたタスクを追加する↓↓ ----------------------------
let task = document.querySelector("#task");
let addList = document.querySelector("ul");
let form = document.querySelector(".task_form");

let buildHTML = text => {
  let html = `<li class = "list">
                <span id = "task_text">${text}</span>
                <i class="far fa-trash-alt delete"></i>
              </li>`;
  addList.innerHTML += html;
  // return html;
};

task.addEventListener("keydown", function(e) {
  let input = task.value;

  if (e.which === 13) {
    // 押されたキーがエンターキーの時
    if (input !== "") {
      e.preventDefault();
      // デフォルトのイベントを無効にする
      buildHTML(input);
      // addList.insertAdjacentHTML ('beforeend',buildHTML(input));
      form.reset();
      // フォームに入力した文字をクリアする
      // reset()はフォームに対してセットする
    }else{
      e.preventDefault();
      addList.insertAdjacentHTML ('beforeend','');
      form.reset();
      alert('タスクを入力してください');
    };
  }
});

// ------------------------ ゴミ箱マークをクリックしたらタスクが削除される↓↓----------------------------
let btn = document.querySelector(".delete");

addList.addEventListener("click", function(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

//------------------- サーチ機能(未実装)↓↓-----------------------------
let search = document.querySelector('#keyword');

const filterTasks = (term) =>{
  Array.from(list.children)
      .filter((term)=>{
        return !todo.textContent.toLowerCase().includes(term);
      )};
      .forEach((todo)=>{
        todo.classList.add('filtered');
      });
  Array.from(list.chidren)
      .filter((term)=>{
      return todo.textContent.toLowerCase().includes(term);
      )};
      .forEach((todo)=>{
      todo.classList.remove('filtered');
      });
}

search.addEventListener('keyup',function(){
  const term = search.value.trim().toLowerCase();
  filterTasks(term);
};