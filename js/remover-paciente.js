let tabela = document.querySelector("table");

tabela.addEventListener("click", function(event){
    alvoEvento = event.target;
    classeAlvo = alvoEvento.classList;
    if(classeAlvo == "acaoBotao"){
    let alvoBotao = alvoEvento.parentNode;
    let paiDoAlvo = alvoBotao.parentNode;
    
    let nome = paiDoAlvo.querySelector(".info-nome");
    
    let confirmaRemove = confirm(`Deseja remover ${nome.textContent} do cadastro?`);

        if(confirmaRemove){
            paiDoAlvo.classList.add("fadeOut");
            setTimeout(function(){
                paiDoAlvo.remove();
            }, 500);
        }
    }
});
    /*
    acao.forEach(function(remove){
        remove.addEventListener("click", function(){
            let paciente = this.parentElement;
            let nome = paciente.querySelector(".info-nome");
            let confirmaRemove = confirm(`Deseja remover ${nome.textContent} do cadastro?`);
            if(confirmaRemove){
                paciente.remove();
            }
        });
    });
    */