// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//     console.log("La géolocalisation n'est pas supportée par ce navigateur.");
//   }
// }

// function showPosition(position) {
//   let lat = position.coords.latitude;
//   let lon = position.coords.longitude;
//   fetchData(lat, lon);
// }

// function fetchData(lat, lon, start = 0) {
//   const rows = 50;
//   const meters = 5000;
//   const url = `https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&q=&rows=${rows}&start=${start}&facet=famille&facet=caract24&facet=caract25&facet=caract74&facet=caract33&facet=caract156&facet=caract159&facet=caract167&facet=caract168&facet=caract169&facet=atlas&facet=nom_region&facet=nom_dept&refine.famille=Boulodrome&geofilter.distance=${lat},${lon},${meters}`;

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       displayData(data);

//       // Si nous avons encore des résultats, continuez à les récupérer en utilisant la pagination
//       if (data.nhits > start + rows) {
//         fetchData(lat, lon, start + rows);
//       }
//     });
// }

// function displayData(data) {
//   const records = data.records;
//   const resultsDiv = document.getElementById("results");

//   records.forEach((record) => {
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
//     listItem.textContent = `${name} - ${address} - ${zip} - ${commune} - ${coordgpsy} - ${coordgpsx} - ${typeSol} - ${couvert} - ${eclairage} - ${buvette}`;
//     resultsDiv.appendChild(listItem);
//   });
// }
// getLocation();

// function addMarkers(data) {
//   const markerList = [];

//   data.records.forEach((record) => {
//     const name = record.fields.nominstallation;
//     const address = record.fields.adresse;
//     const lat = record.fields.coordgpsy;
//     const lon = record.fields.coordgpsx;

//     const marker = new mapboxgl.Marker()
//       .setLngLat([lon, lat])
//       .setPopup(
//         new mapboxgl.Popup().setHTML(`<h3>${name}</h3><p>${address}</p>`)
//       );
//     markerList.push(marker);
//   });

//   const markerCluster = new Supercluster({
//     radius: 50,
//     maxZoom: 14,
//   });

//   markerCluster.load(
//     markerList.map((marker) => ({
//       geometry: { coordinates: marker.getLngLat().toArray() },
//     }))
//   );

//   map.addLayer({
//     id: "markers",
//     type: "symbol",
//     source: {
//       type: "geojson",
//       data: {
//         type: "FeatureCollection",
//         features: markerList.map((marker) => ({
//           type: "Feature",
//           geometry: {
//             type: "Point",
//             coordinates: marker.getLngLat().toArray(),
//           },
//         })),
//       },
//     },
//     layout: {
//       "icon-image": "marker-15",
//       "icon-allow-overlap": true,
//     },
//     filter: ["!", ["has", "point_count"]],
//   });

//   map.addLayer({
//     id: "clusters",
//     type: "symbol",
//     source: {
//       type: "geojson",
//       data: markerCluster.getClusterExpansionZoom(0, 14).map((feature) => ({
//         type: "Feature",
//         properties: {
//           point_count: feature.properties.point_count,
//         },
//         geometry: {
//           type: "Point",
//           coordinates: feature.geometry.coordinates,
//         },
//       })),
//     },
//     layout: {
//       "text-field": "{point_count}",
//       "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
//       "text-size": 12,
//       "text-allow-overlap": true,
//     },
//     paint: {
//       "text-color": "#ffffff",
//       "text-halo-color": "#4b4f56",
//       "text-halo-width": 2,
//       "text-halo-blur": 1,
//       "text-opacity": 0.9,
//       "text-translate": [0, -2],
//     },
//     filter: ["has", "point_count"],
//   });

//   map.on("click", "clusters", (e) => {
//     const features = map.queryRenderedFeatures(e.point, {
//       layers: ["clusters"],
//     });

//     const clusterId = features[0].properties.cluster_id;
//     const cluster = markerCluster.getClusterExpansionZoom(clusterId);

//     if (cluster) {
//       map.easeTo({
//         center: cluster.geometry.coordinates,
//         zoom: cluster.properties.cluster_id + 2,
//       });
//     }
//   });

//   map.on("mouseenter", "clusters", () => {
//     map.getCanvas().style.cursor = "pointer";
//   });

//   map.on("mouseleave", "clusters", () => {
//     map.getCanvas().style.cursor = "";
//   });
// }

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
