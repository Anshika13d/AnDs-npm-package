// button-animation.js

import './style.css';

export function enableJumpingAnimation(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', function() {
        if (!this.classList.contains('jumping-button')) {
            this.classList.add('jumping-button'); 
        } else {
            this.classList.remove('jumping-button'); 
        }
    });
}
