const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");

inputEl.checked = JSON.parse(localStorage.getItem("mode"));//string thke abr boolean a convert krte hbe

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
    }else{
        bodyEl.style.background = "transparent";
    }
}

inputEl.addEventListener("input", ()=> {
    updateBody();
    updateLocalStorage();
})

//local storage a store korar jnno
function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}