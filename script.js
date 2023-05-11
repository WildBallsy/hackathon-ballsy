  const filterSelection = document.getElementById('filterSelector');
  let filterListInvisible = false;
  let filtersList = null;
  filterSelection.addEventListener('click', toggleFilters);

  function toggleFilters() {

  if (!filterListInvisible) {
    // create a list of filters
  filtersList = document.createElement('ul');

    // add filter options to the list
    const filterLine1 = document.createElement('li');

    const filterOption1 = document.createElement('input');
    filterOption1.type = 'checkbox';
    filterOption1.id = 'couvert-filter';
    const label1 = document.createElement('label');
    label1.textContent = 'Couvert';
    filterOption1.addEventListener('click', handleFilterOption);


    const filterLine2 = document.createElement('li');

    const filterOption2 = document.createElement('input');
    filterOption2.type='checkbox'
    filterOption2.id = 'buvette-filter'
    filterOption2.textContent = 'Buvette';
    filterOption2.addEventListener('click', handleFilterOption);

    const label2 = document.createElement('label');
    label2.textContent = 'Buvette';
    filterOption2.addEventListener('click', handleFilterOption);

    const filterLine3 = document.createElement('li');
    
    const filterOption3 = document.createElement('input');
    filterOption3.type = 'checkbox';
    filterOption3.id = 'eclairage-filter'
    filterOption3.textContent = 'Eclairage';
    filterOption3.addEventListener('click', handleFilterOption);

    const label3 = document.createElement('label');
    label3.textContent = 'Eclairage';
    filterOption3.addEventListener('click', handleFilterOption);

    const categorizeOption = document.createElement('h3')
    categorizeOption.textContent = 'Type de sol'

    const filterLine4 = document.createElement('li');
    
    const filterOption4 = document.createElement('input');
    filterOption4.type = 'checkbox';
    filterOption4.id = 'terreBattue-filter'
    filterOption4.addEventListener('click', handleFilterOption);

    const label4 = document.createElement('label');
    label4.textContent = 'Terre Battue';
    filterOption4.addEventListener('click', handleFilterOption);


    const filterLine5 = document.createElement('li');
    
    const filterOption5 = document.createElement('input');
    filterOption5.type = 'checkbox';
    filterOption5.id = 'stabilisee-filter'
    filterOption5.addEventListener('click', handleFilterOption);

    const label5 = document.createElement('label');
    label5.textContent = 'Stabilisée';
    filterOption5.addEventListener('click', handleFilterOption);


    const filterLine6 = document.createElement('li');
    
    const filterOption6 = document.createElement('input');
    filterOption6.type = 'checkbox';
    filterOption6.id = 'surfaceNaturelle-filter'
    filterOption6.addEventListener('click', handleFilterOption);

    const label6 = document.createElement('label');
    label6.textContent = 'Surface Naturelle';
    filterOption6.addEventListener('click', handleFilterOption);

    const filterLine7 = document.createElement('li');
    
    const filterOption7 = document.createElement('input');
    filterOption7.type = 'checkbox';
    filterOption7.id = 'sable-filter'
    filterOption7.addEventListener('click', handleFilterOption);

    const label7 = document.createElement('label');
    label7.textContent = 'Sable';
    filterOption7.addEventListener('click', handleFilterOption);

    filtersList.appendChild(filterLine1);
    filterLine1.appendChild(filterOption1);
    filterLine1.appendChild(label1);

    filtersList.appendChild(filterLine2);
    filterLine2.appendChild(filterOption2);
    filterLine2.appendChild(label2);

    filtersList.appendChild(filterLine3);
    filterLine3.appendChild(filterOption3);
    filterLine3.appendChild(label3);

    filtersList.appendChild(categorizeOption);

    filtersList.appendChild(filterLine4);
    filterLine4.appendChild(filterOption4);
    filterLine4.appendChild(label4);

    filtersList.appendChild(filterLine5);
    filterLine5.appendChild(filterOption5);
    filterLine5.appendChild(label5);

    filtersList.appendChild(filterLine6);
    filterLine6.appendChild(filterOption6);
    filterLine6.appendChild(label6);

    filtersList.appendChild(filterLine7);
    filterLine7.appendChild(filterOption7);
    filterLine7.appendChild(label7);

    // display the list of filters
    document.body.appendChild(filtersList);
  }
  else {
    filtersList.remove();
  }
  filterListInvisible =!filterListInvisible
  function handleFilterOption() {
    // handle user input from the filter options
    // make API request with new filter settings and update the map
  }
  }