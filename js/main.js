const audios = [
    {caminho:'audios/Ai.mp3', legenda: 'Ai'}
    
];

function trocar(){
    let currentImgIndex=1;
    const ImgSrcArray = [ //caminho das suas imgs aqui
        'images/botao3.png',
    ];
    const el = document.getElementById('btn');
    el.addEventListener('click', function(e) {
        idBotao = e.target.id;

    if(currentImgIndex === ImgSrcArray.length) {
        currentImgIndex=0;
    }

    document.getElementById(idBotao).src=ImgSrcArray[currentImgIndex];
    currentImgIndex++;

    });
}

function limpar(){
    for(let i = 0; i < audios.length; i++){
        let idBtn = 'botao'+i;
        document.getElementById(idBtn).src='images/botao.png'; //altera a img do elemento "agni" de acordo com o indice
    }
}

const botoes = document.querySelectorAll('.botao');
const legendas = document.querySelectorAll('p');

for (let i=0; i < 18; i++){
    legendas[i].textContent = audios[i].legenda;
    botoes[i].setAttribute('data-item', i);
}

const audioTag = document.querySelector('audio');


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audios[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play().then(async r => {
                setTimeout(await function () {
                    limpar()
                }, 1000);
            });
        });

    });

});