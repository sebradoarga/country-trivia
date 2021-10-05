export type Country = {
  name: string;
  region: string;
  population: number;
  flag: string;
  languages: Language[];
  message?: string;
  altSpellings: string[];
  borders: string[];
  currencies: Currency[];
  alpha3Code: string;
};

export type Language = {
  name: string;
  nativeName: string;
};

export type Currency = {
  name: string;
};
