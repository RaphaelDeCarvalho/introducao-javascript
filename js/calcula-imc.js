// calcula o imc da tabela
let tabPacientes = document.querySelectorAll(".paciente");

for(i = 0; i < tabPacientes.length; i++){

    paciente = tabPacientes[i];

let tdNome = paciente.querySelector(".info-nome");
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");
let tdImc = paciente.querySelector(".info-imc");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let pesoEhValido = validaPeso(peso); // ambos retornam TRUE ou FALSE.
let alturaEhValida = validaAltura(altura); //__/\__\\

    if(!pesoEhValido){
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        tdImc.classList.add("paciente-invalido");
        tdPeso.classList.add("paciente-invalido");
        tdNome.classList.add("paciente-invalido");
    }
    if(!alturaEhValida){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        tdImc.classList.add("paciente-invalido");
        tdAltura.classList.add("paciente-invalido");
        tdNome.classList.add("paciente-invalido");
    }

    if(pesoEhValido && alturaEhValida){
        let resImc = calculaImc(peso,altura);
        tdImc.textContent = resImc;
    }

}

function validaPeso(peso){
    if(peso > 0 && peso <= 250){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura > 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    let imc = peso / (altura * altura);
    return imc.toFixed(1);
}
