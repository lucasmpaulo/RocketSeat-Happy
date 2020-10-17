// Create map
const map = L.map("mapid").setView([-29.9181289, -51.1821595], 15);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create Icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// Create and add marker
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon layer add before
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// add photo field
function addPhotoField() {
  // Catch the photos container #images
  const container = document.querySelector("#images");
  // Duplicate .new-image container
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // Clone the last photo add
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // Verify if field was null, if it yes, dont add into a new images container
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }
  // Clear field before add to the images container
  input.value = "";
  // Add the clone in the container of images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer.length <= 1) {
    // Clear field
    span.parentNode.children[0].value = "";
    return;
  }

  // Delete field
  span.parentNode.remove();
}

// select button yes or no
function toggleSelect(event) {
  // Take the button selected
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  // Verify which button was selected and add .active class
  const button = event.currentTarget;
  button.classList.add("active");
  // Update our input hidden with the value selected
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}

// Validate form
function validade(event) {
  // Validar se lat e lng estão preenchidos
  const lat = document.querySelector("[name=lat]").value;
  const lng = document.querySelector("[name=lng]").value;

  if (lat == "" || lng == "") {
    event.preventDefault();
    alert("Selecione um ponto no mapa");
  } else {
    return;
  }
}
