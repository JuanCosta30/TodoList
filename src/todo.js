
const button = document.querySelector('button');
const input = document.querySelector('#valorInput');
const ul = document.querySelector('#todoList');


button.addEventListener('click', () => {

    const value = input.value;
    const li = document.createElement('li');
    const buttonDelete = document.createElement('button');
    const checkbox = document.createElement('input');
    
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(value));
        li.appendChild(buttonDelete);
        buttonDelete.innerText = 'Remover';

        if(value === ""){
            alert('Adicione algo a tarefa');
            ul.removeChild(li);

        };

        ul.appendChild(li);

        checkbox.classList.add('h-6', 'w-6');
        li.classList.add('flex','justify-between','items-center','text-xl','font-medium', 'text-gray-800', 'py-4');
        buttonDelete.classList.add('bg-slate-400','hover:bg-red-500','text-sm', 'text-white', 'px-3', 'py-2', 'rounded');

        
        checkbox.addEventListener('change', () => {
            li.classList.toggle('text-gray-300');
        });

        buttonDelete.addEventListener('click', () => {
            ul.removeChild(li);
            ul.removeChild(buttonDelete);
            ul.removeChild(checkbox);
        });

        input.value = '';
    
})