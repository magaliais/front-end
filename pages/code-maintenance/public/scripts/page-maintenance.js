function parallax(event) {
    const scriptsLayers = document.querySelectorAll('.parallax-layer');

    for (let i = 0; i < scriptsLayers.length; i++) {
        const velocity = scriptsLayers[i].getAttribute('data-velocity');

        const xSpeed = (window.innerWidth - event.pageX * velocity) / 100;
        const ySpeed = (window.innerWidth - event.pageY * velocity) / 100;

        scriptsLayers[i].style.transform = `translateX(${xSpeed}px) translateY(${ySpeed}px)`;
    }
}

function parallaxListener() {
    document.addEventListener('mousemove', parallax);
}

function writeTitle() {
    const title = document.querySelector('.page-title');
    const titleArray = title.innerHTML.split('');

    title.innerHTML = "";

    for (let i = 0; i < titleArray.length; i++) {
        setTimeout(() => {
            title.innerHTML += titleArray[i];
        }, 100 * i);
    }
}

// function startGame() {
    
//     alert('começou');
// }

function escope() {
    // const gameStarter = document.getElementById('game-starter');
    // gameStarter.addEventListener('click', startGame);
    
    parallaxListener();
    writeTitle();
}

escope();