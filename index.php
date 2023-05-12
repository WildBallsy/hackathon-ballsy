<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel=stylesheet href="\assets\css\styles.css">
    <title>Ballsy</title>
    <script src='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js'></script>
    <link href='https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css' rel='stylesheet' />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400&display=swap" rel="stylesheet"> </head>

<body>
    <img src="/hackathon-ballsy/assets/icon/Logo.png" class="logo">
    <a href="list.html" class="cta color">Voir en liste</a>
    <img src="assets/icon/filtre.png" href="filtre.html" class="filterSelector" id="filterSelector">
    <div id='map' style='width: 100vw; height: 80vh;'></div>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoibHVkaXZpbmU5MiIsImEiOiJjbGhqMGR2NHcwZGFzM2RwNTFuYzkxdHBqIn0.-A2WKx18Pk6is64Ynwja2A';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/ludivine92/clhj1p87401j201qygdbc34ch/draft', // style URL
            center: [7.95, 48.5734],
            zoom: 11, // starting zoom
        });
    </script>
    <nav>
    </nav>
    </div>
    <div class="rectangle">
        <div class="contenaire">
            <div class="iconcontenaire">
                <img class="icon" src="assets/icon/carte.png">
                <p> Carte</p>
            </div>
            <div class="iconcontenaire">
                <img class="icon" src="assets/icon/plusbleu.png">
                <p> Ajouter</p>
            </div>
            <div class="iconcontenaire">
                <img class="icon" src="assets/icon/commu.png">
                <p> Communauté</p>
            </div>
        <script src="assets/js/script.js"></script>
        <script src="assets/js/localisation.js"></script>
</body>
</html>