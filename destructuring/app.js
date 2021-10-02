const numerosPares  = [2,4,6]
const numerosImpares = [1,3,5]

//SEM
const numerosSem = [numerosPares, numerosImpares]  //[ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
console.log(numerosSem)
//Com destructuring
const numerosCom = [...numerosPares, ...numerosImpares] // [ 2, 4, 6, 1, 3, 5 ]
console.log(numerosCom)

// Jogar cada valor em uma variavel
const [num1, num2, ...outros] = [1,2,3,4,5,6]
console.log(num1)
console.log(outros)

//Adicionar valores
const pessoa = {
    nome: 'Leo',
    idade: 28
}

const pessoaComTelefone = {...pessoa, telefone:1234}
console.log(pessoaComTelefone)

//Forma de pegar partes de objetos
const {nome} = pessoa

//Só pegar atributos desejados
function imprimirDados( {nome, idade}){
    console.log(nome,idade)
}
imprimirDados(pessoaComTelefone)