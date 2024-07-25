let input = document.getElementById('imprimir')

function visible(value) {
    input.value += value
}

document.getElementById('calcular').addEventListener('click', function calcular() {
    let resultado = eval(input.value)

    if (resultado === Infinity) {
        input.value = 'Isso não é possível, tente novamente'
    } else {
        input.value = resultado
    }
    
})

document.getElementById("delet").addEventListener('click', function delet() {
    input.value = ''
})

function dark() {
    document.getElementById("light").setAttribute("id", "dark")
    document.getElementById("bMode").innerHTML = 'kit mode'
    document.getElementById("bMode").setAttribute("onclick", "light()")
    document.getElementById("logo").setAttribute("src", "batman.png")

}

function light() {
    document.getElementById("dark").setAttribute("id", "light")
    document.getElementById("bMode").innerHTML = 'bat mode'
    document.getElementById("bMode").setAttribute("onclick", "dark()")
    document.getElementById("logo").setAttribute("src", "hello.png")
}

let botaoMc = document.querySelector("#mc")
let botaoMr = document.querySelector("#mr")
let botaoMmais = document.querySelector("#Mmais")
let botaoMmenos = document.querySelector("#Mmenos")

botaoMmais.addEventListener("click", function guardarValor(){
    localStorage.setItem('Mmais', input.value)
    input.value = ''
})

botaoMr.addEventListener("click", function pegarValorGuardado(){
    input.value = localStorage.getItem('Mmais')
})

botaoMmenos.addEventListener("click", function subtrairValorGuardado(){
    let valorGuardado = localStorage.getItem('Mmais')
    let calculo = parseFloat(valorGuardado) - parseFloat(input.value)
    input.value = calculo
    localStorage.setItem("Mmais", calculo)
})

botaoMc.addEventListener("click", function limparValorGuardado(){
    localStorage.setItem('Mmais', '')
})


