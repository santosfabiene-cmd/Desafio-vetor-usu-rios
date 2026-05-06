const usuarios = [
    { 
        id: 1,
        nome: "Ana",
        email: "ana@email.com",
        senha: "1234",
        expirado: false
     },
    { 
        id: 2, 
        nome: "Bruno",
        email: "bruno@email.com",
        senha: "abcd",
        expirado: true
     },
    { 
        id: 3,
        nome: "Carla",
        email: "carla@email.com",
        senha: "senhaCerta",
        expirado: false
     }
];
// Função de login
export function fazerLogin(email, senha) {
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return "Usuário não encontrado";
  }

  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }

  if (usuario.expirado) {
    return "Renove suas credenciais";
  }

  return "Login realizado com sucesso";
}

 