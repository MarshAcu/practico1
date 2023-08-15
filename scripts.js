
/** Al seleccionar una operacion de las listadas, cambiar el simbolo de la misma entre los inputs  */
function changeOperation() {
    
    document.getElementById('option-label').innerHTML = getSelectValue();
    console.log(getSelectValue());

}

/**   */
function getSelectValue() {

    return document.getElementById('option-select').value;
}

/** Realiza los calculos en base a los operadores y el tipo de operacion seleccionada por el usuario */
function calculateOperations() {
    const operator1 = document.getElementById('operator-1').value;
    const operator2 = document.getElementById('operator-2').value;
    let result = 0;

    console.log(operator1)

    /** si no es un numero o no se ingreso nada en los inputs lanza un alert por numero invalidos */
    if(isNaN(operator1) || isNaN(operator2) || operator1.length < 1 || operator2.length < 1) {
        console.warn('No se ingresaron valores validos');
        window.alert('Ingrese numeros validos');
    } else {

        console.info('se calcularan las operaciones');
        switch(getSelectValue()) {
            case '+':
                result = +operator1 + +operator2;
                break;
            case '-':
                result = +operator1 - +operator2;
                break;
            case '*':
                result = +operator1 * +operator2;
                break;
            case '%':
                /** Si el operador2 es mayor a 0 se resuelve la division, en caso contrario se lanza una alert */
                if(operator2 > 0) {
                    result = +operator1 / +operator2;
                } else {
                    window.alert('No se puede realizar la operacion 0%0');
                }
                break;                                                
        }
        document.getElementById('result').innerHTML = result;
    }
}

function clearCalculator() {
    document.getElementById('result').innerHTML = '...';
    document.getElementById('operator-1').value = 0;
    document.getElementById('operator-2').value = 0;
    document.getElementById('option-select').value = '+';
    document.getElementById('option-label').innerHTML = '+';
}