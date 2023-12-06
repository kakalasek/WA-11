const hexText = document.querySelector("#hexText");
let currentDatetime = new Date();
let currentTime = currentDatetime.toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
const sec_input = document.querySelector("#sec-input");
let timer = false;
let secs;
let parsedSecs;

let changeBackground = () => {
  currentDatetime = new Date();
  currentTime = currentDatetime.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  currentTime = currentTime.replace(":", "");
  currentTime = currentTime.replace(":", "");

  hexText.textContent = "#" + currentTime;
  document.body.style = `background-color: #${currentTime}`;
};

let parseSecsToHexTime = (secs) => {
  let returnTime =
    String(Math.floor(secs / 3600)).padStart(2, "0") +
    String(Math.floor((secs % 3600) / 60)).padStart(2, "0") +
    String(secs % 60).padStart(2, "0");

  return returnTime;
};

let updateTimer = () => {
  secs = sec_input.value;
  parsedSecs = parseSecsToHexTime(secs);

  hexText.textContent = "#" + parsedSecs;
  document.body.style = `background-color: #${parsedSecs}`;
  sec_input.value = sec_input.value - 1;
};

const clock = setInterval(changeBackground, 1000)
