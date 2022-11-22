const escola = "cod3r"

console.log(escola.charAt(4)) //imprime a letra selecionada no index
console.log(escola.charAt(5))

console.log(escola.substring(1)) //Percorre a string a partir de certo index
console.log(escola.substring(1, 3)) //percorre a strig a partir do index 1 até o 3

console.log("Escola ".concat(escola).concat('!')) //concatenação
console.log("Escola", escola, '!')
console.log(escola.replace(3, 'e'))

console.log('Lucas, Emanuel, Isllayne'.split(',')) //split com arrey