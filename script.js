
let input = document.querySelector('#list-text');
let doneBtn = document.querySelector('#done-btn');

let list = document.querySelector('#list');

function checkedList(event) {
    event.preventDefault();
    let clickedElement = event.target;

    clickedElement.classList.add('list-checkbox-checked');
    clickedElement.parentNode.classList.add('list-item-checked');
}

doneBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let inputText = input.value;

    list.innerHTML += `<li><div onclick="checkedList(event)" class="list-checkbox"></div>${inputText}</li>`;
});

