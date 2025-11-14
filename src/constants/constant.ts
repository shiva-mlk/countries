export type Region = {
  value: string;
  label: string;
};

export type SortOption = {
  value: string;
  label: string;
};

export const REGIONS: Region[] = [
  { value: '', label: 'All Regions' },
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
];

export const SORT_OPTIONS: SortOption[] = [
  { value: 'population-desc', label: 'Pop: High to Low' },
  { value: 'population-asc', label: 'Pop: Low to High' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' }
];

export const DEFAULT_SORT = 'population-desc';

export const SEARCH_PLACEHOLDER = 'Search for a country...';

export const LOADING_MESSAGE = 'Loading...';

export const FUSE_CONFIG = {
  keys: ['name', 'alpha3Code'],
  threshold: 0.4
};
