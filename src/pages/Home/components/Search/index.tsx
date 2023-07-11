import { SearchWrapper } from "./styles";

function Search() {
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
      />
    </SearchWrapper>
  );
}

export default Search;
