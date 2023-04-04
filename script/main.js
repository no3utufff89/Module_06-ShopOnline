import { createTimerElements, timer } from "./timer/createTimer.js";

const dataIndicator = document.querySelector('[data-timer-deadline]');
const deadline = dataIndicator.getAttribute('data-timer-deadline');

document.addEventListener("DOMContentLoaded", () => {
    if (dataIndicator) {
        createTimerElements();
        timer(deadline,dataIndicator);
    } 
});






