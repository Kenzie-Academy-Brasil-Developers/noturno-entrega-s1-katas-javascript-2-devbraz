// comece a criar a sua função add na linha abaixo

function add(addNum1, addNum2) {
    return addNum1 + addNum2
}

// descomente a linha seguinte para testar sua função

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado')

// comece a criar a sua função multiply na linha abaixo

function multiply(multNum1, multNum2) {

    let somador = multNum1

    let result = 0

    for (let counter = 0; counter < multNum2; counter = add(counter, 1)) {
        result = add(somador, result)
     
    } 

    return result

}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo

function power(powerNum1, powerNum2) {

    let result = 1

    for (let counter = 0; counter < powerNum2; counter = add(counter, 1)) {
        result = multiply(powerNum1, result)

    }

    return result

}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo

function factorial(factorNum) {

    let result = 1

    for (let counter = 1; counter <= factorNum; counter = add(counter, 1)) {
        result = multiply(counter, result)
    }

    return result

}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci


// descomente a linha seguinte para testar sua função

function fibonacci(fibNum) {

    let fibNum1 = 0

    let fibNum2 = 1

    let result = 0

    for (counter = 0; fibNum >= result; counter = add(counter, 1)) {
        
        result = add(fibNum1, fibNum2)
        fibNum1 = fibNum2
        fibNum2 = result
        
    }

    return result

}

 console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');

/* 0 1 1 2 3 5 8 [13] 21
num1+num2=result|num1|num2
///////////  0  |  0 | 1 |
1° 0  1  =   1  |  1 | 1 |
2° 1  1  =   2  |  1 | 2 |
3° 1  2  =   3  |  2 | 3 |
4° 2  3  =   5  |  3 | 5 |
5° 3  5  =   8  |  5 | 8 |
6° 5  8  =   13 |  8 |13 | 
7° 8  13 =   21 | 13 |21 |
8° 13 21 =   34 | 21 |34 | */

// function fibonacci(fibNum) {

//     let result = 1

//     for (counter = 0; fibNum >= result; counter = add(counter, result)) {
//         result = add(counter, result)
//     }

//     return result

// }