const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const calcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function imc (){

  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {

    const valorIMC = (peso / (altura *altura)).toFixed(2);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso.';
    } else if (valorIMC < 25) {
      classificacao = 'no peso ideal.';
    } else if (valorIMC < 29.9) {
      classificacao = 'com sobrepeso.';
    } else if (vlorIMC < 39.9) {
      classificacao = 'com obesidade.';
    } else {
      classificacao = 'com obesidade grave.';
    }  

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
    
    
  } else {

    resultado.textContent = 'Preencha todos os campos!';

  }
}

calcular.addEventListener('click', imc);