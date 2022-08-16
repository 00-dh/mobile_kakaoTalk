const nowTime = document.querySelector(".clock");

function clock() {
  const date = new Date();
  const Hours = date.getHours();
  const Minutes = date.getMinutes();
  nowTime.innerHTML = `${Hours}:${Minutes}`;
}

clock();
setInterval(clock, 1000);
