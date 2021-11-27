function isPalindrome() {
    const word = document.querySelector("#inputFrom13").value
    const wordReverse = word.split('').reverse().join('')
    word == wordReverse ? alert("É palíndrome") : alert("Não é palíndrome")
}

function isPairOrOdd(){
    const number = document.querySelector("#inputFrom14").value
    number % 2 == 0 ? alert("É par") : alert("É ímpar")
}

function fatorial(){
    const number = document.querySelector("#inputFrom15").value
    let fatorial = 1;
    for(let i = 0; i < number; i++){
        fatorial *= number - i
    }
    alert(fatorial)
}

function isEmail(){
    const email = document.querySelector("#inputFrom16").value
    const regex = /\S+@\S+\.\S+/
    regex.test(email) ? alert("Email válido") : alert("Email inválido")
}