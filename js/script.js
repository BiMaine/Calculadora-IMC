function calcularIMC() {
    const alturaInput = document.getElementById("altura");
    const pesoInput = document.getElementById("peso");
    const resultadoDiv = document.getElementById("resultado");
    const faixaEtariaSelect = document.getElementById("faixaEtaria");

    resultadoDiv.innerHTML = "";

    const altura = parseFloat(alturaInput.value.replace(',', '.'));
    const peso = parseFloat(pesoInput.value);
    const faixaEtaria = faixaEtariaSelect.value;

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para altura e peso.";
        return;
    }

    const imc = calcularIMCBase(altura, peso);
    const categoria = interpretarIMC(imc, faixaEtaria);

    const resultadoHTML = `
        Seu IMC é: ${imc.toFixed(2)}<br>
        Categoria: ${categoria}
    `;

    resultadoDiv.innerHTML = resultadoHTML;
}

function calcularIMCBase(altura, peso) {
    return peso / (altura * altura);
}

function interpretarIMC(imc, faixaEtaria) {
    if (faixaEtaria === "adulto") {
        if (imc < 18.5) {
            return "Abaixo do Peso";
        } else if (imc < 24.9) {
            return "Peso Normal";
        } else if (imc < 29.9) {
            return "Sobrepeso";
        } else if (imc < 34.9) {
            return "Obesidade Grau I";
        } else if (imc < 39.9) {
            return "Obesidade Grau II";
        } else {
            return "Obesidade Grau III";
        }
    } else if (faixaEtaria === "idoso") {
        if (imc < 22) {
            return "Abaixo do Peso";
        } else if (imc < 27) {
            return "Peso Normal";
        } else {
            return "Sobrepeso";
        }
    }
}

document.getElementById("calcular").addEventListener("click", calcularIMC);