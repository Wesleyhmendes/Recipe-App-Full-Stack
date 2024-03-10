import { ChangeEvent, FormEvent, useContext } from 'react';
import Context from '../../context/Context';

function SearchBar() {
  const RESET_SEARCH = 'RESET_SEARCH';
  const SET_SEARCH = 'SET_SEARCH';
  const { filter, setRecipesFilter, filterDispatch } = useContext(Context);

  const handleFilterChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    filterDispatch({ type: SET_SEARCH, key: name, value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRecipesFilter(filter);
    filterDispatch({ type: RESET_SEARCH });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label>
          <input
            data-testid="search-input"
            name="search"
            value={ filter.search }
            onChange={ handleFilterChange }
            type="text"
            required
          />
        </label>

        <label>
          <input
            name="radioSelected"
            value="i"
            onChange={ handleFilterChange }
            defaultChecked
            data-testid="ingredient-search-radio"
            type="radio"
            required
          />
          Ingredient
        </label>

        <label>
          <input
            name="radioSelected"
            value="s"
            onChange={ handleFilterChange }
            data-testid="name-search-radio"
            type="radio"
            required
          />
          Name
        </label>

        <label>
          <input
            name="radioSelected"
            value="f"
            onChange={ handleFilterChange }
            data-testid="first-letter-search-radio"
            type="radio"
            required
          />
          First Letter
        </label>

        <button
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
