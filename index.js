const $slogan = document.querySelector('.type-slogan')
const $buttonVogal = document.querySelector('.button-count-vogal')
const $buttonConsoante = document.querySelector('.button-count-consoante')
const $result = document.querySelector('.result')

const vogais = ['a', 'à', 'á', 'â', 'ã', 'e', 'é', 'ê', 'i', 'í', 'o', 'ó', 'ô', 'u']
const consoantes = ['b', 'c', 'ç', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

function contarVogal() {
    let slogan = $slogan.value.toLowerCase()
    let totalVogal = 0
    
    for(let i = 0; i < slogan.length; i++){
        if(vogais.indexOf(slogan[i]) != -1){
            totalVogal++
        }
    }
    $result.textContent = 'Há ' + totalVogal + ' vogais.'
}

function contarConsoante(){
    let slogan = $slogan.value.toLowerCase()
    let totalConsoante = 0

    for(let i = 0; i < slogan.length; i++){
        if(consoantes.indexOf(slogan[i]) != -1){
            totalConsoante++
        }
    }
    $result.textContent = 'Há ' + totalConsoante + ' consoantes.'
}

$buttonVogal.addEventListener('click', function(){
    contarVogal()
})

$buttonConsoante.addEventListener('click', function(){
    contarConsoante()
})
