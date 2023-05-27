export function filterData(searchText, listOfRestaurants) {
    let filters = listOfRestaurants.filter((list) =>
      list?.data?.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filters;
  }