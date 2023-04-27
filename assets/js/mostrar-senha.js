let mostrarSenha = document.getElementById("mostrar-senha-login");
mostrarSenha.addEventListener('click', function(){
 
  let senha = document.getElementById("senha");

  if(senha.type == 'password'){
     senha.type = 'text'
  }else{
      senha.type = 'password'
  }
});