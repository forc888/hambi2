const form = document.querySelector('#user-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const message = document.querySelector('.message');
const userList = document.querySelector('.userlist');

form.addEventListener('submit', onSubmit);

function onSubmit(ev) {
    ev.preventDefault();

    if (nameInput.value === '') {
        message.classList.add('error');
        message.innerHTML = 'Üres név mező!';
        clearError();

    } else if (!validateEmail(emailInput.value)) {
        message.classList.add('error');
        message.innerHTML = 'Nem helyes email cím!!';

        clearError();
    }
    else {
         .innerHTML += '<td></td><td></td><td><button type="button" class="btn btn-danger btn-sm">DELETE</button></td><td><button type="button" class="btn btn-success btn-sm">Success</button></td>'
        
        const tr = document.createElement('tr');
        const td = document.createElement('td');

       
        td.appendChild(document.createTextNode(`${nameInput.value} (${emailInput.value})`));

        tr.appendChild(td);
        
        userList.appendChild(tr);
       
        nameInput.value = '';
        emailInput.value = '';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function clearError() {
    setTimeout(() => {
        message.classList.remove('error');
        message.innerHTML = '';
    }, 2000)
}