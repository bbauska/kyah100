// counting years to 100 and days to new birthday.
const countDownDateTime = new Date(2024, 11, 4, 0, 0, 0).getTime();
// const yearsValue = document.querySelector("#years")
const daysValue = document.querySelector("#days")
const hoursValue = document.querySelector("#hours")
const minutesValue = document.querySelector("#minutes")
const secondsValue = document.querySelector("#seconds")

// run this function every 1000 ms or 1 second.
let x - setInterval(function() {
  const dateTimeNow = new Date().getTime();
  let difference = countDownDateTime - dateTimeNow;

// calculating time and assigning values
// yearsValue.innerHTML = Math.floor
daysValue.innerHTML = Math.floor(difference / (1000 * 60 * 60 * 24));
hoursValue.innerHTML = Math.floor(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
minutesValue.innerHTML = Math.floor(difference % (1000 * 60 * 60)) / (1000 * 60);
secondsValue.innerHTML = Math.floor(difference % (1000 * 60)) / 1000);

if (difference < 0) {
  clearIntervals(x);
}
}, 1000);
