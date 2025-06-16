function compararNumeros(num1, num2){
    if (num1 < num2){
        return " Numero 2 é maior"
    } else if (num1 == num2)  {
        return "Os numeros são iguais"
    } else {
        return "Numero 1 é maior"
    }
}
console.log(compararNumeros(20, 10))

function numberCheck(numero) {
    if (numero > 0){
        return "numero positivo"
    } else if ( numero < 0) {
        return "numero negativo"
    } else {
        return " Numero Zero "
    }
}
console.log(numberCheck( 1))


function dayOfTheWeek(dia){
    switch (dia) {
        case 1:
            return " sunday"
        case 2:
            return " monday"
        case 3:
            return "tuesday"
        case 4:
            return "wednesday"
        case 5:
            return "thursday"
        case 6: 
            return " friday"
        default:
            return "Dia da semana não localizado"
    }
}

console.log(dayOfTheWeek(9))