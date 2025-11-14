export type Currency = {
  code: string;
  name: string;
  symbol: string;
}

export type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export type Country = {
  name: string;
  topLevelDomain: string[];
  alpha3Code: string;
  capital?: string;
  subregion: string;
  region: string;
  population: number;
  borders?: string[];
  nativeName: string;
  flags: { svg: string; png: string };
  currencies?: Currency[];
  languages: Language[];
}
