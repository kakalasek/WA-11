const hexText = document.querySelector("#hexText");
let currentDatetime = new Date();
let currentTime = currentDatetime.toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

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

setInterval(changeBackground, 1000);
