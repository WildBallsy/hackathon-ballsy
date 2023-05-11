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

</head>
<body>
    <a href="list.html" class="cta">Voir en liste</a>
    <img src="assets/icon/filtre.png" href="/hackathon-ballsy/filtre.php" class="cta-filtre">
    <div id='map' style='width: 800px; height: 700px;'></div>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoibHVkaXZpbmU5MiIsImEiOiJjbGhqMGR2NHcwZGFzM2RwNTFuYzkxdHBqIn0.-A2WKx18Pk6is64Ynwja2A';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/ludivine92/clhj1p87401j201qygdbc34ch/draft', // style URL
            center: [7.95, 48.5734],
            zoom: 9, // starting zoom
        });
    </script>
    
     <div class="rectangle"></div>
    <nav>
    <div class="contenaire">
        <div class="iconcontenaire">
        <img class ="icon" src="assets/icon/carte.png">
        <img class ="icon" src="assets/icon/plus.png">
        <img class ="icon" src="assets/icon/commu.png">
        </div>
        <div class="ulcontenaire">
        <ul>Carte</ul>
        <ul>Ajouter</ul>
        <ul >Communauté</ul>
        </div>
    </nav>
    </div>
</body>
</html>