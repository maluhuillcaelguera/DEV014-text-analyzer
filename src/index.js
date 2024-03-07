import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const textArea = document.querySelector('textarea');
//extrayendo todas las etiquetas li
const li = document.querySelectorAll('li');

const CountCharacter = li[0];
const CountCharacterWithout = li[1];
const CountWords = li[2];
const CountNumber = li[3];
const SumNumber = li[4];
const CountAverage = li[5];


textArea.addEventListener('input', () => {
  CountCharacter.textContent = `Caracteres: ${analyzer.getCharacterCount(textArea.value)}`;
  CountCharacterWithout.textContent = `Caracteres sin espacios: ${analyzer.getCharacterCountExcludingSpaces(textArea.value)}`;
  CountWords.textContent = `Palabras: ${analyzer.getWordCount(textArea.value)}`;
  CountNumber.textContent = `Números: ${analyzer.getNumberCount(textArea.value)}`;
  SumNumber.textContent = `Suma de números: ${analyzer.getNumberSum(textArea.value)}`;
  CountAverage.textContent = `Promedio de longitud: ${analyzer.getAverageWordLength(textArea.value)}`;
});


document.getElementById('reset-button').addEventListener('click', () => {
  refresh();
})

function refresh() {
  CountCharacter.textContent = `Caracteres: 0`;
  CountCharacterWithout.textContent = `Caracteres sin espacios: 0`;
  CountWords.textContent = `Palabras: 0`;
  CountNumber.textContent = `Números: 0`;
  SumNumber.textContent = `Suma de números: 0`;
  CountAverage.textContent = `Promedio de longitud 0`;
  textArea.value = '';
}