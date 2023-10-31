const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'seu_usuario' && password === 'sua_senha') {
        // Transição de borda verde para campos válidos
        usernameInput.classList.add('valid');
        passwordInput.classList.add('valid');

        // Exibir mensagem de sucesso
        displayMessage('Login bem-sucedido!', 'success');
    } else if (username === '' && password === '') {
        // Transição de borda vermelha para campos inválidos
        usernameInput.classList.remove('valid');
        passwordInput.classList.remove('valid');
        errorMessage.textContent = 'Todos os campos devem ser preenchidos.';
        errorMessage.style.display = 'block';
    }
    else if (hasWhiteSpace(username) || hasWhiteSpace(password)) {
        // Exibir mensagem de erro
        errorMessage.textContent = 'Nome de usuário e senha não podem conter espaços em branco.';
        errorMessage.style.display = 'block';
    }

    else {
        // Transição de borda vermelha para campos inválidos
        usernameInput.classList.remove('valid');
        passwordInput.classList.remove('valid');
        errorMessage.textContent = 'Usuário ou senha incorretos. Tente novamente.';
        errorMessage.style.display = 'block';
    }
});

// Remover mensagem de erro quando o usuário começa a digitar novamente
usernameInput.addEventListener('input', function () {
    errorMessage.style.display = 'none';
});
passwordInput.addEventListener('input', function () {
    errorMessage.style.display = 'none';
});

function displayMessage(message, type) {
    const messageContainer = document.getElementById('message-container');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.classList.add(type);
    messageContainer.innerHTML = '';
    messageContainer.appendChild(messageElement);
}

function hasWhiteSpace(str) {
    return /\s/.test(str);
}
