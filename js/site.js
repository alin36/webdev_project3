let locations = [
  {
    position: { lat: 41.83691800002017, lng: -87.6260175785046 },
    title: "Illinois Institute of Technology",
  },
  {
    position: { lat: 41.83587163134398, lng: -87.62863338210951 },
    title: "Hermann Hall",
  },
  {
    position: { lat: 41.835687778029055, lng: -87.62531817196673 },
    title: "McCormick Tribune Campus Center",
  },
  {
    position: { lat: 41.83718257011989, lng: -87.62406289802443 },
    title: "Gunsaulus Hall",
  },
  {
    position: { lat: 41.835479943210515, lng: -87.62819349946629 },
    title: "IIT's The Bog",
  },
];

async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  //Allows map control/functions
  const map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 41.83691800002017, lng: -87.6260175785046 },
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
    mapId: "9338c0b262c8f52"
  });
  const infoWindow = new InfoWindow();
  //Shows markers for 5 IIT locations
  locations.forEach(({ position, title }, i) => {
    const pin = new PinElement({ glyph: `${i + 1}` });

    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
      gmpClickable: true,
    });
  //Adds a description to each marker
    marker.addListener("click", ({ domEvent, latLng }) => {
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}
window.addEventListener('load', initMap);

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

window.onload = function() {
  showSlides(slideIndex);
};
