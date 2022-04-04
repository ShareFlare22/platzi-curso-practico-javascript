//Código del cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Código del circulo
const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return PI * (radio * radio);
}

//Interaccion cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}
//Interaccion Triangulo
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("inputLado1");
  const value1 = input1.value;

  const input2 = document.getElementById("inputLado2");
  const value2 = input2.value;

  const inputb = document.getElementById("inputBase");
  const valueb = inputb.value;
  const perimetro = perimetroTriangulo(value1, value2, valueb);
  alert(perimetro);
}
function alturaTriangulo(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    const alt = Math.sqrt(lado1 ** 2 - (base / 2) ** 2);
    console.log(alt);
    return alt;
  } else {
    alert("Por Favor inserta medidas de un triangulo Isosceles");
  }
}
function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputLado1");
  const value1 = input1.value;

  const input2 = document.getElementById("inputLado2");
  const value2 = input2.value;

  const inputb = document.getElementById("inputBase");
  const valueb = inputb.value;

  const valuealt = alturaTriangulo(value1, value2, valueb);

  const area = areaTriangulo(valueb, valuealt);
  alert(area);
}
//Interaccion Circulo
function calcularPerimetroCirculo() {
  const inputr = document.getElementById("inputRadio");
  const valuer = inputr.value;
  const perimetro = perimetroCirculo(valuer);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const inputra = document.getElementById("inputRadio");
  const valuera = inputra.value;
  const area = areaCirculo(valuera);
  alert(area);
}
