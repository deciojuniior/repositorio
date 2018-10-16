
function Enviar() {
    var nome = document.getElementById("nome").value;
    var nick = document.getElementById("sobrenome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var data =document.getElementById("nascimento").value;

    var senha1 = document.getElementById("senha").value;
    var rep_senha = senhares.value;

    if (senha1 != rep_senha) {
        alert("Senhas diferentes!")
        senha.focus();
        return false;
    }

    alert("Nome: " +nome+"\nNick: " +nick+"\nSenha: " +senha+"\nEmail: " +email+"\nData: " +data);
}
