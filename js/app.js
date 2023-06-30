const $ = document;
const yearInput = $.querySelector(".year");
const monthInput = $.querySelector(".month");
const dayInput = $.querySelector(".day");
const errorPart = $.querySelectorAll(".error");

// Merge inputs for display error message
const inputs = [yearInput, monthInput, dayInput];

const yearResult = $.querySelector(".yearRes");
const monthResult = $.querySelector(".monthRes");
const dayResult = $.querySelector(".dayRes");

const btnElement = $.querySelector(".btn");

const date = new Date();
const yearDate = date.getFullYear();
const monthDate = date.getMonth() + 1;
const dayDate = date.getDate();

// Calculate the days of the previous month
const prevDayofMonth = new Date(new Date().setDate(1)).toISOString();

btnElement.addEventListener("click", function (e) {
  e.preventDefault();

  inputs.forEach(function (input) {

    // If the inputs was empty
    if (input.value == "") {
      errorPart[0].innerHTML = "This field is required";
      errorPart[1].innerHTML = "This field is required";
      errorPart[2].innerHTML = "This field is required";
      input.style.border = "1px solid var(--primary-light-red)";
    } else {
        
      //If the day, month and year are greater than the original value
      if (
        dayInput.value > 31 ||
        monthInput.value > 12 ||
        yearInput.value > yearDate
      ) {
        errorPart[0].innerHTML = "Must be a valid day";
        errorPart[1].innerHTML = "Must be a valid month";
        errorPart[2].innerHTML = "Must be a valid past";
        input.style.border = "1px solid var(--primary-light-red)";

        // Final resault
      } else {
        yearResult.innerHTML = yearDate - yearInput.value;
        if (monthDate > monthInput.value) {
          monthResult.innerHTML = monthDate - monthInput.value;
        } else {
          yearResult.innerHTML = yearDate - yearInput.value - 1;
          monthResult.innerHTML = 12 - monthInput.value + monthDate;
        }

        if (dayInput.value < dayDate) {
          dayResult.innerHTML = dayDate - dayInput.value;
        } else {
          monthResult.innerHTML = monthDate - monthInput.value - 1;
          dayResult.innerHTML = prevDayofMonth - (dayInput.value - dayDate);
        }
        errorPart[0].innerHTML = "";
        errorPart[1].innerHTML = "";
        errorPart[2].innerHTML = "";
        input.style.border = "";
      }
    }
  });
});
