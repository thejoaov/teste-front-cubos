import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Genre, Language } from '../../services/api/types';
import { getGenres, getLanguages } from '../../services/api';

export type CachedInfo = {
  genres: Genre[] | null;
  translateGenres: (ids: number[]) => string[];
  languages: Language[] | null;
  getLanguageByName: (name: string) => string;
};

export type CachedInfoData = CachedInfo;

export const CachedInfoContext = createContext<CachedInfoData>(
  {} as CachedInfoData
);

export const CachedInfoProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [languages, setLanguages] = useState<Language[] | null>(null);

  const handleGetLanguages = async () => {
    try {
      const response = await getLanguages();
      setLanguages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetGenres = async () => {
    try {
      const response = await getGenres();
      setGenres(response.data.genres);
    } catch (error) {
      console.error(error);
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

  const getLanguageByName = useCallback(
    (name: string) => {
      if (!languages) return '';
      const language = languages.find((item) => item.iso_639_1 === name);
      return language ? language.name : '';
    },
    [languages]
  );

  useEffect(() => {
    handleGetLanguages();
    handleGetGenres();
  }, []);

  return (
    <CachedInfoContext.Provider
      value={{
        languages,
        genres,
        translateGenres,
        getLanguageByName,
      }}
    >
      {children}
    </CachedInfoContext.Provider>
  );
};
