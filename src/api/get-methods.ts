import axios, { AxiosResponse } from "axios";
import { MovieApiResponse } from "../types/api-types";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzI2NzdkYTNkZDEzZWZhOTUwNzIxZmZkMGQ1N2M4NyIsIm5iZiI6MTczMTkzMTk1MC43OTE3ODk1LCJzdWIiOiI2NTBiMDk2OTUwMWNmMjAwYWRlZjM5YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kofsqv9psyYCSUqBlY7SZXXoF3OA7tJrmFk19EyuBwM'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};


export const getMoviesList = async (search: string ) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}`;
  try {
    const response: AxiosResponse<MovieApiResponse> = await axios.get(url, options);
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('Something was wrong. Try it later!');
    }
  }
}