const filterSelection = document.getElementById('filterSelector');
let filterListInvisible = false;
let filtersList = null;

filterSelection.addEventListener('click', toggleFilters);

function toggleFilters() {
  if (!filterListInvisible) {
    filtersList = document.createElement('ul');
    filtersList.style.position = 'absolute';

    const filterOptions = [
      { id: 'couvert-filter', label: 'Couvert' },
      { id: 'buvette-filter', label: 'Buvette' },
      { id: 'eclairage-filter', label: 'Eclairage' },
      { id: 'terreBattue-filter', label: 'Terre Battue' },
      { id: 'stabilisee-filter', label: 'Stabilisée' },
      { id: 'surfaceNaturelle-filter', label: 'Surface Naturelle' },
      { id: 'sable-filter', label: 'Sable' }
    ];

    filterOptions.forEach(option => {
      const filterLine = document.createElement('li');
      const filterOption = document.createElement('input');
      filterOption.type = 'checkbox';
      filterOption.id = option.id;
      filterOption.addEventListener('click', handleFilterOption);
      const label = document.createElement('label');
      label.textContent = option.label;
      label.addEventListener('click', handleFilterOption);

      filterLine.appendChild(filterOption);
      filterLine.appendChild(label);
      filtersList.appendChild(filterLine);
    });

    const categorizeOption = document.createElement('h3')
    categorizeOption.textContent = 'Type de sol'
    filtersList.insertBefore(categorizeOption, filtersList.childNodes[3]);
    
    const filterSelectionRect = filterSelection.getBoundingClientRect();
    filtersList.style.zIndex = '4';
    filtersList.style.top = `${filterSelectionRect.bottom +10}px`;
    filtersList.style.left = `${filterSelectionRect.left - 50}px`;
    document.body.appendChild(filtersList);
  } else {
    filtersList.remove();
  }
  filterListInvisible = !filterListInvisible;
}

function handleFilterOption() {
  // handle user input from the filter options
  // make API request with new filter settings and update the map
}