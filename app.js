function validarDados() {
  let user = document.getElementById("usuario").value;
  user = user.toLowerCase();
  let password = document.getElementById("senha").value;
  let erro = document.getElementById("erro");

  let validarEmail = "mateus.sanjo20@gmail.com";
  let validarUsuario = "admin";
  let validarSenha = "1234";
  let validarLogin = false;

  for (let i in usuarios) {
    if (
      (user === usuarios[i].usuario || user === usuarios[i].email) &&
      password === usuarios[i].senha
    ) {
      validarLogin = true;
      break;
    }
  }

  if (validarLogin) {
    alert("Login bem-sucedido");
    location.href = "home.html";
  } else {
    erro.innerHTML = `<p class="erro">Usuário ou senha incorreto!</p>`;
  }
}
