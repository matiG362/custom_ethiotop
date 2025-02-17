

document.addEventListener('DOMContentLoaded', function() {

    let mainContainer= document.querySelector('main.container');
    
    mainContainer.classList.remove('container');
    mainContainer.classList.add('container-fluid');

    mainContainer.classList.remove('my-4');

    // Assuming there's only one element with this class, or you're only interested in the first one
var element = document.querySelector('a.text-muted');


// // Change the text inside the anchor
element.textContent = 'Mehbub General Trading PLC';

// Change the href attribute
element.href = 'https://mehbubgtplc.com';
})