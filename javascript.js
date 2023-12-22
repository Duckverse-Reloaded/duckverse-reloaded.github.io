function trocaTitulo(){
    const titulo = document.getElementById('titulo');

    titulo.onmouseover = function(){
        titulo.innerHTML = 'E feliz natal, bichinho';
    }

    titulo.onmouseout = function(){
        titulo.innerHTML = 'Feliz um ano!!!!!!'
    }
}

function trocaCarinho(){
    const carinho = document.getElementById('carinho');

    carinho.onmouseover = function(){
        carinho.src = "Imagens/carinho2.jpg";
        document.documentElement.style.cursor = 'grabbing';
    }

    carinho.onmouseout = function(){
        carinho.src = "Imagens/carinho1.jpg"
        document.documentElement.style.cursor = 'default';
    }

}





    window.onload = function () {
        trocaTitulo();
        trocaCarinho();
    };
