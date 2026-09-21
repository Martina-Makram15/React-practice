// import { useState } from "react";
// import SearchInput from "./SearchInput";
// import SuggestedList from "./SuggestedList";
// const Search = () => {
//   const countries = ["Egypt", "England", "France"];
//   const [searchInput, setSearchInput] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState("");

//   const filteredCountries = countries.filter((country) =>
//     country.toLowerCase().includes(searchInput.toLowerCase()),
//   );

//   const handleSelectCountry = (selectedCountry) => {
//     setSelectedCountry(selectedCountry);
//     setSearchInput(selectedCountry);
//   };
//   return (
//     <div>
//       <SearchInput value={searchInput} onChange={setSearchInput} />
//       {searchInput && (
//         <SuggestedList
//           filteredCountries={filteredCountries}
//           onSelect={handleSelectCountry}
//         />
//       )}

//       {selectedCountry && <p className="mt-5">Selected: {selectedCountry}</p>}
//     </div>
//   );
// };

// export default Search;
