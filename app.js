function validarDados() {
  let user = document.getElementById("usuario").value;
  user = user.toLowerCase();
  let password = document.getElementById("senha").value;
  let erro = document.getElementById("erro");

  let validarUsuario = "admin";
  let validarSenha = "1234";

  if (user === validarUsuario && password === validarSenha) {
    alert("Login bem-sucedido");
    location.href = "home.html";
  } else {
    erro.innerHTML = `<p class="erro">Usuário ou senha incorreto</p>`;
  }
}
