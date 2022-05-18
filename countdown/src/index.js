const clockTitle = document.querySelector(".js-clock");

// date.getFullYear;
// date.getHours;
// date.getMinutes;
// date.getSeconds;
// date.getMilliseconds;

function getDate() {
  const date = new Date();
  const days = String(date.getDay()).padStart(3, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const milliseconds = String(date.getMilliseconds()).padStart(4, "0");
  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s ${milliseconds}ms`;
}
getDate();
setInterval(getDate, 1);
