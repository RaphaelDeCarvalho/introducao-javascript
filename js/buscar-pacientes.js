let botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    // Faz uma requisição HTTP.
    let xhr = new XMLHttpRequest();

    //Abre a requisição com o comando GET para o site HTTP indicado.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    //Evento espera ouvir a resposta "load" para fazer a função.
    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax");
        //Validação para localizar erros de requisição.
        if(xhr.status == 200){
        erroAjax.classList.add("invisivel");
        //Transforma a resposta da requisição em texto(string).
        let resposta = xhr.responseText;

        //Traduz o texto para o formato JSON.
        let pacientes = JSON.parse(resposta);

        //Entrega a lista de objetos para a função de montar a tabela.
        pacientes.forEach( function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
        }else{
            //Caso a validação tenha erros.
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    });

    //Envia a requisição.
    xhr.send();

});