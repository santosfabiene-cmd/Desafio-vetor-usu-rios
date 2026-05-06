import { fazerLogin } from '../src/validarLogins.js';
import assert from 'node:assert';

describe('Validação de Login: Sucesso e Credenciais Expiradas', function () {
  
  it('Validar Login realizado com sucesso', function () {
    //Act
    const retorno = fazerLogin('ana@email.com', '1234');

    //Assert
    assert.equal(retorno,'Login realizado com sucesso');
    
  });

  it('Validar Credencial expirada', function () {
    //Act
    const retorno = fazerLogin('bruno@email.com', 'abcd');

    //Assert
    assert.equal(retorno,'Renove suas credenciais');

  });

});

describe ('Validação de Login: Cenários sem sucesso', function () {
it('Validar Usuário não encontrado', function () {
    //Act
    const retorno = fazerLogin('naoexiste@email.com', '1234');

    //Assert
    assert.equal(retorno, 'Usuário não encontrado');

  });

  it('Validar Senha incorreta', function () {
    //Act
    const retorno = fazerLogin('carla@email.com', 'errada');
    
    //Assert
    assert.equal(retorno, 'Senha incorreta');
  });

});