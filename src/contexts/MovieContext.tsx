import { createContext } from "react";
import type { Movie } from "../types/Movie";

type MovieContextType = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
};
export const MovieContext = createContext<MovieContextType | null>(null);
