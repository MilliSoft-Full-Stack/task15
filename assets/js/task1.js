document.addEventListener('DOMContentLoaded', function() {
    const toplamaButonu = document.getElementById('toplama');
    const cixmaButonu = document.getElementById('cixma');
    const vurmaButonu = document.getElementById('vurma');
    const bolmeButonu = document.getElementById('bolme');

    if (toplamaButonu && cixmaButonu && vurmaButonu && bolmeButonu) {
        toplamaButonu.addEventListener('click', function() {
            hesablama(document.getElementById('toplama').value);
        });

        cixmaButonu.addEventListener('click', function() {
            hesablama(document.getElementById('cixma').value);
        });

        vurmaButonu.addEventListener('click', function() {
            hesablama(document.getElementById('vurma').value);
        });

        bolmeButonu.addEventListener('click', function() {
            hesablama(document.getElementById('bolme').value);
        });
    } else {
        console.error('Butonlardan biri yaxud bir necesi movcud deyil');
    }
});



function hesablama(operator) {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        alert("reqem yazin");
        return;
    }

    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        case '/':
            if (input2 === 0) {
                alert("sifira bolunulmur");
                return;
            }
            result = input1 / input2;
            break;
        default:
            alert("xeta");
            return;
    }



    const cavab = document.querySelector('span');
    cavab.innerHTML = document.getElementById('input1').value + " " + operator + " "  + document.getElementById('input2').value + " = " + result;
}
