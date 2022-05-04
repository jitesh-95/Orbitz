import { stays, countryCodes } from "../component/head.js";
let bookingdiv = document.querySelector(".search_booking");
// bookingdiv.innerHTML = stays();

let staysdiv = document.querySelector("#stays");
let flightsdiv = document.querySelector("#flights");
let carsdiv = document.querySelector("#cars");
let packagesdiv = document.querySelector("#packages");
let thingsdiv = document.querySelector("#things");
let cruisesdiv = document.querySelector("#cruises");

staysdiv.style.color = "teal";
staysdiv.style.borderBottom = "teal";

function staysfun() {
  bookingdiv.innerHTML = stays();
  staysdiv.style.color = "teal";
  staysdiv.style.borderBottom = "teal";
}
document.querySelector("#stays").addEventListener("click", staysfun);

//country codes
document.querySelector("#country_codes").innerHTML = countryCodes();

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
