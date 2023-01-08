
let prato;
let bebida;
let sobremesa;
let total,psc,pbc,ppc;
let minhastring,wpp;

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
    if (tudo.classList.contains("principal") == true){
        let salvo = tudo.querySelector(".selecionado")
        prato = salvo.querySelector(".nome").innerHTML;
        let precoprato = salvo.querySelector(".preco").innerHTML;
        console.log(prato);
        ppc=Number(precoprato.replace(",","."))
        console.log(ppc);
    }
    if (tudo.classList.contains("bebida") == true){
        let salvo = tudo.querySelector(".selecionado")
        bebida = salvo.querySelector(".nome").innerHTML;
        let precobebida = salvo.querySelector(".preco").innerHTML;
        console.log(bebida);
        
        pbc=Number(precobebida.replace(",","."))
        console.log(pbc);
    }
    if (tudo.classList.contains("sobremesa") == true){
        let salvo = tudo.querySelector(".selecionado")
        sobremesa = salvo.querySelector(".nome").innerHTML;
        let precosobremesa = salvo.querySelector(".preco").innerHTML;
        console.log(sobremesa);
       
        psc=Number(precosobremesa.replace(",","."))
        console.log(psc);
    }
    
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
        total = psc + pbc + ppc;
        total = total.toFixed(2)
        console.log(psc);
        console.log(pbc);
        console.log(ppc);
        console.log(total);
        botao.removeAttribute("disabled")
    }
}
    function enviawpp(){
        const principal = document.querySelector('.principal .selecionado')
        const beb = document.querySelector('.bebida .selecionado')
        const sob = document.querySelector('.sobremesa .selecionado')
        if (principal !== null & beb !== null & sob !== null){
            minhastring = (`Olá, gostaria de fazer o pedido:\n- Prato: ${prato}\n-Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${total}`)
            console.log(minhastring);
            console.log(encodeURIComponent(minhastring));
            wpp = "https://wa.me/5511999999999?text="+encodeURIComponent(minhastring)
            window.open(wpp)
        }
    }
    