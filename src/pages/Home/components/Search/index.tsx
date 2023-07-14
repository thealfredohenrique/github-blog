import { ChangeEvent, useState } from "react";
import { SearchWrapper } from "./styles";

interface SearchProps {
  onSearch(query: string): void | Promise<void>;
}

function Search({ onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    void onSearch(e.target.value);
  }

  return (
    <SearchWrapper>
      <label htmlFor="search-post">
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </label>
      <input
        type="text"
        id="search-post"
        placeholder="Buscar conteúdo"
        spellCheck={false}
        value={query}
        onChange={handleChange}
      />
    </SearchWrapper>
  );
}

export default Search;
