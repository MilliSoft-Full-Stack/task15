document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const okButton = document.querySelector('input[type="submit"]');
    const targetDiv = document.querySelector('body > div:nth-of-type(3)');

    okButton.addEventListener('click', function() {
        
        const width = input1.value;
        const height = input2.value;
        const borderWidth = input3.value;

        
        
        if (width) targetDiv.style.width = (parseInt(targetDiv.style.width) + parseInt(width)) + 'px';
        if (height) targetDiv.style.height = (parseInt(targetDiv.style.height) + parseInt(height)) + 'px';
        if (borderWidth) targetDiv.style.borderWidth = (parseInt(targetDiv.style.borderWidth) + parseInt(borderWidth)) + 'px';
    });
});
