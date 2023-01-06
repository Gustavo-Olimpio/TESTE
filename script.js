function seleciona(classe,icone){
    const variavel = document.querySelector(".selecionado")
    const icon = document.querySelector(".aparece")
    console.log(icon);
    if (variavel !== null){
        variavel.classList.remove("selecionado")
        icon.classList.remove("aparece")
    }
    const newicon = document.querySelector(icone);
    const valor = document.querySelector(classe);
    valor.classList.add("selecionado")
    newicon.classList.add("aparece")
    
    
}