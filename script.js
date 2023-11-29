function trocarFrame(nomeFrame){
    // Esconde todos os frames
    var frames = document.getElementsByClassName('frame');
    for (var i = 0; i < frames.length; i++) {
        frames[i].style.display = 'none';
    }

    // Mostra o frame desejado
    var frame = document.getElementById(nomeFrame);
    if (frame) {
        frame.style.display = 'block';
    }
}

function adicionarSeletor(nomeMenu){
    var menus = document.getElementsByClassName('list-group-item');
    for (var i = 0; i < menus.length; i++) {
        menus[i].classList.remove('bordaMenuSelecionado');
    }

    var menuUso = document.getElementById(nomeMenu);
    if(menuUso){
        menuUso.classList.add('bordaMenuSelecionado');
    }
}

function ocultarMenuMobile(){
    var menuMobile = document.getElementById('menuMobile');
    menuMobile.style.display = 'none';
}


function limparCamposEnderecoAdicionarEndereco() {
    document.getElementById("cep").value = "";
    document.getElementById("endereco_cliente").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("estado").selectedIndex = 0;
    document.getElementById("dest").value = "";
}