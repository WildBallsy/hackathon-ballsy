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
  
  function fetchData(lat, lon, start = 0) {
    const rows = 50;
    const meters = 5000;
    const url = `https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&q=&rows=${rows}&start=${start}&facet=famille&facet=caract24&facet=caract25&facet=caract74&facet=caract33&facet=caract156&facet=caract159&facet=caract167&facet=caract168&facet=caract169&facet=atlas&facet=nom_region&facet=nom_dept&refine.famille=Boulodrome&geofilter.distance=${lat},${lon},${meters}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayList(data.records);
      })
      .catch((error) => console.log(error));
  }
  
  function displayList(records) {
    const dataList = document.getElementById("data-list");
  
    // Supprimez tous les éléments enfants existants de la liste
    dataList.innerHTML = "";
  
    // Parcours des enregistrements et génération des éléments de liste
    records.forEach((record) => {
      const name = record.fields.nominstallation;
      const address = record.fields.adresse;
  
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h3>${name}</h3><p>${address}</p>`;
  
      dataList.appendChild(listItem);
    });
  }
  
  getLocation();