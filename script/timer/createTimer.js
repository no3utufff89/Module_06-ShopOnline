export const createTimerElements = (dataIndicator) => {
    const bannerTitle = document.createElement('p');
    bannerTitle.className = 'banner-action__text';
    bannerTitle.textContent = 'До конца акции:';

    const timerBlock = document.createElement('div');
    timerBlock.className = 'timer-block';

    timerBlock.insertAdjacentHTML('afterbegin',
    `
    <p class="timer__item timer__days">
                                    <span class="timer__count timer__count_days">3</span>
                                    <span class="timer__units timer__units_days">дня</span>
                                </p>
                                <p class="timer__item timer__hours">
                                    <span class="timer__count timer__count_hours">8</span>
                                    <span class="timer__units timer__units_hours">часов</span>
                                </p>
                                <p class="timer__item timer__minutes">
                                    <span class="timer__count timer__count_minutes">43</span>
                                    <span class="timer__units timer__units_minutes">минуты</span>
                                </p>
                                <p class="timer__item timer__sec">
                                    <span class="timer__count timer__count_sec">43</span>
                                    <span class="timer__units timer__units_sec">секунды</span>
                                </p>
    `);

    const daysNumber = timerBlock.querySelector('.timer__count_days');
    const hoursNumber = timerBlock.querySelector('.timer__count_hours');
    const minutesNumber = timerBlock.querySelector('.timer__count_minutes');
    const secondsNumber = timerBlock.querySelector('.timer__count_sec');

    const daysUnits = timerBlock.querySelector('.timer__units_days');
    const hoursUnits = timerBlock.querySelector('.timer__units_hours');
    const minutesUnits = timerBlock.querySelector('.timer__units_minutes');
    const secondsUnits = timerBlock.querySelector('.timer__units_sec');

    return {
        bannerTitle,
        timerBlock,
        daysNumber,
        hoursNumber,
        minutesNumber,
        secondsNumber,
        daysUnits,
        hoursUnits,
        minutesUnits,
        secondsUnits,
    };
}

// Функционал
export const timer = (deadline, dataIndicator) => {
   
    const declensionNum = (num, words) => {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    const { daysNumber,
            hoursNumber,
            minutesNumber,
            secondsNumber,
            daysUnits,
            hoursUnits,
            minutesUnits,
            secondsUnits,
            bannerTitle,
            timerBlock,} = createTimerElements(dataIndicator);
            
    dataIndicator.append(bannerTitle, timerBlock);
    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = Date.now();
        const timeRemaining = dateStop - dateNow;
        const days = timeRemaining > 0 ? Math.floor(timeRemaining / 1000 / 60 / 60 / 24) : 0;
        const hours = timeRemaining > 0 ? Math.floor(timeRemaining / 1000 / 60 / 60) % 24 : 0;
        const minutes = timeRemaining > 0 ? Math.floor(timeRemaining / 1000 / 60) % 60 : 0;
        const seconds = timeRemaining > 0 ? Math.floor(timeRemaining / 1000) % 60 : 0;
        if (days < 1) {
            daysUnits.parentElement.remove();
            [hoursNumber,
            minutesNumber,
            secondsNumber].forEach(elem => {
                elem.style.color = 'yellow';
            })
        }
        if (days >= 1) {
            secondsNumber.parentElement.remove();
        }
        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds,
        }
    }
    const start = () => {
        const mainTimerBlock = document.querySelector('.banner-action');
        const timer =  getTimeRemaining();
        daysNumber.textContent = timer.days;
        hoursNumber.textContent = timer.hours < 10 ? '0' + timer.hours : timer.hours;
        minutesNumber.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;
        secondsNumber.textContent = timer.seconds < 10 ? '0' + timer.seconds : timer.seconds;
        daysUnits.textContent = declensionNum(timer.days,['день', 'дня', 'дней']);
        hoursUnits.textContent = declensionNum(timer.hours,['час', 'часа', 'часов']);
        minutesUnits.textContent = declensionNum(timer.minutes,['минута', 'минуты', 'минут']);
        secondsUnits.textContent = declensionNum(timer.seconds,['секунда', 'секунды', 'секунд']);
        
        const intervalId = setTimeout(start,1000);
        if (timer.timeRemaining <=0) {
            clearTimeout(intervalId);
            mainTimerBlock.remove()
        }
    }
    start()
}