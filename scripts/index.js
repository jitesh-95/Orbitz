import { stays } from "../component/head.js";
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
