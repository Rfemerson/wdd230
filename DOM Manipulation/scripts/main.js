const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');


button.addEventListener('click', function() {
    if (input.value != '') {
        const listChapter = document.createElement('li');
        const deleteButton = document.createElement('button');

        const chapter = input.value;
        listChapter.innerHTML = chapter;
        deleteButton.innerHTML = '❌';

        listChapter.appendChild(deleteButton);
        list.appendChild(listChapter);

        deleteButton.addEventListener('click', function() {
            list.removeChild(listChapter);
            input.focus();
        })
        input.value = '';
        input.focus();
    }
});
