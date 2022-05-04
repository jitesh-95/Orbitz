function stays() {
  return `
        <div id="input_panels">
            <div id="going_to">
              <span class="material-symbols-outlined"> pin_drop </span>Going to
            </div>
            <div class="checkin">
              <p>Check-in</p>
              <input type="date" id="checkin_input" />
            </div>
            <div class="checkout">
              <p>Check-out</p>
              <input type="date" id="checkout_input" />
            </div>
            <div id="travel_box">
              <span class="material-symbols-outlined">person</span>
              <div class="travel_count_div">
                <p id="travelers">Travelers</p>
                <p id="room">1 room,</p>
                <p id="person_count">2 Travelers</p>
              </div>
            </div>
        </div>
        <div id="checkboxes">
            <input type="checkbox" id="addflight" /> Add a flight
            <input type="checkbox" id="addcar" /> Add a car
        </div>
        <button id="submit">Submit</button>
        `;
}
export { stays };
