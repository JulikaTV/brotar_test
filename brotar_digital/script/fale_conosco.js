// 1. Correção da lógica no event listener
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (isFormDataCorrect()) { 
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('errorMessage').style.display = 'none';
        this.reset();

        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            document.getElementById('errorMessage').style.display = 'none';
        }, 7000); 
    } else {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
    }
});

function isFormDataCorrect() {
    let errorDetails = document.getElementById("errorDetails");

    let nomeCompleto = document.getElementById("nomeCompleto");
    let [nome, sobrenome] = nomeCompleto.value.trim().split(" ");
    if (!nome || nome.length < 2 || !sobrenome || sobrenome.length < 2) {
        errorDetails.innerHTML = "O campo de nome completo deve ser composto por nome e sobrenome, ambos contendo no mínimo 2 caracteres!";
        return false;
    }

    let estado = document.getElementById("estado");
    if (estado.value.trim().length < 2) {
        errorDetails.innerHTML = "O campo de estado deve ter no mínimo 2 caracteres!";
        return false;
    }

    errorDetails.innerHTML = "";
    return true;
}