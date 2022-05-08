import {
  navbarreturn,
  stays,
  flights,
  cars,
  packages,
  things,
  cruises,
  countryCodes,
  expedia,
  footerpart,
} from "../component/head.js";

//navbar
document.querySelector("#navbar").innerHTML = navbarreturn();

let bookingdiv = document.querySelector(".search_booking");
// default

let staysdiv = document.querySelector("#stays");
let flightsdiv = document.querySelector("#flights");
let carsdiv = document.querySelector("#cars");
let packagesdiv = document.querySelector("#packages");
let thingsdiv = document.querySelector("#things");
let cruisesdiv = document.querySelector("#cruises");

bookingdiv.innerHTML = stays();
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

// ========================================
// going to modal
let modal = document.querySelector("#modal");
let openModal = document.querySelector(".going_to");
let goingText = document.querySelector("#going_to_text");

openModal.addEventListener("click", () => {
  modal.showModal();
});

let closebtn = (e) => {
  if (e.key === "Enter") {
    let query = document.getElementById("modal_query").value;

    goingText.innerHTML = null;
    if (query === "") {
      goingText.innerHTML = "Going to";
      document.getElementById("modal_query").value = null;
      return modal.close();
    }
    goingText.innerHTML = query;
    document.getElementById("modal_query").value = null;
    return modal.close();
  }
};

document.querySelector("#modal_query").addEventListener("keydown", closebtn);

// going to place value

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

//experdia group
document.querySelector("#expedia_group").innerHTML = expedia();

//footer part
document.querySelector("#footer_area").innerHTML = footerpart();

//user name
let userName = JSON.parse(localStorage.getItem("user"));
let displayUser = document.querySelector("#user_account");
let showuser = () => {
  if (userName === null) {
    return false;
  }
  return (displayUser.innerHTML = userName.first_name);
};
showuser();

// for search page

document.querySelector(".second_page").addEventListener("click", () => {
  if (goingText.innerHTML === "Going to") {
    return alert("Please select a location");
  }
  if (displayUser.innerHTML === "Sign In") {
    return alert("Please Sign in first");
  }

  return (window.location.href = "search.html");
});
