<?php

function searchAPI($numberResult)
{


    // URL de l'API
    $url = 'https://equipements.sports.gouv.fr/api/records/1.0/search/?dataset=data-es&q=&facet=famille&facet=caract24&facet=caract25&facet=caract74&facet=caract33&facet=caract156&facet=caract159&facet=caract167&facet=caract168&facet=caract169&facet=atlas&facet=nom_region&facet=nom_dept&refine.famille=Boulodrome&rows=' . $numberResult . '';

    // Récupération des données de l'API
    $data = file_get_contents($url);

    // Conversion des données JSON en tableau associatif
    $equipements = json_decode($data, true);


    return $equipements;
}

var_dump(searchAPI(100));
