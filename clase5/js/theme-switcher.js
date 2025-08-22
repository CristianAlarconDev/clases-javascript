const tema= document.querySelector('#tema');
const boton= document.querySelector('#switcher figure');

boton.addEventListener('click', () => cambiarTema(tema));

const iconos=document.querySelectorAll('#switcher figure img'); 

function cambiarTema(tema){
    
    if (tema.getAttribute('href') === 'css/light.css') {
        tema.href = 'css/dark.css';  
        iconos[0].src ='imgs/moon.png'
        iconos[1].src ='imgs/day-mode.png'
    } else if(tema.getAttribute('href') === 'css/dark.css'){
        tema.href = 'css/light.css'; 
        iconos[0].src ='imgs/sun.png'
        iconos[1].src ='imgs/night-mode.png'
    }

}

