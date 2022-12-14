// Adiciona o input na tabela
let botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    // Extraindo o input do formulario
    let form = document.querySelector("#form-adiciona");
    let paciente = obtemPacienteDoFormulario(form);

    let erros = validaPaciente(paciente);

    if(erros.length > 0 ){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
    
});

    function adicionaPacienteNaTabela(paciente){
        //Cria elementos do form na tabela
        let pacienteTr = montaTr(paciente);

        //Adiciona paciente na tabela
        let tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }



function exibeMensagensDeErro(erros){
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}

function obtemPacienteDoFormulario(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
        acao: ""
    }
    return paciente;
}


function montaTr(paciente){
 let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    pacienteTr.appendChild(montaTd(paciente.acao, "acao"));

    return pacienteTr;
}

function montaTd(dado, classe){
    let td = document.createElement("td");
    if(classe == "acao"){
        let span = document.createElement("span");
        span.classList.add("acaoBotao");
        span.textContent = "Remover";
        td.appendChild(span);
        return td;
    }
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    let erros = [];

    if(paciente.nome.length == 0){
        erros.push("- O nome n??o pode ficar em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("- O peso ?? inv??lido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("- A altura ?? inv??lida!");
    }

    if(paciente.gordura.length == 0){
        erros.push("- A gordura n??o pode ficar em branco!");
    }

    return erros;

}
