// Toggle message below the Say Hello button

document.addEventListener('DOMContentLoaded', function() {
    const helloBtn = document.querySelector('.hello');
    const visitDiv = document.querySelector('.visit');
    visitDiv.style.display = 'none';

    helloBtn.addEventListener('click', function() {
        if (helloBtn.textContent === 'Say Hello') {
            helloBtn.textContent = 'Hide Message';
            visitDiv.style.display = 'block';
        } else {
            helloBtn.textContent = 'Say Hello';
            visitDiv.style.display = 'none';
        }
    });
});
