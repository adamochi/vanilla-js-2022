const clockTitle = document.querySelector(".js-clock");

const seconds = Math.floor(Date.now() / 1000);

function getDate() {
  const christmasEve = new Date("December 24, 2022 23:59:59");
  const now = new Date();
  const countdown = christmasEve - now;
  const seconds = Math.floor(countdown / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  /*
  console.log(days);
  console.log(christmasEve.getFullYear());
  console.log(christmasEve.getDay());
  console.log(christmasEve.getHours());
  console.log(christmasEve.getMinutes());
  console.log(christmasEve.getSeconds());
  console.log(now.getFullYear());
  console.log(now.getHours());
  console.log(now.getMinutes());
  console.log(now.getSeconds());
*/
  const cHours = String(christmasEve.getHours() - now.getHours()).padStart(
    3,
    "0"
  );
  const cMinutes = String(
    christmasEve.getMinutes() - now.getMinutes()
  ).padStart(2, "0");
  const cSeconds = String(
    christmasEve.getSeconds() - now.getSeconds()
  ).padStart(2, "0");

  clockTitle.innerText = `${days}d ${cHours}h ${cMinutes}m ${cSeconds}s`;
}
getDate();
setInterval(getDate, 1000);

// christmas eve = 25dec - date.now()
// To test a function and get back its return
