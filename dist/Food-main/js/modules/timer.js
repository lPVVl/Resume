function timer(id, deadline) {
// установка таймера обратного счета
    
// разница между дедлайном и текущем временем
 function getTimeRemaining(endtime) {
     let days, hours, minutes, seconds;
     const t = Date.parse(endtime) - Date.parse(new Date());//получаем количество милисек конечного времени
     // и получаем в переменную Т разницу между датами в милсек
         if (t <= 0) {
             days = 0;
             hours = 0;
             minutes = 0;
             seconds = 0;
         } else {
             days = Math.floor(t / (1000 * 60 *60 *24)),//получаем сколько суток ост до окончания дедлайн
             hours = Math.floor((t / (1000 * 60 * 60) % 24)), // получаем остаток которого не хвататет до полных суток
             minutes = Math.floor((t / 1000 / 60) % 60), // остаток минут
             seconds = Math.floor((t / 1000) % 60);
         }

     return { //создание массива который возвращает наши значения
         'total': t,
         'days': days,
         'hours': hours,
         'minutes': minutes,
         'seconds': seconds
     };
 }

 function getZero(num) { // добавляем 0 перед числами от 0 до 10
     if (num >= 0 && num < 10) {
         return `0${num}`;
     } else {
         return num;
     }
 }

 function setColock(selector, endtime) {
     const timer = document.querySelector(selector),
           days = timer.querySelector('#days'),
           hours = timer.querySelector('#hours'),
           minutes = timer.querySelector('#minutes'),
           seconds = timer.querySelector('#seconds'),
           timeInterval = setInterval(updateClock, 1000);

         updateClock(); //убираем мигание от верстки

     function updateClock() {
         const t = getTimeRemaining(endtime);

         days.innerHTML = getZero(t.days);
         hours.innerHTML = getZero(t.hours);
         minutes.innerHTML = getZero(t.minutes);
         seconds.innerHTML = getZero(t.seconds);

         if (t.total <= 0) {
             clearInterval(timeInterval);
         }
     }
 }
 setColock(id, deadline);
}

export default timer;