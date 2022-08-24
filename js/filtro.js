let inputNome = document.querySelector("#filtro_tebela");

inputNome.addEventListener("input", function(){
    let valor = this.value;
    let pacientes = document.querySelectorAll(".paciente");
    
    if(valor.length > 0){
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(valor, "i");//Expressão Regular
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for(let i = 0; i < pacientes.length; i++){
            let paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
         
});

