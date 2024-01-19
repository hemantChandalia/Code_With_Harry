function myTimer() {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();
  const z = `${h}:${m}:${s}`;
  // console.log(z);
  document.getElementById("digitalClock").textContent = z;
}
setInterval(myTimer, 1000);
myTimer();

// Adding the full screen and exit full screen functionality=====

// function toggleFullscreen() {
//     const digitalClock = document.getElementById('conatiner-box');

//     if (document.fullscreenElement) {
//       // Exit fullscreen
//       addEventListener('click', function () {
//         document.getElementById('fullscreenExit')
//         // document.body.classList.remove('full');
//         // document.body.classList.add('exit');
//         document.exitFullscreen();
//       })

//       // body.classList.remove('full').add('exit').
//     } else {
//       // Go fullscreen
//       digitalClock.requestFullscreen()
//         .catch(err => {
//           document.getElementById('fullscreenElement')
//           console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
//         });
//     }
//   }

// ==================================
function screenFull() {
  const digitalClock = document.getElementById("container-box");
  // document.getElementsByClassName("container")[0].style.backgroundColor="#000"
  document.getElementById("fullscreenElement").innerHTML = "fullscreen_exit";

  if (document.fullscreenElement) {
    // Exit fullscreen
  } else {
    // Go fullscreen
    digitalClock.requestFullscreen().catch((err) => {
      console.error(
        `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
      );
    });
  }
}
function screenExit() {
  const digitalClock = document.getElementById("container-box");

  if (document.fullscreenElement) {
    // Exit fullscreen
    document.getElementById("fullscreenElement").innerHTML = "fullscreen";
    document.exitFullscreen();
  }
}

function toggleFullscreen() {
  const digitalClock = document.body;

  digitalClock.requestFullscreen().catch((err) => {
    console.error(
      `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
    );
  });
}
// Adding the toggle functionality==============

document.addEventListener("DOMContentLoaded", function () {
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem("theme") || "light-theme";
  document.body.classList.add(currentTheme);

  // Dark mode button click event
  document
    .getElementById("darkModeToggle")
    .addEventListener("click", function () {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      // console.log("document container >>>", document.getElementsByClassName("container"))
      // document.getElementsByClassName("container")[0].style.backgroundColor="#000"
      localStorage.setItem("theme", "dark-theme");
    });

  // Light mode button click event
  document
    .getElementById("lightModeToggle")
    .addEventListener("click", function () {
      document.body.classList.add("light-theme");
      // document.getElementsByClassName("container")[0].style.backgroundColor="#fff"

      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light-theme");
    });
});

// ========================================================
// adding alarm =======

function setAlarm() {
  const alarmInput = document.getElementById("alarmInput");
  const alarmMessage = document.getElementById("alarmMessage");
  const alarmAudio = document.getElementById("alarmAudio");
  // const alarmAudio = document.getElementById('alarm_audio');
  // const alarmAudio = document.querySelector( alarmDiv + " #alarm_audio"); // audio element to play alarm

  // set time on initial load
  // this.alarmAudio = document.querySelector(this.alarmDiv + " #alarm_audio"); // audio element to play alarm

  // Parse the selected time from the input
  const alarmTime = new Date();
  const [hours, minutes] = alarmInput.value.split(":");
  alarmTime.setHours(parseInt(hours, 10));
  alarmTime.setMinutes(parseInt(minutes, 10));
  alarmTime.setSeconds(0);

  // Get the current time
  // const currentTime = new Date();

  // Calculate the time difference
  const timeDiff = alarmTime - d;

  if (timeDiff > 0) {
    // Set the alarm using setTimeout
    setTimeout(() => {
      alarmMessage.textContent = "Alarm!";
      alarmAudio.play();
    }, timeDiff);
  } else {
    // Display an error message if the selected time is in the past
    alarmMessage.textContent = "Please select a future time for the alarm.";
  }
}

//   if (time == this.alarmTime) {
//     this.playAlarm();
// }

//   playAlarm() {
//     this.alarmAudio.currentTime = 0; // reset audio to start
//     this.alarmAudio.muted = false; // unmute audio
//     this.alarmAudio.volume = 0.5; // set volume
//     this.alarmAudio.play(); // play audio

//     document.querySelector(this.alarmDiv + " button").style.display = "block";
//     document
//         .querySelector(this.alarmDiv + " button")
//         .addEventListener("click", () => this.turnOffAlarm(this.alarmAudio));
//     document.body.style.background = "#38a4ef";
// }

// turnOffAlarm(alarmAudio) {
//   alarmAudio.muted = true; // mute audio
//   document.querySelector(this.alarmDiv + " button").style.display = "none";
//   document.body.style.background = 'url("/bg.jpg")';
// }
