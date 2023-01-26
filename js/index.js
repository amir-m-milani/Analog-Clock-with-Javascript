const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let myDate = new Date();
let hourNum = myDate.getHours();
let minuteNum = myDate.getMinutes();
let secondNum = myDate.getSeconds();

window.onload = () => {
    second.style.transform = `rotate(${localStorage.getItem("secondDeg")}deg)`;
    minute.style.transform = `rotate(${localStorage.getItem("minuteDeg")}deg)`;
    hour.style.transform = `rotate(${localStorage.getItem("hourDeg")}deg)`;
}



let timer = setInterval(() => {
    let secondDeg = ((secondNum * 6) - 90) % 360;
    let minuteDeg = ((minuteNum * 6) - 90) % 360;
    let hourDeg = ((hourNum * 30) - 90 + minuteDeg / 12) % 360;
    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    secondNum++;
    if (secondNum == 60) {
        minuteNum++;
        secondNum = 0;
    }
    if (minuteNum == 60) {
        hourNum++;
        minuteNum = 0;
    }
    localStorage.setItem("hourDeg", `${hourDeg}`);
    localStorage.setItem("minuteDeg", `${minuteDeg}`);
    localStorage.setItem("secondDeg", `${secondDeg}`);
}, 1000);
