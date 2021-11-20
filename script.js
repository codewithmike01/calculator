// Display variable
const displayInput = document.querySelector('.display-input');
const displayOutput = document.querySelector('.display-output');
const displayErr = document.querySelector('.display-error');
// keypress variables
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#subtraction');
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const del = document.querySelector('#delete');
const dec = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const equalTo = document.querySelector('#equal-to');
const keyPressSign = document.querySelector('.all-sign');
const decimal = document.querySelector('#decimal');





function main() {
    let numHold = [];
    let aHold = [];
    let bHold = [];
    let operator = '';
    let count = true;
    let batchA = 0;
    let equalCount = 0;
    let clickDecimal = false;

    // Display Input
    one.addEventListener('click', () => {

        numHold.push('1');
        displayInput.append('1');

    });

    two.addEventListener('click', () => {
        numHold.push('2');
        displayInput.append('2')
    })


    three.addEventListener('click', () => {
        numHold.push('3');
        displayInput.append('3')
    })


    four.addEventListener('click', () => {
        numHold.push('4');
        displayInput.append('4')
    });
    five.addEventListener('click', () => {
        numHold.push('5');
        displayInput.append('5')
    })
    six.addEventListener('click', () => {
        numHold.push('6');
        displayInput.append('6')
    });

    seven.addEventListener('click', () => {
        numHold.push('7');
        displayInput.append('7')
    })
    eight.addEventListener('click', () => {
        numHold.push('8');
        displayInput.append('8')
    });
    nine.addEventListener('click', () => {
        numHold.push('9');
        displayInput.append('9')
    });
    zero.addEventListener('click', () => {
        numHold.push('0');
        displayInput.append('0')
    });

    decimal.addEventListener('click', () => {

        if (clickDecimal === true && operator === '') {
            displayInput.append();
            displayErr.textContent = 'you can not have a decimal followed by another'
        } else {
            numHold.push('.');
            displayInput.append('.');
            clickDecimal = true;
        }

    });







    // // Addition
    addition.addEventListener('click', () => {

        //     // The if Only perform once to make count 
        //     // false and set an intial computation of +
        if (count === true) {
            aHold = numHold.join('');
            if (clickDecimal === true) {
                aHold = parseFloat(aHold).toFixed(2);
            } else aHold = parseInt(aHold);
            batchA = aHold + batchA;
            numHold = [];
            count = false;
        } else if (count === false) {
            bHold = numHold.join('');
            if (clickDecimal === true) {
                bHold = parseFloat(bHold).toFixed(2);
            } else bHold = parseInt(bHold);

            batchA = operation(batchA, bHold, operator);
            numHold = [];
            bHold = [];
        }
        displayInput.append(' + ');
        clickDecimal = false;
        operator = '+'
    });
    // Multiplication Event
    multiplication.addEventListener('click', () => {


        if (count === true) {
            aHold = numHold.join('');

            if (clickDecimal === true) {
                aHold = parseFloat(aHold).toFixed(2);;
            } else aHold = parseInt(aHold);


            batchA = aHold + batchA;
            numHold = [];
            count = false;
        } else if (count === false) {

            bHold = numHold.join('');
            if (clickDecimal === true) {
                bHold = parseFloat(bHold).toFixed(2);;
            } else bHold = parseInt(bHold);

            batchA = operation(batchA, bHold, operator);
            numHold = [];
            bHold = [];
        }
        displayInput.append(' * ');
        clickDecimal = false;
        operator = '*'
    });


    // Subtraction Event

    subtraction.addEventListener('click', () => {

        if (count === true) {
            aHold = numHold.join('');
            if (clickDecimal === true) {
                aHold = parseFloat(aHold).toFixed(2);
            } else aHold = parseInt(aHold);
            batchA = aHold + batchA;
            numHold = [];
            count = false;
        } else if (count === false) {
            bHold = numHold.join('');
            if (clickDecimal === true) {
                bHold = parseFloat(bHold).toFixed(2);
            } else bHold = parseInt(bHold);

            batchA = operation(batchA, bHold, operator);
            numHold = [];
            bHold = [];
        }
        displayInput.append(' - ');
        clickDecimal = false;
        operator = '-'
    });

    // Division Event
    division.addEventListener('click', () => {
        console.log('in division')

        if (count === true) {
            aHold = numHold.join('');
            if (clickDecimal === true) {
                aHold = parseFloat(aHold).toFixed(2);
            } else aHold = parseInt(aHold);
            batchA = aHold + batchA;
            numHold = [];
            count = false;
        } else if (count === false) {

            bHold = numHold.join('');
            if (clickDecimal === true) {
                bHold = parseFloat(bHold).toFixed(2);
            } else bHold = parseInt(bHold);

            batchA = operation(batchA, bHold, operator);
            numHold = [];
            bHold = [];
        }
        displayInput.append(' / ');
        clickDecimal = false;
        operator = '/'
    });



    equalTo.addEventListener('click', () => {
        equalCount++;

        bHold = numHold.join('');
        (clickDecimal === true) ? bHold = parseFloat(bHold).toFixed(2): bHold = parseInt(bHold);
        batchA = operation(batchA, bHold, operator);
        numHold = [];
        bHold = [];
        displayOutput.textContent = batchA;

        // if (equalCount === 2) {
        //     keyPressSign.addEventListener('click', () => {
        //         displayErr.textContent = 'You have gotten your answer Why click it twice'
        //         equalCount = 0;

        //     })
        // }


    });

    // Clear the Screen
    clear.addEventListener('click', () => {

        displayInput.textContent = '';
        displayOutput.textContent = '0';
        batchA = 0;
        count = true;
        operator = '';
        clickDecimal = false;
        displayErr.textContent = 'ERR..';
    });
}


// functions operations
function operation(a, b, operator) {
    console.log('in operate');
    let value = 0;

    if (operator === '/' && b === 0) {

        displayErr.textContent = 'Do not divide a number by 0';
        return 'Bad input'
    }


    switch (operator) {
        case '+':
            value = add(a, b);
            break;
        case '-':
            value = sub(a, b);
            break;
        case '*':
            value = mul(a, b);
            break;
        case '/':
            value = div(a, b);
            break;
    }

    return value
}

function add(a, b) {
    a = a + b;
    displayOutput.textContent = a;
    return a;

}

function sub(a, b) {
    console.log('in subtraction');
    a = (a - b).toFixed(2);
    displayOutput.textContent = a;
    return a;
}

function mul(a, b) {
    a = a * b;
    displayOutput.textContent = a;
    return a;

}

function div(a, b) {
    a = a / b;
    displayOutput.textContent = a;
    return a;
}





// function call
main();