import React, { useState } from "react";
import Filter from "./components/filter";
import Cards from "./components/cards";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    category: "all",
    company: "",
    sort: "",
    price: 0,
  });

  const handleChange = (Filter) => {
    setFilters(Filter);
  };

  return (
    <div>
      <Filter onFilterChange={handleChange} />
      <Cards filters={filters} />
    </div>
  );
}

export default App;
