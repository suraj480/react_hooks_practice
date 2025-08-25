import React, { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // cleanup
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 500); // wait 500ms

  useEffect(() => {
    if (debouncedQuery) {
      console.log("🔍 Fetching data for:", debouncedQuery);

      // Fake API call (using jsonplaceholder)
      fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.slice(0, 5)); // just show first 5 results
        })
        .catch((err) => console.error(err));
    } else {
      setResults([]); // reset if input is empty
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <ul className="mt-4 space-y-2">
        {results.map((post) => (
          <li key={post.id} className="border p-2 rounded bg-gray-50">
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
