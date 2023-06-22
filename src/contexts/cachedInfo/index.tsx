import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Genre } from '../../services/api/types';
import { getGenres } from '../../services/api';

export type CachedInfo = {
  genres: Genre[] | null;
  translateGenres: (ids: number[]) => string[];
};

export type CachedInfoData = CachedInfo;

export const CachedInfoContext = createContext<CachedInfoData>(
  {} as CachedInfoData
);

export const CachedInfoProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [genres, setGenres] = useState<Genre[] | null>(null);

  const handleGetGenres = async () => {
    try {
      const response = await getGenres();
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const translateGenres = useCallback(
    (ids: number[]) => {
      if (!genres) return [];
      return genres
        .filter((genre) => ids.includes(genre.id))
        .map((item) => item.name);
    },
    [genres]
  );

  useEffect(() => {
    handleGetGenres();
  }, []);

  return (
    <CachedInfoContext.Provider
      value={{
        genres,
        translateGenres,
      }}
    >
      {children}
    </CachedInfoContext.Provider>
  );
};
