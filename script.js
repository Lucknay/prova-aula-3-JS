let alunos= prompt("Digite a quantidade de alunos")

let Soma= 0
let maiornota= 0
let menornota= 10







for(nota= 1; nota <= alunos; nota++){

    let notas  = Number(prompt ("Digite a nota do aluno" + nota + ":") )
    Soma += notas

    if (notas >maiornota){
        maiornota= notas
    }if(notas <menornota )
        menornota= notas
        
} let mediaturma= Soma / alunos

console.log("mediaturma: " + mediaturma.toFixed(1))
console.log("Maior nota:" + maiornota.toFixed(1))
console.log("Menor nota: " + menornota.toFixed(1) )