import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, url } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (intputValue) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Kozhikode&appid=8307b0abef19472909aee6f9149e1fac`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response,'the response in the hand'))
      .catch((err) => console.log(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for city "
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
