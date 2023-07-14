import { ChangeEvent, useState } from "react";
import { SearchWrapper } from "./styles";

interface SearchProps {
  postsQuantity: number;
  onSearch(query: string): void | Promise<void>;
}

function Search({ postsQuantity, onSearch }: SearchProps) {
  const [query, setQuery] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    void onSearch(e.target.value);
  }

  return (
    <SearchWrapper>
      <label htmlFor="search-post">
        <strong>Publicações</strong>
        <span>
          {postsQuantity} {postsQuantity === 1 ? "publicação" : "publicações"}
        </span>
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
