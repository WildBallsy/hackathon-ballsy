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
}

function fetchData(lat, lon) {
  const url = `https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&q=&facet=famille&facet=caract24&facet=caract25&facet=caract74&facet=caract33&facet=caract156&facet=caract159&facet=caract167&facet=caract168&facet=caract169&facet=atlas&facet=nom_region&facet=nom_dept&refine.famille=Boulodrome&start=&geofilter.distance=${lat},${lon},10000`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const records = data.records;
  const resultsDiv = document.getElementById("results");

  records.forEach((record) => {
    const name = record.fields.nom;
    const address = record.fields.adresse;
    const listItem = document.createElement("p");
    listItem.textContent = `${name} - ${address}`;
    resultsDiv.appendChild(listItem);
  });
}

getLocation();
