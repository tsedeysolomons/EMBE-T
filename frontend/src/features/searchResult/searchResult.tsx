import { useGetTrainsQuery } from "./searchApiSlice";

const SearchApiSlice = () => {
  const { data: trains, error } = useGetTrainsQuery({});

  if (error) return <div>Error: {error?.message}</div>;

  if (!trains) return <div>Loading...</div>;

  return <div>{JSON.stringify(trains)}</div>;
};

export default SearchApiSlice;
