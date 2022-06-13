let text = document.querySelector("#text");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let warning = document.querySelector(".warning");
let clearBtn = document.querySelector("#clearBtn");
let totalCount = 0;
let checkedCount = 0;
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    if (e.target.checked) {
      e.target.nextElementSibling.style.textDecoration = "line-through";
      checkedCount++;
    } else {
      e.target.nextElementSibling.style.textDecoration = "none";
      checkedCount--;
    }
  } else if (e.target.classList.contains("remove")) {
    e.target.closest(".line").style.display = "none";
  }
});
add.addEventListener("click", addition);
text.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addition();
  }
});
function addition() {
  if (text.value) {
    list.innerHTML += `<div class="line">
            <div class="subline">
                <input class="checkbox" type="checkbox">
                <span>${text.value}</span>
            </div>
            <div><button class="remove"><i class="fa-solid fa-trash-can remove"></i></button></div>
        </div>`;
    warning.innerText = "";
    text.value = "";
  } else {
    warning.innerText = "Please enter a note";
  }
  totalCount++;
}
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
});
