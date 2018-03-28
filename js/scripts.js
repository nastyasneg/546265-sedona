var link = document.querySelector(".button-open-form");
var popup = document.querySelector(".modal");

var form = popup.querySelector("form");
var dateArrival = popup.querySelector("[name=arrival-date]");
var dateDeparture = popup.querySelector("[name=departure-date]");
var ageAdults = popup.querySelector("[name=adults]");
var ageKids = popup.querySelector("[name=kids]");

var isStorageSupport = true;
var storageAdults = "";
var storageKids = "";

try {
storageAdults = localStorage.getItem("ageAdults");
storageKids = localStorage.getItem("ageKids");
} catch (err) {
isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");

  if (storageAdults) {
    ageAdults.value = storageAdults;
  }
  if (storageKids) {
    ageKids.value = storageKids;
  }

  dateArrival.focus();
});

form.addEventListener("submit", function (evt) {
  if (!dateArrival.value || !dateDeparture.value || !ageAdults.value || !ageKids.value) {
  evt.preventDefault();
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
  localStorage.setItem("ageAdults", ageAdults.value);
  localStorage.setItem("ageKids", ageKids.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
