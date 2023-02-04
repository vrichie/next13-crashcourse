import React from "react";

const search = async (searchTerm) => {
  const API_KEY =
    "9a9cc6e060d98debbd82a55a959bba7e9a04e27bc96f878f5b92be2af970df7e";
  const response = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${API_KEY}`
  );
  // throw new Error("Something went wrong");
  const data = await response.json();
  // console.log(data);
  return data;
};

export default async function SearchResults(props) {
  const searchTerm = await props.params.searchTerm;
  const searchResults = await search(searchTerm);
  // console.log(searchResults);
  // console.log(searchTerm);
  return (
    <div>
      <p className="text-gray-500 text-sm">you searched for:{searchTerm}</p>
      <ul className="space-y-5 p-5">
        {searchResults.organic_results.map((result) => (
          <li key={result.position} className="flex items-center space-x-2">
            <h1>{result.title}</h1>
            <br />
            <p>{result.snippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
