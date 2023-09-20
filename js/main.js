const minutesBlock = document.querySelector('.js-minutes');
const secondsBlock = document.querySelector('.js-seconds');
const hundredthsSecondsBlock = document.querySelector('.js-hundredths-seconds');
const btnStart = document.querySelector('.js-btn-start');
const btnStop = document.querySelector('.js-btn-stop');
const btnReset = document.querySelector('.js-btn-reset');
const btnLap = document.querySelector('.js-btn-lap');
const btnClearLaps = document.querySelector('.js-btn-clear');
const lapsList = document.querySelector('.laps');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

const startTimer = () => {
    milliseconds++;

    hundredthsSecondsBlock.innerHTML = milliseconds;

    if (milliseconds > 99 ) {
        seconds++
        secondsBlock.innerHTML = '0' + seconds;
        // hundredthsSecondsBlock.innerHTML = '00';

        milliseconds = 0;
    }

    if (milliseconds < 10) {
        hundredthsSecondsBlock.innerHTML = '0' + milliseconds;
    }


    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }

    if ( seconds > 59 ) {
        minutes ++;
        minutesBlock.innerHTML = '0' + minutes;

        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }

    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
}

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click', () => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
   clearInterval(interval);
   minutes = 0;
   seconds = 0;
   milliseconds = 0;

   minutesBlock.innerHTML = '00';
   secondsBlock.innerHTML = '00';
   hundredthsSecondsBlock.innerHTML = '00';
});

btnLap.addEventListener('click', () => {
    let html = `
        <li class="laps-item">${minutes}:${seconds}:${milliseconds}</li>
    `;

    if ( minutes  < 9 ) {
        html = `
            <li class="laps-item">0${minutes}:${seconds}:${milliseconds}</li>
        `;    
    }

    if ( seconds < 9 ) {
        html = `
            <li class="laps-item">${minutes}:0${seconds}:${milliseconds}</li>
        `; 
    }

    if ( minutes  < 9 && seconds < 9 ) {
        html = `
            <li class="laps-item">0${minutes}:0${seconds}:${milliseconds}</li>
        `; 
    }

    lapsList.innerHTML += html;
})

btnClearLaps.addEventListener('click', () => {
    lapsList.innerHTML = '';
})