import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useFetchData(queryKey, urlVariant, fetchFromRapidAPI) {
  const { data, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = fetchFromRapidAPI
        ? await axios.get(`https://car-api2.p.rapidapi.com/api/${urlVariant}`, {
            // headers: {
            //   "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
            //   "X-RapidAPI-Host": process.env.HOST,
            // },
            headers: {
              "X-RapidAPI-Key":
                "",
              "X-RapidAPI-Host": "",
            },
          })
        : await axios.get(
            ``
          );
      return res.data
    },
    select: (data) => {
      return fetchFromRapidAPI ? data.data : data;
    },
  });

  return { data, isLoading };
}
