//     const name = record.fields.nominstallation;
//     const address = record.fields.adresse;
//     const zip = record.fields.codeinsee;
//     const commune = record.fields.commune;
//     const coordgpsy = record.fields.coordgpsy;
//     const coordgpsx = record.fields.coordgpsx;
//     const typeSol = record.fields.caract167;
//     const couvert = record.fields.caract168;
//     const eclairage = record.fields.caract24;
//     const buvette = record.fields.caract156;
//     const listItem = document.createElement("p");

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVkaXZpbmU5MiIsImEiOiJjbGhqMGR2NHcwZGFzM2RwNTFuYzkxdHBqIn0.-A2WKx18Pk6is64Ynwja2A";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("La géolocalisation n'est pas supportée par ce navigateur.");
  }
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  fetchData(lat, lon);
  map.setCenter([lon, lat]);
  new mapboxgl.Marker({ color: "red" }).setLngLat([lon, lat]).addTo(map);
}

function fetchData(lat, lon, start = 0) {
  const rows = 50;
  const meters = 5000;
  const url = `https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&q=&rows=${rows}&start=${start}&facet=famille&facet=caract24&facet=caract25&facet=caract74&facet=caract33&facet=caract156&facet=caract159&facet=caract167&facet=caract168&facet=caract169&facet=atlas&facet=nom_region&facet=nom_dept&refine.famille=Boulodrome&geofilter.distance=${lat},${lon},${meters}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      addMarkers(data);
    })
    .catch((error) => console.log(error));
}

function addMarkers(data) {
  const markerList = [];

  data.records.forEach((record) => {
    const name = record.fields.nominstallation;
    const address = record.fields.adresse;
    const lat = record.fields.coordgpsy;
    const lon = record.fields.coordgpsx;

    const marker = new mapboxgl.Marker()
      .setLngLat([lon, lat])
      .setPopup(
        new mapboxgl.Popup().setHTML(`<h3>${name}</h3><p>${address}</p>`)
      );
    markerList.push(marker);
  });

  markerList.forEach((marker) => {
    marker.addTo(map);
  });
}

getLocation();
