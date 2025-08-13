let hours = document.getElementById("hours");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("secs");

let now = new Date();

hours.innerHTML = now.getHours();
minutes.innerHTML = now.getMinutes();
seconds.innerHTML = now.getSeconds();
