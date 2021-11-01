// 1 Imprimir números de 1 a 10

for(var i = 1; i <=10; i++) {
	console.log(i);
}


// 2 Imprimir os números impares menores que 100

for(var i = 0; i <=100; i++) {
	if(i % 2 != 0) {
		console.log(i);
	}
}

// 3 Imprimir a tabuada do número 8

for(var i=1; i <= 10; i++){
	console.log("8 x " + i + " = " + (8*i))
}

// 4 Imprimir todas as tabuadas do número 1 ao 10

var multiplicando = 1;
var produto = 0;
while(multiplicando <= 10){
	console.log("TABUADA DO " + multiplicando);
	for(var multiplicador = 1; multiplicador <= 10; multiplicador++){
		produto = multiplicando * multiplicador;
		console.log(multiplicando + " x " + multiplicador + " = " + produto);
	}
	console.log("-----------------------------------------------")
	multiplicando++;
}

// 5 Soma dos números de 1 a 10

var soma = 0;
for(var i = 0;i <= 10;i++){
	soma = soma + i;
}
console.log(soma);

// 6 Calculado o fatorial de 10

var fatorial = 1;
for(var i = 1;i <= 10; i++){
	fatorial *= i;
}
console.log(fatorial);

// 7 Criar uma função para calcular a porcentagem de um número

function calcularPorcentagem(numero, porcentagem){
	var resultado = numero * porcentagem / 100;
	console.log(resultado);
}

calcularPorcentagem(100, 20);

// 8 Calcular a soma dos números impares maiores que 10 e menores que 30

var soma = 0;
for(var i = 11; i < 30; i++){
	if(i % 2 != 0){
		console.log(i);
		soma = soma + i;
	}
}
console.log("A soma dos números impares maiores que 10 e menores que 30 é igual a " + soma + ".");

// 9 Criar uma função que converta uma temperatura de Celsius para Fahrenheit

function converterCelsiusParaFahrenheit(temperatura){
	let resultado = temperatura * 1.8 + 32;
	console.log(resultado);
}
converterCelsiusParaFahrenheit();

// 10 Criar uma função que converta uma temperatura de Fahrenheit para Celsius

function converterFahrenheitParaCelsius(temperatura){
	let converter = ((temperatura - 32)*(5/9));
	console.log(converter.toFixed(2));
}
converterFahrenheitParaCelsius();

// 11 Calcular a soma dos números de um array

var array = [1,2,3,4];
var soma = 0;

for(var i=0; i < array.length; i++){
	soma += array[i];
}
console.log("A soma dos número do array é " + soma);

// 12 Calcular a média de todos os números de um array

var array = [1,2,3,6];
var media = 0;
var soma = 0;
for(var i=0; i < array.length; i++){
	soma += array[i];
}
media = soma / array.length;
console.log(media);

// 13 Criar uma função que receba como parâmetro um array de números e retorne um array
// contendo somente números positivos.

function numerosPositivos(array){
	novoArray = [];
	array = array;
	for(var i=0; i < array.length; i++){
		if(array[i] % 2 == 0){
			novoArray.push(array[i]);
		}
	}
	return novoArray;
}
console.log(numerosPositivos([1,2,3,4]));



// 14 Localizar o maior valor dentro de um array de números

// 15 Calcular a soma de todos os dígitos de um número inteiro positivo

// 16 Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade
// A sequência de Fibonacci é composta por uma sucessão de números descrita pelo famoso
// matemático italiano Leonardo de Pisa (1170-1250), mais conhecido como Fibonacci, no final do
// século 12. O matemático percebeu uma regularidade matemática a partir de um problema
// criado por ele mesmo. Além disso, quando esses números são transformados em quadrados e
// dispostos de maneira geométrica, é possível traçar uma espiral, que curiosamente também
// pode ser vista em muitos fenômenos naturais.
// A fórmula usada para calcular a sequência de Fibonacci é a seguinte:
// Fn = Fn - 1 + Fn - 2
// (Fn = Fator numeral)
// Neste caso, repetimos o número 1 e somamos os dois, ou seja, 1 + 1 = 2. Em seguida, somamos
// o resultado com o número antecessor, ou seja, 2 + 1 = 3, e assim continuamente, em uma
// sequência infinita

// 17 Retornar a maior string de um array

// 18 Criar uma função que junte dois arrays e retorno o resultado como um novo array

// 19 Implemente o algoritmo "bubble sort" para um array de números

// 20 Contar a quantidade de palavras em um texto

// 21 Criar uma função para inverter um array

// 22 Contar quantas vezes uma letra aparece em uma frase
  