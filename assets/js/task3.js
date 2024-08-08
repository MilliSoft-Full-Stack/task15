document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');
    const selects = document.querySelectorAll('.selects select');
    const okButton = document.querySelector('input[type="submit"]');
    const targetDiv = document.querySelector('body > div:nth-of-type(3)');

    okButton.addEventListener('click', function() {
        
        const width = input1.value;
        const height = input2.value;
        const borderWidth = input3.value;

        
        const borderStyle = selects[0].value;
        const borderColor = selects[1].value;
        const color = selects[2].value;
        const backgroundColor = selects[3].value;

        
        if (width) targetDiv.style.width = width + 'px';
        if (height) targetDiv.style.height = height + 'px';
        if (borderWidth) targetDiv.style.borderWidth = borderWidth + 'px';

        
        if (borderStyle) targetDiv.style.borderStyle = borderStyle;
        if (borderColor) targetDiv.style.borderColor = borderColor;
        if (color) targetDiv.style.color = color;
        if (backgroundColor) targetDiv.style.backgroundColor = backgroundColor;
    });
});
