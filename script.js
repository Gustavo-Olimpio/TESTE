function seleciona(classe,icone,lugar){
    const tudo = document.querySelector(lugar)
    console.log(tudo)
    const variavel = tudo.querySelector(".selecionado")
    const icon = tudo.querySelector(".aparece")
    console.log(icon);
    console.log(variavel);
    if (variavel !== null){
        variavel.classList.remove("selecionado")
        icon.classList.remove("aparece")
    }
    const newicon = tudo.querySelector(icone);
    const valor = tudo.querySelector(classe);
    console.log(newicon);
    console.log(valor);
    valor.classList.add("selecionado")
    newicon.classList.add("aparece")
    
    
}