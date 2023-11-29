var prompt = require('prompt-sync')();

console.clear();

// Escreva com suas palavras para que serve o comando IF

// if é o comando que cria uma condição onde se o que estiver entre parenteses for true, ele executa o que esta entre as chaves

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Faça um programa que peça um nome de usuário e verifique SE o usuario digitado é 'Admin'. Caso seja printe 'Bem vindo', caso contrário printe 'Usuário não encontrado'

var usuario: string = String(prompt('Digite seu nome de usuário: '));

if (usuario === 'Admin') {
    console.log('Seja bem-vindo!');
} else {
    console.log('Usuário incorreto, tente novamente mais tarde');
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

//  Escreva com suas palavras para que serve o comando While e de um exemplo prático de sua usabilidade para resolução de problemas lógicos.

// O While é um comando que cria uma condição onde se o que estiver entre parenteses for true, ele executa os comandos dentro da chave em um loop, ele irá rodar até sua condição for true. 
// Podemos usar o "while" para ler dados de um arquivo até que o final do arquivo seja alcançado.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

