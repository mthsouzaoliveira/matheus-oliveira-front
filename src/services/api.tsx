import axios from "axios";
import { TypeCountry, TypeCountryByDate, TypeSummary } from "../Types";

const api = axios.create({
  baseURL: "https://api.covid19api.com",
});

const getCountryByDate = async ({
  slug,
  from,
  to,
}: TypeCountryByDate): Promise<TypeCountry[]> => {
  try {
    const query = { params: { from, to } };
    const response = await api.get<TypeCountry[]>(`country/${slug}`, query);
    return response?.data;
  } catch (error) {
    return [];
  }
};

const getCountry = async (slug: string): Promise<TypeCountry[]> => {
  try {
    const response = await api.get<TypeCountry[]>(
      `total/dayone/country/${slug}`
    );
    return response?.data;
  } catch (error) {
    return [];
  }
};

const getSummary = async (): Promise<TypeSummary> => {
  try {
    const response = await api.get<TypeSummary>("summary");
    return response?.data;
  } catch (error) {
    return {
      Countries: [],
      Global: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        TotalRecovered: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
      },
    };
  }
};

export default api;
export { getSummary, getCountry, getCountryByDate };
