const body = document.body;
const html = document.documentElement;
const observer = new IntersectionObserver(intersetionCallback);
const decoder = new TextDecoder();
const UintArray = new Uint8Array([208,161,208,176,209,136,208,176,32,208,187,208,190,209,133]);

setInterval( () => {

    html.scrollTop += 10;

    if(html.scrollHeight - html.scrollTop < window.innerWidth) createElements(); 

}, 20);

createElements();




//-----------------------

function createElements(qty = 1000) {

    const colors = ['red', 'yellow', 'blue', 'pink', 'orange']

    for(let index = 0; index <= qty; index++) {

        const element = document.createElement('div');
        const colorIndex = (Math.random() * 10).toFixed(0) % colors.length;

        element.innerHTML = decoder.decode(UintArray);
        element.classList.add('item');

        element.style.color = colors[colorIndex]
        
        body.append(element);
    
        observer.observe(element);


    }

}


function intersetionCallback(elements, observer) {

    elements.forEach( ({target, isIntersecting}) => {

        if(!isIntersecting) return;

        observer.unobserve(target);

        target.classList.add('active');

    });

}