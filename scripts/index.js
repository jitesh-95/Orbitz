import {
  stays,
  flights,
  cars,
  packages,
  things,
  cruises,
  countryCodes,
} from "../component/head.js";

let bookingdiv = document.querySelector(".search_booking");
// default

bookingdiv.innerHTML = stays();

let staysdiv = document.querySelector("#stays");
let flightsdiv = document.querySelector("#flights");
let carsdiv = document.querySelector("#cars");
let packagesdiv = document.querySelector("#packages");
let thingsdiv = document.querySelector("#things");
let cruisesdiv = document.querySelector("#cruises");

staysdiv.style.color = "teal";

// ==================================================
//stays
function staysfun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = stays();
  //
  staysdiv.style.color = "teal";
  //
  flightsdiv.style.color = "grey";
  carsdiv.style.color = "grey";
  packagesdiv.style.color = "grey";
  thingsdiv.style.color = "grey";
  cruisesdiv.style.color = "grey";
}
staysdiv.addEventListener("click", staysfun);

// ===================================================
//flights
function flightsfun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = flights();
  staysdiv.style.color = "grey";
  //
  flightsdiv.style.color = "teal";
  //
  carsdiv.style.color = "grey";
  packagesdiv.style.color = "grey";
  thingsdiv.style.color = "grey";
  cruisesdiv.style.color = "grey";
}
flightsdiv.addEventListener("click", flightsfun);

// ===================================================
//cars
function carsfun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = cars();
  staysdiv.style.color = "grey";
  flightsdiv.style.color = "grey";
  //
  carsdiv.style.color = "teal";
  //
  packagesdiv.style.color = "grey";
  thingsdiv.style.color = "grey";
  cruisesdiv.style.color = "grey";
}

carsdiv.addEventListener("click", carsfun);

// ===================================================
// packages
function packagefun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = packages();
  staysdiv.style.color = "grey";
  flightsdiv.style.color = "grey";
  carsdiv.style.color = "grey";
  //
  packagesdiv.style.color = "teal";
  //
  thingsdiv.style.color = "grey";
  cruisesdiv.style.color = "grey";
}
packagesdiv.addEventListener("click", packagefun);

// ===================================================
// things to do
function thingsfun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = things();
  staysdiv.style.color = "grey";
  flightsdiv.style.color = "grey";
  carsdiv.style.color = "grey";
  packagesdiv.style.color = "grey";
  //
  thingsdiv.style.color = "teal";
  //
  cruisesdiv.style.color = "grey";
}
thingsdiv.addEventListener("click", thingsfun);

// ====================================================
// cruises
function cruisefun() {
  bookingdiv.innerHTML = null;
  bookingdiv.innerHTML = cruises();
  staysdiv.style.color = "grey";
  flightsdiv.style.color = "grey";
  carsdiv.style.color = "grey";
  packagesdiv.style.color = "grey";
  thingsdiv.style.color = "grey";
  //
  cruisesdiv.style.color = "teal";
  //
}
cruisesdiv.addEventListener("click", cruisefun);

// =====================================================
//country codes
document.querySelector("#country_codes").innerHTML = countryCodes();

// ======================================================
//get the app
let alerttag = document.querySelector("#alert");

function getApp() {
  let appbtn = document.querySelector("#app_number").value;
  if (appbtn.length < 10 || appbtn.length < 10) {
    return (alerttag.innerHTML =
      "Sorry, there was an issue on our end. Please wait a moment and try again.");
  }
  if (appbtn.length === 10) {
    alerttag.style.color = "green";
    return (alerttag.innerHTML =
      "We’ve sent you a text message with a link to download the app.");
  }
}
document.querySelector(".get_the_app").addEventListener("click", getApp);
