// console.log("oi");
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hourNow = dateToday.getHours();
  let minuteNow = dateToday.getMinutes();
  let secondNow = dateToday.getSeconds();

  if (hourNow < 10) hourNow = '0' + hourNow;
  if (minuteNow < 10) minuteNow = '0' + minuteNow;
  if (secondNow < 10) secondNow = '0' + secondNow;

  hours.innerText = hourNow;
  minutes.innerText = minuteNow;
  seconds.innerText = secondNow;

  // console.log("testando setInterval")
}, 1000); 