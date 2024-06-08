let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);


    ul.appendChild(item);
    inp.value = '';
})

ul.addEventListener ("click", (event) => {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    } else {
        console.log("don't delete");
    }
})