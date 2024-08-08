document.addEventListener('DOMContentLoaded', function() {
    const convertButonu = document.getElementById('conv');

    if (convertButonu) {
        convertButonu.addEventListener('click', function() {
            const input1 = document.getElementById('input1').value;
            cevirme(input1);
        });

    } else {
        console.error('Butonlardan biri yaxud bir necesi movcud deyil');
    }
});



function cevirme(soz) {
    
    let result = soz.split('').reverse().join('') ;


    const cavab = document.querySelector('span');
    cavab.innerHTML = result;
}
