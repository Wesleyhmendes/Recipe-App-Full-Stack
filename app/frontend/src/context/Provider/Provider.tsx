import { useLocation } from 'react-router-dom';
import Context from '../Context';
import useRecipesProvider from '../../hooks/useRecipesProvider';

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const path = useLocation().pathname;
  const route = path.includes('meals') ? '/meals' : '/drinks';
  const {
    selectedCategory,
    filter,
    formattedFavorites,
    getCategories,
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
    getPages,
  } = useRecipesProvider(route);

  const value = {
    route,
    selectedCategory,
    filter,
    formattedFavorites,
    getCategories,
    filterDispatch,
    setRecipesFilter,
    setByFilterURL,
    getRecipesByFilter,
    getSelectedCategory,
    getByCategory,
    getAllRecipes,
    getPages,
  };

  return (
    <Context.Provider value={ value }>
      { children }
    </Context.Provider>
  );
}
