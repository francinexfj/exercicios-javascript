// 5. Tipos Primitivos: criar as seguintes variáveis

var meuTamanho = 178;
const PI = 3.14;
var corDaMinhaCamisa = "cinza";
var queroEstudarNaTrybe = true;
var computadorLigado = false;


// 21. Estruturas Condicionais

var resultado;
    // Não altere a linha acima e responda na linha abaixo
    if(elementoA % 2 == 0){
        return "par";
    } else {
        return "ímpar";
    }
    return resultado;


// 22. Estruturas Condicionais

function determinarGeracao(anoDeNascimento) {

  var resultado;
    if(anoDeNascimento <= 1945){
        resultado = "Geração silenciosa";
    } else if(anoDeNascimento <= 1964) {
        resultado = "Boomers";
    } else if(anoDeNascimento <= 1980) {
        resultado = "Geração X";
    } else if(anoDeNascimento <= 1996) {
        resultado = "Millennials";
    } else if(anoDeNascimento > 1996) {
        resultado = "Geração Z";
    }

  return resultado;
}


// 24. Arrays

function retornaPrimeiroElemento(lista) {
  // não altere a linha acima
     
  /*
   * Complete o código atribuindo na variável `resultado`
   * o primeiro elemento do array `lista` se o array não estiver vazio,
   * ou a string "array vazio" se o array `lista` estiver vazio.
   */
   
   var resultado
   if(lista.length > 0){
       resultado = lista[0];
   } else {
       resultado = "array vazio";
   }
    return resultado;
}


// 25. Strings: Dadas duas variáveis concatene-as por ordem crescente de tamanho.

function comparaStrings(primeiraString, segundaString) {
  // não altere a linha acima
  
  /*
   * Complete o código abaixo atribuindo na variável resultado
   * a concatenação das strings `primeiraString` e 
   * `segundaString` de acordo com as regras do exercício
   */
  
   var resultado; 
   if(primeiraString.length > segundaString.length){
       resultado = segundaString + primeiraString;
   } else if(primeiraString.length < segundaString.length){
       resultado = primeiraString + segundaString;
   } else if(primeiraString.length == segundaString.length){
       resultado = segundaString + primeiraString;
   } 
    return resultado;
}


// 28. For: Imprimir elementos do array

function imprimirLista(lista) {
  // não altere a linha acima
      
  /*
   * Nas linhas a seguir, escreva um código que imprima usando 
   * console.log() todos os elementos do array `lista`
   */
   for(var i=0; i < lista.length; i++) {
       console.log(lista[i])
   }
}


// 29. For em Strings: retornar o array na variável resultado com todas as letras da string na variável frase. Exemplo: variável = "Xau Brigado", a variável resultado tem que retornar ["X","a","u"," ","B","r","i","g","a","d","o","!"].

function converteStringParaArray(frase) {

/* Complete o código abaixo atribuindo na variável resultado
* o valor de acordo com as regras do exercício
*/

  var resultado = []
// escreva aqui seu código:
  resultado = frase.split('');
  
  return resultado;
}


/* 31. Funções - Sem Retorno: Crie uma função chamada imprimeSaudacao que:
- receba um parâmetro chamado nome 
- e imprima o texto "Olá, ", seguido do valor da variável nome, seguido de um ponto de exclamação (!)

Exemplo: Se o valor da variável nome é "Grace, a sua função deverá imprimir "Olá, Grace!"
*/

function imprimeSaudacao(nome){
  console.log("Olá, " + nome + "!");
}


// 32. Funções

/*
 * Crie aqui uma função `somaDoisElementos`, que irá 
 * receber dois parâmetros, `elementoA` e `elementoB` 
 * e que retorne a soma desses dois números.
 */
function somaDoisElementos(elementoA, elementoB){
  return elementoA + elementoB;
}


// 33. Funções - Com Retorno

/*
 * Nas linhas abaixo, escreva uma função chamada `calculaIMC``
 * que receba dois parametros: `altura` e `peso`
 * e retorne o resultado do calculo de IMC
 */
function calculaIMC(altura, peso){
  var resultado = peso / (altura*altura);
  return resultado;
}


// 34. Multiplica Elementos Por Dois

function multiplicaPorDois(numeros) {
  /*
   * Complete a função multiplicando todos os elementos
   * do array `numeros` por dois e retornando um array
   * com esses resultados
   */
      var novoArray = [];
      for(var i=0; i < numeros.length; i++){
         novoArray.push(numeros[i]*2);
      }
      return novoArray;
}


// 36. Exercício de impressão de asteriscos

function imprimaQuadradoAsterisco(n) {
  // não altere a linha acima

  /*
   * Escreva nas linhas a seguir um código que 
   * imprima uma quadrado de asteríscos
   * de altura e largura igual ao valor de n
   * Exemplo: n = 5
   * Resultado:
                *****
                *****
                *****
                *****
                *****
*/
  for (var i = 0; i < n; i++) {
      console.log(("*").repeat(n));

  }
}


// 37. Exercício de Números Primos

function buscaNumeroPrimos(n) {
  
/*
* Nas linhas a seguir, escreva um código que encontre todos
* os números primos entre 0 e n e coloque-os num array chamado
* `numerosPrimos`(você deve criar esse array)
*/
  var numerosPrimos = [];

  for (var i = 2; i < n; i++){   
      var quantidadeDeDivisores = 0; 

      for(var b = 2; b < i; b++) { 
        if (i % b == 0) {
            quantidadeDeDivisores ++;
        }
      }

      if (quantidadeDeDivisores % i == 0) {
        numerosPrimos.push(i);
      }

  }
  return numerosPrimos;
}

// 37.1 Exercício simples de numeros primos

// Algoritmo verifica se é primo.
var total = 0; 
var n = 10;
for(var c = 0; c <= n; c++){
    if(n % c == 0){
      total++;
    }
}
if(total == 2){
  console.log( n + " Primo");
} else {
  console.log( n + " Não é primo");
}


// 38. Verificando se é palíndromo ou não

function ehPalindromo(palavra) {
/*
* Complete o código abaixo para verificar se 
* varíavel `palavra` é um palíndromo ou não.
* Caso seja um palíndromo, a função deve retornar
* `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
* a função deve retornar 
* `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
*/

  const inverso = palavra.split("").reverse().join("");
  if(inverso == palavra){
      return "SIM, SOU UM PALÍNDROMO"
  } else {
      return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
  }
}