var hotelData = JSON.parse(localStorage.getItem("hotelData")) || [];
hotelData.map(function (elem) {
  var box = document.createElement("div");
  box.id = "box";

  var img_box = document.createElement("div");
  img_box.id = "img_box";

  var details_box = document.createElement("div");
  details_box.id = "details_box";

  var detail_div = document.createElement("div");
  detail_div.id = "detail_div";

  var price_box = document.createElement("div");
  price_box.id = "price_box";

  var img = document.createElement("img");
  img.src = elem.image_url;
  img.id = "img";

  var name = document.createElement("H3");
  name.textContent = elem.name;

  var city = document.createElement("p");
  city.textContent = elem.city;
  city.style.color = "#616161";
  city.style.marginTop = "-15px";
  city.style.fontSize = "15px";

  var refund = document.createElement("p");
  refund.textContent = elem.refund;
  refund.style.color = "#0e8445";
  refund.style.marginTop = "2.2em";

  var rating = document.createElement("p");
  rating.textContent = elem.rating;
  rating.style.fontWeight = "bolder";
  // rating.style.marginTop="-10px"
  rating.style.float = "left";

  var review = document.createElement("p");
  review.textContent = elem.review;
  review.style.float = "right";
  // review.style.marginTop="-9px"
  review.style.marginRight = "9em";
  review.style.color = "#616161";
  review.style.fontSize = "15px";

  var price = document.createElement("h2");
  price.innerText = elem.price;

  var total_price = document.createElement("p");
  total_price.innerText = elem.total_price;
  total_price.style.color = "#616161";
  total_price.style.fontSize = "14px";

  img_box.append(img);
  details_box.append(detail_div);
  // price_box.append(price,total_price)
  // details_box.append(price_box);

  detail_div.append(name, city, refund, rating, review);
  box.append(img_box, details_box);

  // box.append(img, name, price, btn);

  document.querySelector("#hotel_div").append(box);
});

function confirm() {
  let value = document.querySelector("#one").value;
  let value1 = document.querySelector("#two").value;
  let value2 = document.querySelector("#three").value;
  let value3 = document.querySelector(".four").value;
  let value4 = document.querySelector(".five").value;
  let value5 = document.querySelector(".six").value;
  let value6 = document.querySelector(".seven").value;
  let value7 = document.querySelector(".eight").value;
  let value8 = document.querySelector(".nine").value;
  let value9 = document.querySelector(".ten").value;

  if (
    value === "" ||
    value1 === "" ||
    value2 === "" ||
    value3 === "" ||
    value4 === "" ||
    value5 === "" ||
    value6 === "" ||
    value7 === "" ||
    value8 === "" ||
    value9 === ""
  ) {
    return alert("Please fill all details");
  }

  return (window.location.href = "loading.html");
}

//user
let userName = JSON.parse(localStorage.getItem("user"));
let displayUser = document.querySelector("#signIn_para");
displayUser.innerText= userName.first_name;