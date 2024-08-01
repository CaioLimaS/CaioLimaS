document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário para validação
    event.preventDefault();

    // Remove mensagens de erro
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    let isValid = true;

    // Validação do Nome
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Nome deve ter pelo menos 3 caracteres.';
        isValid = false;
    }

    // Validação do CPF
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    if (!/^\d{11}$/.test(cpf)) {
        document.getElementById('cpfError').textContent = 'CPF deve ter 11 dígitos.';
        isValid = false;
    }

    // Validação do E-mail
    const email = document.getElementById('email').value;
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Email inválido.';
        isValid = false;
    }

    // Validação da Senha
    const password = document.getElementById('password').value;
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Senha deve ter pelo menos 6 caracteres.';
        isValid = false;
    }

    // Se o formulário for válido, envie-o (ou faça o que quiser)
    if (isValid) {
        // Aqui você pode enviar o formulário ou fazer outras ações
        alert('Formulário enviado com sucesso!');
        // Para fins de demonstração, vamos resetar o formulário
        document.getElementById('registrationForm').reset();
    }
});
