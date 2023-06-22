import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { Genre } from '../../services/api/types';
import { getGenres } from '../../services/api';

export type CachedInfo = {
  genres: Genre[] | null;
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

  useEffect(() => {
    handleGetGenres();
  }, []);

  return (
    <CachedInfoContext.Provider
      value={{
        genres,
      }}
    >
      {children}
    </CachedInfoContext.Provider>
  );
};
