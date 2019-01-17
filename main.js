

let feature = document.getElementById('feature');
feature.addEventListener('mouseenter', () => {
    const element =  document.getElementById('feature-p')
    element.style.visibility = 'visible';
    element.classList.add('animated', 'fadeInLeft', 'delay-1s');
})

let feature2 = document.getElementById('feature-2');
feature2.addEventListener('mouseenter', () => {
    const element =  document.getElementById('feature-p-2')
    element.style.visibility = 'visible';
    element.classList.add('animated', 'fadeInRight', 'delay-1s');
})


let card1 = document.getElementById('detail-col-1');
