//navbar
function navbarreturn() {
  return `
      <div id="logooption">
        <div id="logo">
          <img
            src="https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2"
            alt="Nav_logo"
          />
        </div>
        <li class="traveloptions">
          More travel <i class="fa-solid fa-angle-down"></i>
          <div class="sub-menu-1">
            <ul>
              <li><i class="fa-solid fa-building"></i> Stays</li>
              <li><i class="fa-solid fa-plane-departure"></i> Flights</li>
              <li><i class="fa-solid fa-suitcase-rolling"></i> Packages</li>
              <li><i class="fa-solid fa-car"></i> Cars</li>
              <li><i class="fa-solid fa-ship"></i> Cruises</li>
              <li><i class="fa-solid fa-bars-progress"></i> Things to do</li>
              <li>Deals</li>
              <li>Groupes & Meetings</li>
              <li>Travel Blog</li>
            </ul>
          </div>
        </li>
      </div>

      <div id="options">
        <h4><a href="">Español</a></h4>
        <h4><a href="">List Your Property</a></h4>
        <h4><a href="./support.html">Support</a></h4>
        <h4><a href="">Trips</a></h4>
        <h4>
          <li class="traveloptions signin">
            <p id="user_account">Sign In</p>
            <div class="sub-menu-2">
              <h6>Members can access discounts, points and special features</h6>
              <div id="signin"><a href="signin.html">Sign in</a></div>
              <h4 id="signup">
                <a href="signup.html">Create a free accaunt</a>
              </h4>

              <ul>
                <li><a href="./favorits.html">List of favorites</a></li>
                <li><a href="">loyality program</a></li>
                <hr />
                <li><a class="feedback" href="./feedback.html">feedback</a></li>
              </ul>
            </div>
          </li>
        </h4>
      </div>
      `;
}

function stays() {
  return `
        <div id="input_panels">
            <div class="going_to">
              <span class="material-symbols-outlined"> pin_drop </span>
            <p id="going_to_text">Going to</p>
            </div>
            <div class="checkin">
              <p>Check-in</p>
              <input type="date" class="checkin_input" />
            </div>
            <div class="checkout">
              <p>Check-out</p>
              <input type="date" class="checkout_input" />
            </div>
            <div class="travel_box">
              <span class="material-symbols-outlined">person</span>
              <div class="travel_count_div">
                <p class="travelers">Travelers</p>
                <p class="room">1 room,</p>
                <p class="person_count">2 Travelers</p>
              </div>
            </div>
        </div>
        <div class="checkboxes">
            <input type="checkbox" class="addflight" /> Add a flight
            <input type="checkbox" class="addcar" /> Add a car
        </div>
        <button class="submit second_page">Search</button>
        `;
}

function flights() {
  return `
			<div class="flight_first_box">
              <div class="booking_types">
                <p>Roundtrip</p>
                <p>One-way</p>
                <p>Multicity</p>
              </div>
              <div class="booking_types">
                <select class="travelingPerson">
                  <option>1 traveler</option>
                </select>
                <select class="travelingPerson">
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <div class="input_panels">
              <div class="leaving_from">
                <span class="material-symbols-outlined"> pin_drop </span>Leaving
                from
              </div>
              <div class="flight_going_to">
                <span class="material-symbols-outlined"> pin_drop </span>
                Going to
              </div>
              <div class="checkin">
                <p>Departing</p>
                <input type="date" class="checkin_input" />
              </div>
              <div class="checkout" id="return">
                <p>Returning</p>
                <input type="date" class="checkout_input" />
              </div>
            </div>

            <div class="checkboxes">
              <input type="checkbox" class="addflight" /> Add a place to stay
              <input type="checkbox" class="addcar" /> Add a car
            </div>
            <button class="submit">Search</button>
	`;
}

function cars() {
  return `
			<div class="flight_first_box">
              <div class="booking_types">
                <p>Rental cars</p>
                <p>Airport tranportation</p>
              </div>
            </div>

            <div class="cars_input_panels">
              <div class="leaving_from">
                <span class="material-symbols-outlined"> pin_drop </span>Pick-up
              </div>
              <div class="flight_going_to">
                <span class="material-symbols-outlined"> pin_drop </span>
                Same as pick-up
              </div>
              <div class="checkin">
                <p>Pick-up date</p>
                <input type="date" class="checkin_input" />
              </div>
              <div class="checkout" id="return">
                <p>Drop-of date</p>
                <input type="date" class="checkout_input" />
              </div>
              <div class="checkin">
                <p>Pick-up time</p>
                <input type="time" class="checkin_input" />
              </div>
              <div class="checkout" id="return">
                <p>Drop-of time</p>
                <input type="time" class="checkout_input" />
              </div>
            </div>

            <div class="checkboxes">
              <input type="checkbox" class="addflight" /> Include AARP member
              rates
            </div>
            <button class="submit">Search</button>`;
}

function packages() {
  return `
			<p class="choose">Choose two or more items and save on your trip:</p>

            <div class="flight_first_box">
              <div class="booking_types" id="packages_add_buttons">
                <p>Stay added</p>
                <p>Flight added</p>
                <p>Add a car</p>
              </div>
              <div class="booking_types">
                <select class="travelingPerson">
                  <option>1 room, 2 traveler</option>
                </select>
                <select class="travelingPerson">
                  <option>Economy</option>
                </select>
              </div>
            </div>

            <div class="input_panels">
              <div class="leaving_from">
                <span class="material-symbols-outlined"> pin_drop </span>Leaving
                from
              </div>
              <div class="flight_going_to">
                <span class="material-symbols-outlined"> pin_drop </span>
                Going to
              </div>
              <div class="checkin">
                <p>Departing</p>
                <input type="date" class="checkin_input" />
              </div>
              <div class="checkout" id="return">
                <p>Returning</p>
                <input type="date" class="checkout_input" />
              </div>
            </div>

            <div class="checkboxes">
              <input type="checkbox" class="addflight" /> I only need
              accommodations for part of my trip
            </div>
            <button class="submit">Search</button>
			`;
}

function things() {
  return `
			<div id="input_panels">
              <div class="going_to things_going_to">
                <span class="material-symbols-outlined"> pin_drop </span>Things
                to do
              </div>
              <div class="checkin">
                <p>From</p>
                <input type="date" class="checkin_input" />
              </div>
              <div class="checkout">
                <p>To</p>
                <input type="date" class="checkout_input" />
              </div>
		  	</div>
            <button class="submit">Search</button>
			`;
}

function cruises() {
  return `
			<p class="choose">
              Choose two or more items and save on your trip:
            </p>

            <div class="cruise">
              <div class="select-destination">
                <p>Going to</p>
                <select id="cruise_destionation_dropdown">
                  <option>Select destination</option>
                  <optgroup label="Most Popular">
                    <option>Caribbean</option>
                    <option>Bahamas</option>
                    <option>Mexico</option>
                    <option>Alaska</option>
                    <option>Europe</option>
                    <option>Bermuda</option>
                    <option>Hawaii</option>
                  </optgroup>
                  <optgroup label="Other Destination">
                    <option>Arctic / Antarctic</option>
                    <option>Middle East</option>
                    <option>Africa</option>
                    <option>Panama Canal</option>
                    <option>Asia</option>
                    <option>Pacific Coastal</option>
                    <option>Australia / New Zealand</option>
                    <option>Central America</option>
                    <option>Galapagos</option>
                    <option>Getaway at Sea</option>
                    <option>World Cruise</option>
                  </optgroup>
                </select>
              </div>

              <div class="travel_box" id="cruise_travel_box">
                <span class="material-symbols-outlined">person</span>
                <div class="travel_count_div">
                  <p class="travelers">Travelers in the cabin</p>
                  <p class="cruise_person_count">2 Travelers</p>
                </div>
              </div>

              <div class="checkin cruise_depart">
                <p>Departs as early as</p>
                <input type="date" class="checkin_input" />
              </div>
              <div class="checkout cruise_depart">
                <p>Departs as late as</p>
                <input type="date" class="checkout_input" />
              </div>
            </div>

            <button class="submit">Search</button>
			`;
}

// country codes

function countryCodes() {
  return `
		<option data-countryCode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
		<option data-countryCode="AR" value="54">Argentina (+54)</option>
		<option data-countryCode="AM" value="374">Armenia (+374)</option>
		<option data-countryCode="AU" value="61">Australia (+61)</option>
		<option data-countryCode="AT" value="43">Austria (+43)</option>
		<option data-countryCode="AZ" value="994">Azerbaijan (+994)</option>
		<option data-countryCode="BS" value="1242">Bahamas (+1242)</option>
		<option data-countryCode="BH" value="973">Bahrain (+973)</option>
		<option data-countryCode="BD" value="880">Bangladesh (+880)</option>
		<option data-countryCode="BY" value="375">Belarus (+375)</option>
		<option data-countryCode="BE" value="32">Belgium (+32)</option>
		<option data-countryCode="BT" value="975">Bhutan (+975)</option>
		<option data-countryCode="BO" value="591">Bolivia (+591)</option>
		<option data-countryCode="BA" value="387">Bosnia Herzegovina (+387)</option>
		<option data-countryCode="BW" value="267">Botswana (+267)</option>
		<option data-countryCode="BR" value="55">Brazil (+55)</option>
		<option data-countryCode="BN" value="673">Brunei (+673)</option>
		<option data-countryCode="BG" value="359">Bulgaria (+359)</option>
		<option data-countryCode="KH" value="855">Cambodia (+855)</option>
		<option data-countryCode="CA" value="1">Canada (+1)</option>
		<option data-countryCode="CF" value="236">Central African Republic (+236)</option>
		<option data-countryCode="CL" value="56">Chile (+56)</option>
		<option data-countryCode="CN" value="86">China (+86)</option>
		<option data-countryCode="CO" value="57">Colombia (+57)</option>
		<option data-countryCode="KM" value="269">Comoros (+269)</option>
		<option data-countryCode="CU" value="53">Cuba (+53)</option>
		<option data-countryCode="CY" value="90392">Cyprus North (+90392)</option>
		<option data-countryCode="CY" value="357">Cyprus South (+357)</option>
		<option data-countryCode="CZ" value="42">Czech Republic (+42)</option>
		<option data-countryCode="DK" value="45">Denmark (+45)</option>
		<option data-countryCode="EC" value="593">Ecuador (+593)</option>
		<option data-countryCode="EG" value="20">Egypt (+20)</option>
		<option data-countryCode="SV" value="503">El Salvador (+503)</option>
		<option data-countryCode="EE" value="372">Estonia (+372)</option>
		<option data-countryCode="ET" value="251">Ethiopia (+251)</option>
		<option data-countryCode="FJ" value="679">Fiji (+679)</option>
		<option data-countryCode="FI" value="358">Finland (+358)</option>
		<option data-countryCode="FR" value="33">France (+33)</option>
		<option data-countryCode="GM" value="220">Gambia (+220)</option>
		<option data-countryCode="GE" value="7880">Georgia (+7880)</option>
		<option data-countryCode="DE" value="49">Germany (+49)</option>
		<option data-countryCode="GH" value="233">Ghana (+233)</option>
		<option data-countryCode="GI" value="350">Gibraltar (+350)</option>
		<option data-countryCode="GR" value="30">Greece (+30)</option>
		<option data-countryCode="GL" value="299">Greenland (+299)</option>
		<option data-countryCode="GD" value="1473">Grenada (+1473)</option>
		<option data-countryCode="GN" value="224">Guinea (+224)</option>
		<option data-countryCode="GW" value="245">Guinea - Bissau (+245)</option>
		<option data-countryCode="GY" value="592">Guyana (+592)</option>
		<option data-countryCode="HT" value="509">Haiti (+509)</option>
		<option data-countryCode="HN" value="504">Honduras (+504)</option>
		<option data-countryCode="HK" value="852">Hong Kong (+852)</option>
		<option data-countryCode="HU" value="36">Hungary (+36)</option>
		<option data-countryCode="IS" value="354">Iceland (+354)</option>
		<option data-countryCode="IN" value="91">India (+91)</option>
		<option data-countryCode="ID" value="62">Indonesia (+62)</option>
		<option data-countryCode="IR" value="98">Iran (+98)</option>
		<option data-countryCode="IQ" value="964">Iraq (+964)</option>
		<option data-countryCode="IE" value="353">Ireland (+353)</option>
		<option data-countryCode="IL" value="972">Israel (+972)</option>
		<option data-countryCode="IT" value="39">Italy (+39)</option>
		<option data-countryCode="JM" value="1876">Jamaica (+1876)</option>
		<option data-countryCode="JP" value="81">Japan (+81)</option>
		<option data-countryCode="JO" value="962">Jordan (+962)</option>
		<option data-countryCode="KZ" value="7">Kazakhstan (+7)</option>
		<option data-countryCode="KE" value="254">Kenya (+254)</option>
		<option data-countryCode="KI" value="686">Kiribati (+686)</option>
		<option data-countryCode="KP" value="850">Korea North (+850)</option>
		<option data-countryCode="KR" value="82">Korea South (+82)</option>
		<option data-countryCode="KW" value="965">Kuwait (+965)</option>
		<option data-countryCode="KG" value="996">Kyrgyzstan (+996)</option>
		<option data-countryCode="LA" value="856">Laos (+856)</option>
		<option data-countryCode="LV" value="371">Latvia (+371)</option>
		<option data-countryCode="LB" value="961">Lebanon (+961)</option>
		<option data-countryCode="LR" value="231">Liberia (+231)</option>
		<option data-countryCode="LY" value="218">Libya (+218)</option>
		<option data-countryCode="LT" value="370">Lithuania (+370)</option>
		<option data-countryCode="LU" value="352">Luxembourg (+352)</option>
		<option data-countryCode="MO" value="853">Macao (+853)</option>
		<option data-countryCode="MK" value="389">Macedonia (+389)</option>
		<option data-countryCode="MG" value="261">Madagascar (+261)</option>
		<option data-countryCode="MW" value="265">Malawi (+265)</option>
		<option data-countryCode="MY" value="60">Malaysia (+60)</option>
		<option data-countryCode="MV" value="960">Maldives (+960)</option>
		<option data-countryCode="ML" value="223">Mali (+223)</option>
		<option data-countryCode="MT" value="356">Malta (+356)</option>
		<option data-countryCode="MX" value="52">Mexico (+52)</option>
		<option data-countryCode="MN" value="976">Mongolia (+976)</option>
		<option data-countryCode="MA" value="212">Morocco (+212)</option>
		<option data-countryCode="MZ" value="258">Mozambique (+258)</option>
		<option data-countryCode="MN" value="95">Myanmar (+95)</option>
		<option data-countryCode="NA" value="264">Namibia (+264)</option>
		<option data-countryCode="NP" value="977">Nepal (+977)</option>
		<option data-countryCode="NL" value="31">Netherlands (+31)</option>
		<option data-countryCode="NZ" value="64">New Zealand (+64)</option>
		<option data-countryCode="NE" value="227">Niger (+227)</option>
		<option data-countryCode="NG" value="234">Nigeria (+234)</option>
		<option data-countryCode="NO" value="47">Norway (+47)</option>
		<option data-countryCode="OM" value="968">Oman (+968)</option>
		<option data-countryCode="PW" value="680">Palau (+680)</option>
		<option data-countryCode="PA" value="507">Panama (+507)</option>
		<option data-countryCode="PG" value="675">Papua New Guinea (+675)</option>
		<option data-countryCode="PY" value="595">Paraguay (+595)</option>
		<option data-countryCode="PE" value="51">Peru (+51)</option>
		<option data-countryCode="PH" value="63">Philippines (+63)</option>
		<option data-countryCode="PL" value="48">Poland (+48)</option>
		<option data-countryCode="PT" value="351">Portugal (+351)</option>
		<option data-countryCode="QA" value="974">Qatar (+974)</option>
		<option data-countryCode="RO" value="40">Romania (+40)</option>
		<option data-countryCode="RU" value="7">Russia (+7)</option>
		<option data-countryCode="RW" value="250">Rwanda (+250)</option>
		<option data-countryCode="SM" value="378">San Marino (+378)</option>
		<option data-countryCode="SA" value="966">Saudi Arabia (+966)</option>
		<option data-countryCode="SN" value="221">Senegal (+221)</option>
		<option data-countryCode="CS" value="381">Serbia (+381)</option>
		<option data-countryCode="SC" value="248">Seychelles (+248)</option>
		<option data-countryCode="SL" value="232">Sierra Leone (+232)</option>
		<option data-countryCode="SG" value="65">Singapore (+65)</option>
		<option data-countryCode="SK" value="421">Slovak Republic (+421)</option>
		<option data-countryCode="SI" value="386">Slovenia (+386)</option>
		<option data-countryCode="SB" value="677">Solomon Islands (+677)</option>
		<option data-countryCode="SO" value="252">Somalia (+252)</option>
		<option data-countryCode="ZA" value="27">South Africa (+27)</option>
		<option data-countryCode="ES" value="34">Spain (+34)</option>
		<option data-countryCode="LK" value="94">Sri Lanka (+94)</option>
		<option data-countryCode="SD" value="249">Sudan (+249)</option>
		<option data-countryCode="SR" value="597">Suriname (+597)</option>
		<option data-countryCode="SZ" value="268">Swaziland (+268)</option>
		<option data-countryCode="SE" value="46">Sweden (+46)</option>
		<option data-countryCode="CH" value="41">Switzerland (+41)</option>
		<option data-countryCode="SI" value="963">Syria (+963)</option>
		<option data-countryCode="TW" value="886">Taiwan (+886)</option>
		<option data-countryCode="TJ" value="7">Tajikstan (+7)</option>
		<option data-countryCode="TH" value="66">Thailand (+66)</option>
		<option data-countryCode="TO" value="676">Tonga (+676)</option>
		<option data-countryCode="TN" value="216">Tunisia (+216)</option>
		<option data-countryCode="TR" value="90">Turkey (+90)</option>
		<option data-countryCode="TM" value="7">Turkmenistan (+7)</option>
		<option data-countryCode="TM" value="993">Turkmenistan (+993)</option>
		<option data-countryCode="UG" value="256">Uganda (+256)</option>
		<!-- <option data-countryCode="GB" value="44">UK (+44)</option> -->
		<option data-countryCode="UA" value="380">Ukraine (+380)</option>
		<option data-countryCode="AE" value="971">United Arab Emirates (+971)</option>
		<option data-countryCode="UY" value="598">Uruguay (+598)</option>
		<!-- <option data-countryCode="US" value="1">USA (+1)</option> -->
		<option data-countryCode="UZ" value="7">Uzbekistan (+7)</option>
		<option data-countryCode="VA" value="379">Vatican City (+379)</option>
		<option data-countryCode="VE" value="58">Venezuela (+58)</option>
		<option data-countryCode="VN" value="84">Vietnam (+84)</option>
		<option data-countryCode="VG" value="84">Virgin Islands - British (+1284)</option>
		<option data-countryCode="VI" value="84">Virgin Islands - US (+1340)</option>
		<option data-countryCode="YE" value="969">Yemen (North)(+969)</option>
		<option data-countryCode="YE" value="967">Yemen (South)(+967)</option>
		<option data-countryCode="ZM" value="260">Zambia (+260)</option>
		<option data-countryCode="ZW" value="263">Zimbabwe (+263)</option>
        `;
}

// expedia group
function expedia() {
  return `
        <a href="https://www.expediagroup.com/home/default.aspx" target="_blank"
          ><img src="./images/expedia.svg" alt=""
        /></a>

        <div id="company" class="equal_groups">
          <h6>Company</h6>
          <a href="https://www.orbitz.com/lp/b/about" target="_blank">About</a>
          <br />
          <a href="https://lifeatexpediagroup.com/" target="_blank">Jobs</a
          ><br />
          <a
            href="https://welcome.expediagroup.com/en/about-us/join-orbitz"
            target="_blank"
            >List your property</a
          ><br />
          <a href="https://www.expediagroup.com/partnerships/" target="_blank"
            >Partnerships</a
          ><br />
          <a href="">Newsroom</a><br />
          <a href="">Investor Relations</a><br />
          <a href="">Site Map</a><br />
          <a href="">Orbitz Rewards</a><br />
          <a href="">Advertising</a><br />
        </div>

        <div id="explore" class="equal_groups">
          <h6>Explore</h6>
          <a
            href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations"
            target="_blank"
          >
            Hotels in United States</a
          ><br />
          <a
            href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Vacation-Rental-Destinations"
            target="_blank"
          >
            Vacation Rentals in United States</a
          ><br />
          <a
            href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Car-Rental-Destinations"
            target="_blank"
          >
            Car Rentals in United States</a
          ><br />
          <a
            href="https://www.orbitz.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations"
            target="_blank"
          >
            Domestic Flights</a
          ><br />
          <a
            href="https://www.orbitz.com/United-States-Of-America.d201.Destination-Travel-Guides"
            target="_blank"
          >
            Vacation Packages in United States</a
          ><br />
          <a href="https://www.orbitz.com/reviews/"> Orbitz Reviews</a><br />
          <a href=""> Orbitz Coupons</a><br />
          <a href=""> LGBTQ Travel</a><br />
          <a href=""> Unique Accommodations</a><br />
          <a href=""> Travel Blog</a><br />
        </div>

        <div id="policies" class="equal_groups">
          <h6>Policies</h6>
          <a href="https://www.orbitz.com/lp/lg-privacy" target="_blank">
            Privacy Policy</a
          ><br />
          <a href="https://www.orbitz.com/lp/lg-terms" target="_blank">
            Terms of Use</a
          ><br />
          <a
            href="https://www.vrbo.com/legal/terms-and-conditions"
            target="_blank"
          >
            Vrbo terms and conditions</a
          ><br />
          <a href="https://www.orbitz.com/rewards/terms" target="_blank">
            Orbitz Rewards Terms</a
          ><br />
          <a href="https://www.orbitz.com/dnsmpi" target="_blank">
            Do not sell my personal information</a
          ><br />
        </div>

        <div id="help" class="equal_groups">
          <h6>Help</h6>
          <a href="https://www.orbitz.com/service/" target="_blank">Support</a
          ><br />
          <a
            href="https://www.orbitz.com/service/#/articles/560/34/16267"
            target="_blank"
            >Cancel your hotel or vacation rental booking</a
          ><br />
          <a
            href="https://www.orbitz.com/service/#/articles/569/34/16477"
            target="_blank"
            >Cancel your flight</a
          ><br />
          <a
            href="https://www.orbitz.com/service/#/myTrips/16138"
            target="_blank"
            >Refund timelines, policies & processes</a
          ><br />
          <a
            href="https://www.orbitz.com/service/#/article/19518"
            target="_blank"
            >Use an Orbitz Coupon</a
          ><br />
        </div>
  `;
}

// footer part
function footerpart() {
  return `
        <p>
          © 2022 Orbitz, LLC, an Expedia Group Company. All rights reserved.
        </p>
        <p>
          Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered
          trademarks of Orbitz, LLC. CST# 2083930-50.
        </p>
  `;
}

export {
  navbarreturn,
  stays,
  flights,
  cars,
  packages,
  things,
  expedia,
  cruises,
  countryCodes,
  footerpart,
};
