import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';
import type { Country } from '@/types/api';

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref<Country[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchCountries = async () => {
    if (countries.value.length > 0) return;
    
    loading.value = true;
    try {
      const fields = 'name,capital,currencies,languages,population,region,subregion,flags,alpha3Code, ';
      const response = await axios.get(`https://restcountries.com/v2/all?fields=${fields}`);
      countries.value = response.data;
    } catch (err) {
      error.value = 'Failed to load countries';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  const getCountryByCode = (code: string) => {
    return countries.value.find(c => c.alpha3Code === code);
  };

  const getBorderNames = (codes: string[]) => {
    return codes.map(code => {
      const country = countries.value.find(c => c.alpha3Code === code);
      return country ? country.name : code;
    });
  };

  return { countries, loading, error, fetchCountries, getCountryByCode, getBorderNames };
});