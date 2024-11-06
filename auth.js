function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    if (email === 'admin@admin.com' && password === 'senha') {
        alert('Login realizado com sucesso!');
        window.location.href = 'portfolio.html';
    } else {
        alert('Email ou senha incorretos!');
    }
}

function validateRegister() {
    const name = document.getElementById('registerName').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (name.length <= 3) {
        alert('O nome deve ter mais de 3 caracteres!');
        return;
    }

    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }

    alert('Registro realizado com sucesso!');
    window.location.href = 'portfolio.html';
}

document.getElementById('confirmPassword')?.addEventListener('input', function() {
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = this.value;

    if (password !== confirmPassword) {
        this.setCustomValidity('As senhas não coincidem');
    } else {
        this.setCustomValidity('');
    }
});