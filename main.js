function soma(x, y) {
    return x + y;
}

console.log(soma(1))

function somaDefault(x = 3, y = 9) {
    return x + y;
}

console.log(somaDefault(1))
