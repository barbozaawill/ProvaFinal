document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !project || !message) {
        alert('Por favor, preencha todos os campos');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    this.reset();
});