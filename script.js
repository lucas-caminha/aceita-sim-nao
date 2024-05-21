document.addEventListener('DOMContentLoaded', function() {
    function getParameterByName(name) {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    const pageTitle = getParameterByName('title') || "Aceita?";
    const messageText = getParameterByName('message') || "Customize sua mensagem!";

    document.title = pageTitle;
    document.getElementById('page-title').innerText = pageTitle;
    document.getElementById('message').innerText = messageText;

    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const container = noBtn.parentElement;

    function moveButtonAway(event) {
        const containerRect = container.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - noBtnRect.width);
        let newTop = Math.random() * (containerRect.height - noBtnRect.height);

        if (newLeft + noBtnRect.width > containerRect.width) {
            newLeft = containerRect.width - noBtnRect.width;
        }
        if (newTop + noBtnRect.height > containerRect.height) {
            newTop = containerRect.height - noBtnRect.height;
        }

        noBtn.style.left = `${newLeft}px`;
        noBtn.style.top = `${newTop}px`;
    }

    noBtn.addEventListener('mouseover', moveButtonAway);

    noBtn.addEventListener('click', function(event) {
        event.preventDefault();
        moveButtonAway(event);
    });

    const buttonsRect = container.getBoundingClientRect();
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    yesBtn.style.position = 'absolute';
    noBtn.style.position = 'absolute';

    yesBtn.style.left = `${buttonsRect.width / 2 - yesBtnRect.width - 10}px`;
    noBtn.style.left = `${buttonsRect.width / 2 + 10}px`;

    yesBtn.style.top = `${buttonsRect.height / 2 - yesBtnRect.height / 2}px`;
    noBtn.style.top = `${buttonsRect.height / 2 - noBtnRect.height / 2}px`;

    yesBtn.addEventListener('click', function() {
        alert('AEEEEEEEEEEEE! :)');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 0.6,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});
