import { useContext } from 'react';
import { CachedInfoContext, CachedInfoData } from '../contexts/cachedInfo';

export default function useCachedInfo(): CachedInfoData {
  const context = useContext(CachedInfoContext);

  if (!context) {
    throw new Error('useCachedInfo must be used within an Provider');
  }

  return context;
}
