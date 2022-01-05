const adform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generateTemplate = todo =>{

        const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    list.innerHTML += html;


}
//adding todos
adform.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const todo = adform.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        adform.reset();
    }
})

//delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filtertodos = (term) => {
    Array.from(list.children).
    filter((todo) => !todo.textContent.toLowerCase().includes(term)).forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children).
    filter((todo) => todo.textContent.toLowerCase().includes(term)).forEach((todo) => todo.classList.remove('filtered'));
};

//keyup
search.addEventListener('keyup', e => {
    const term = search.value.trim().toLowerCase();
    filtertodos(term);
});