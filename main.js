let hr = document.querySelector('#hr');
let mm = document.querySelector('#mm');
let sc = document.querySelector('#sc');

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mn = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh+(mn / 12)}deg)`;
    mm.style.transform = `rotateZ(${mn}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let ampm = document.getElementById('ampm');
    

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12.? 'PM':'AM';

    // covert 24hr Clock to 12hr Clock
    if (h>12){
        h = h - 12;
    }

    // Add zeros before single Digits
    h = (h<10) ? '0' + h:h
    m = (m<10) ? '0' + m:m
    s = (s<10) ? '0' + s:s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;


})



