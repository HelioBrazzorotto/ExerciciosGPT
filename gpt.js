const pessoa = require("./gpt.json")

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, e mora em ${pessoa.cidade} e um dos seus hobbies é ${pessoa.hobbies[1]}`)
pessoa.hobbies.push("Viajar")
console.log(pessoa.hobbies)

const stringJson = JSON.stringify(pessoa)

console.log(stringJson)
 
const voltando = JSON.parse(stringJson)
console.log(voltando)

function verify(propriedade){
    if (propriedade in pessoa) {
    console.log(`A propriedade ${propriedade} foi encontrada`)
    }
    else{
    console.log(`A propriedade ${propriedade} não foi encontrada.`)
    }

}
const resultado = verify("auuu")


//A função verify, verifica se a propriedade informada existe no JSON.