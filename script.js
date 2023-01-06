function seleciona(classe,icone,lugar){
    const tudo = document.querySelector(lugar)
    
    const variavel = tudo.querySelector(".selecionado")
    const icon = tudo.querySelector(".aparece")
    
    if (variavel !== null){
        variavel.classList.remove("selecionado")
        icon.classList.remove("aparece")
    }
    const newicon = tudo.querySelector(icone);
    const valor = tudo.querySelector(classe);

    valor.classList.add("selecionado")
    newicon.classList.add("aparece")
    botaoverde()
}

function botaoverde(){
    const principal = document.querySelector('.principal .selecionado')
    const bebida = document.querySelector('.bebida .selecionado')
    const sobremesa = document.querySelector('.sobremesa .selecionado')
    console.log(principal);
    console.log(bebida);
    console.log(sobremesa);
    if (principal !== null & bebida !== null & sobremesa !== null){
        const botao = document.querySelector('.button')
        botao.classList.add('verde')
        document.querySelector('.txtbotao').innerHTML='Fechar pedido'
    }
}
