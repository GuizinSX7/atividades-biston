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

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

//  Escreva com suas palavras para que serve o comando While e de um exemplo prático de sua usabilidade para resolução de problemas lógicos.

// O While é um comando que cria uma condição onde se o que estiver entre parenteses for true, ele executa os comandos dentro da chave em um loop, ele irá rodar até sua condição for true. 
// Podemos usar o "while" para ler dados de um arquivo até que o final do arquivo seja alcançado.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Faça um loop usando while ou for que conte de 0 a 10

for (var i: number = 0; i <= 10; i++) {
    console.log(String(i));
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça um loop que conte de 0 até N, sendo que N é um numero que o usuário escolhe

var numescolha: number = Number(prompt('Digite um número, printarei do 0 até este número: '));

for (var i: number = 0; i < numescolha + 1; i++) {
    console.log(String(i));
}

// Faça um loop que conte de 100 até 1

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

for (var i: number = 100; i > 0; i--) {
  console.log(String(i));
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça um loop que some todos os numeros de 1 até 100.

var soma: number = 0;

for (var i: number = 0; i < 101; i++) {
  soma = soma + i;
}

console.log('A soma é', String(soma));

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça um loop que some todos os numeros PARES de 1 até 100. 

var somapar: number = 0;

for (var i: number = 0; i < 101; i++) {
  if (i % 2 == 0) {
    somapar = somapar + i;
  }
}

console.log('A soma de todos os números pares de 1 a 100 é', String(somapar));

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça um loop que printe apenas os numeros que são divisíveis por 3 e 5

var numeroprintarimpar: number = Number(prompt('Digite um número que direi apenas os numeros divisivei por 3 e 5: '));

for (var i: number = 0; i <= numeroprintarimpar; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(String(i));
  }
}

console.log('------------------------------------------------------------------------------------------------------------ \n');

// Explique com suas palavras o que é uma matriz

// Uma matriz é uma lista de listas, onde cada lista é uma linha da matriz, e cada item da lista é um item da matriz.

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Faça uma matriz manualmente 4 x 4 com numeros aleatorios a sua escolha

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const matriz: number[][] = [
  [1 ,3424, 123, 233],
  [324, 234, 56, 43],
  [234, 456, 8, 1],
  [324, 78, 234, 5]
]

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Acesse o 2° item da 1° linha da matriz

console.log('O segundo item, da primeira linha da matriz é', String(matriz[0][1]));

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Acesse o 3° item da 4° linha da matriz

console.log('O terceiro item da quarta linha da matriz é', String(matriz[3][2]));

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça um loop FOR que leia as linhas da matriz

for (var linha of matriz) {
  for (var item of linha) {
    console.log(String(item));
  }
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');


// Faça um loop FOR dentro de um loop FOR para ler item por item de uma matriz

for (var linha of matriz) {
  for (var item of linha) {
    console.log(String(item));
  }
}

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Escreva com suas palavras o que é um função

// Uma função é um bloco de código que executa uma tarefa específica quando é chamado. Ela pode receber parâmetros como entrada, processar esses parâmetros e retornar um resultado

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Faça uma função que printe 'Ola mundo' e chame ela

const olaMundo = (): void => {
    console.log('Olá mundo!')
}

olaMundo();

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça uma função que receba um texto como parametro e mostre o print 'O texto de parametro é: ' e concatene com o numero 

var textoParaParam: string = String(prompt('Digite qualquer palavra ou frase: '));

const parametro = (textoParam: string): void => {
    console.log('O texto de parametro é:', textoParam);
}

parametro(textoParaParam);

console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------- \n');

// Faça uma função que receba como parametro o texto '10,58' e que ele retorne o número 10.58.

const trasnformar = (parametroString: any): void => {
    console.log(Number(parametroString.replace(',', '.')));
}

trasnformar('10,58')