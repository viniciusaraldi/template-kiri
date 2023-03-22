// Mostrar Conteudo abaixo da imagem principal
function mostrarConteudo() {
    let visivel = document.getElementById('mostrar');
    let listaVisivel = document.getElementById('lista');
    let alteraTexto = document.getElementById('alterar-texto');
    if (visivel.style.display === 'none') {
        visivel.style.display = 'flex';
        listaVisivel.style.visibility = 'visible';
        alteraTexto.innerText = 'DIFERENCIAIS B.ON';
    } else {
        visivel.style.display = 'none';
        listaVisivel.style.visibility = 'hidden';
        alteraTexto.innerText = 'CLIQUE AQUI PARA REVER O NOSSO CONTEÚDO!';
    }
}
// Colocar a página para baixo
function scrollPage() {
    // Obtenha uma referência ao elemento com o próximo ID
    const proximoElemento = document.getElementById("mostrar");
    // Role a página até o próximo elemento
    proximoElemento.scrollIntoView();
}

function mostrarConteudoDepoimentos() {
    let visivel2 = document.getElementById('depoimentos-inicio');
    if (visivel2.style.display === 'none') {
        visivel2.style.display = 'flex';
    } else {
        visivel2.style.display = 'none';
    }
}
function mostrarDepoimento() {
    let invisivel = document.getElementById('botao-depoimento');
    let visivel = document.getElementById('depoimento1');
    let visivel2 = document.getElementById('depoimento2');
    //let visivel3 = document.getElementById('depoimento3');
    if (visivel.style.display === 'none') {
        visivel.style.display = 'flex';
        visivel2.style.display = 'flex';
        //visivel3.style.display = 'flex';
        invisivel.style.display = 'none';
        
    } else {
        visivel.style.display = 'none';
        visivel2.style.display = 'none';
        //visivel3.style.display = 'none';
    }
}

function mostraResposta(valor) {
    let visivel = document.getElementById('cadastro-empreender');
    let visivel2 = document.getElementById('margem-lucro');
    let visivel3 = document.getElementById('necessario-distribuidor');
    let visivel4 = document.getElementById('proprio-revender');
    let visivel5 = document.getElementById('investir-bon');
    let visivel6 = document.getElementById('primeira-compra');
    let visivel7 = document.getElementById('primeiro-cadastro');
    switch (valor) {
        case 1:
            if (visivel.style.display === 'none') {
                visivel.style.display = 'flex';
                visivel.style.height = '350px';
                visivel2.style.display = 'none';
                visivel3.style.display = 'none';
                visivel4.style.display = 'none';
                visivel5.style.display = 'none';
                visivel6.style.display = 'none';
                visivel7.style.display = 'none';
            } else {
                visivel.style.display = 'none';
                visivel.style.height = '0px';
            }
            break;
        case 2:
            if (visivel2.style.display === 'none') {
                visivel2.style.display = 'flex';
                visivel2.style.height = '350px';
                visivel.style.display = 'none';
                visivel3.style.display = 'none';
                visivel4.style.display = 'none';
                visivel5.style.display = 'none';
                visivel6.style.display = 'none';
                visivel7.style.display = 'none';
            } else {
                visivel2.style.display = 'none';
                visivel2.style.height = '0px';
            }
            break;
        case 3:
            if (visivel3.style.display === 'none') {
                visivel3.style.display = 'flex';
                visivel3.style.height = '350px';
                visivel.style.display = 'none';
                visivel2.style.display = 'none';
                visivel4.style.display = 'none';
                visivel5.style.display = 'none';
                visivel6.style.display = 'none';
                visivel7.style.display = 'none';
            } else {
                visivel3.style.display = 'none';
                visivel3.style.height = '0px';
            }
            break;
        case 4:
            if (visivel4.style.display === 'none') {
                visivel4.style.display = 'flex';
                visivel4.style.height = '350px';
                visivel.style.display = 'none';
                visivel2.style.display = 'none';
                visivel3.style.display = 'none';
                visivel5.style.display = 'none';
                visivel6.style.display = 'none';
                visivel7.style.display = 'none';
            } else {
                visivel4.style.display = 'none';
                visivel4.style.height = '0px';
            }
            break;
        case 5:
            if (visivel5.style.display === 'none') {
                visivel5.style.display = 'flex';
                visivel5.style.height = '350px';
                visivel.style.display = 'none';
                visivel2.style.display = 'none';
                visivel3.style.display = 'none';
                visivel4.style.display = 'none';
                visivel6.style.display = 'none';
                visivel7.style.display = 'none';
            } else {
                visivel5.style.display = 'none';
                visivel5.style.height = '0px';
            }
            break;
        case 6:
            if (visivel6.style.display === 'none') {
                visivel6.style.display = 'flex';
                visivel.style.display = 'none';
                visivel2.style.display = 'none';
                visivel3.style.display = 'none';
                visivel4.style.display = 'none';
                visivel5.style.display = 'none';
                visivel7.style.display = 'none';
                visivel6.style.height = '400px';
            } else {
                visivel6.style.display = 'none';
                visivel6.style.height = '0px';
            }
            break;
        case 7:
            if (visivel7.style.display === 'none') {
                visivel7.style.display = 'flex';
                visivel7.style.height = '350px';
                visivel2.style.display = 'none';
                visivel3.style.display = 'none';
                visivel4.style.display = 'none';
                visivel5.style.display = 'none';
                visivel6.style.display = 'none';
                visivel.style.display = 'none';
            } else {
                visivel7.style.display = 'none';
                visivel7.style.height = '0px';
            }
            break;
        default:
            console.log('Erro!');
    }
}

/*
function mudaDiv() {
    let visivel = document.getElementById('direito-container1');
    if (visivel.style.visibility === 'hidden') {
        document.getElementById('direito-container2').style.visibility = 'hidden';
        document.getElementById('direito-container3').style.visibility = 'hidden';
        visivel.style.visibility = 'visible';
    } else {
        visivel.style.visibility = 'hidden';
    }
}
function mudaDiv2() {
    let visivel = document.getElementById('direito-container2');
    if (visivel.style.visibility == 'hidden') {
        document.getElementById('direito-container1').style.visibility = 'hidden';
        document.getElementById('direito-container3').style.visibility = 'hidden';
        visivel.style.visibility = 'visible';
    } else {
        visivel.style.visibility = 'hidden';
    }
}
function mudaDiv3() {
    let visivel = document.getElementById('direito-container3');
    if (visivel.style.visibility == 'hidden') {
        document.getElementById('direito-container1').style.visibility = 'hidden';
        document.getElementById('direito-container2').style.visibility = 'hidden';
        visivel.style.visibility = 'visible';
    } else {
        visivel.style.visibility = 'hidden';
    }
}*/
