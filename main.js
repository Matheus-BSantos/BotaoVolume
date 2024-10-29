const audio = [
    {caminho: 'audios/teste.mp3', legenda:  'Ai'},
]

function trocar(){
    let currentImgIndex = 1;
    const imgSrcArray = [
        'images/botao3.png'
    ]
    const el =document.getElementById('btn');
    el.addEventListener('click', function(e){
        idBotao= e.target.id;

        if(currentImgIndex=== imgSrcArray.length){
            currentImgIndex ++
        }
    })
}

function limpar(){
    for(let i=0; i < audio.length; i++){
        let idBtn = 'botao'+i

        document.getElementById(idBtn).src ='images/botao.png'
    }
}

const botoes = document.querySelectorAll('.botao');
const legendas = document.querySelectorAll('p')

for(let i=0; i <18; i++){
    legendas[i].textContent = audio[i].legenda;
    botoes[i].setAttribute('data-item',i);
}

const audioTag = document.querySelector('audio');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audio[botao.getAttribute('data-item')]
    })
})