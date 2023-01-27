function addTask() {
    if (input_text.value !== '') {
        let $newLi = document.createElement('li');
        let $para = document.createElement('p');
        let $newBut = document.createElement('button');
        $newLi.className = 'list_item';
        list_tasks.prepend($newLi);
        $newLi.append($para);
        $para.textContent = input_text.value;
        
        $newBut.className = 'newBut';
        $newBut.classList.add('material-symbols-sharp');
        $newBut.textContent = 'delete';
        $newLi.append($newBut);
        input_text.value = '';
    } else {
        alert('Введите задачу')
    }
}

let amount_finished = 0;
let amount_unfinished = 0;


form.addEventListener('click', function(event) {
    if (event.target.id === 'input_add') {
        addTask()
    }
})

list_tasks.addEventListener('click', function(event) {
    if (event.target.classList[0] === 'newBut') {
        if (event.target.parentElement.classList[1] !== 'finished') {
            amount_unfinished++;
            out_unfinished.textContent = `Кол-во незавершенных задач - ${amount_unfinished}`;
        };
        event.target.parentElement.remove();
    }
    if (event.target.className === 'list_item') {
        event.target.classList.add('finished');
        amount_finished++;
        out_finished.textContent = `Кол-во завершенных задач - ${amount_finished}`;
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        addTask();
    }
})

document.addEventListener('click', function(event) {
    let aside = document.querySelector('.stat-wrapper')

    if (event.target.id === 'aside_open_but') {
        aside.style.display = 'flex'
    }
    if (event.target.id === 'aside_close_but') {
        aside.style.display = 'none'
    }
})