document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    document.getElementById('successMessage').style.display = 'block';
    this.reset(); // Limpa o formulário após "envio"

    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 7000); // Esconde após 7 segundos
});