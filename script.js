let toggle= document.querySelector('.toggle');
let body= document.querySelector('body');

toggle.addEventListener('click', () => {
    App.toggleMenu();
} );

let App= {
    toggleMenu:() => {
        body.classList.toggle('open');
    },
    listenMenu:() => {
        let menuItems= document.getElementsByClassName('menu')[0].querySelectorAll('li');
        console.log('item', menuItems);
        menuItems.forEach((item, i)=> {
            item.addEventListener('click', () => {
                console.log('click');
                App.toggleMenu();
            } );
        })
    }
};

App.listenMenu();


// const carrusel = document.querySelector(".carrusel-items");
// let maxScrollLeft= carrusel.scrollWidth - carrusel.clientWidth;
// let intervalo = null;
// let step = 1;
// const start = () => {
//     intervalo = setInterval(function () {
//         carrusel.scrollLeft = carrusel.scrollLeft + step; 
//         if(carrusel.scrollLeft === maxScrollLeft) {
//             step = step * -1;
//         }else if (carrusel.scrollLeft === 0){
//             step = step * -1;
//         }console.log("carrusel");
//     }, 10);
// }

// const stop = () => {
//     clearInterval(intervalo);
// };

// start();