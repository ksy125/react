import { useEffect, useState } from "react";

const Effect = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string>("");

  const fetchData = async () => {
    setLoading(() => true);
    const response = await fetch("https://fakerapi.it/api/v1/addresses?_quantity=1");
    const result = await response.json();
    setCity(result.data[0].city);
    setLoading(() => false);
  };
  const reload = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return <div onClick={reload}>effect {loading ? "로딩중" : city}</div>;
};
export default Effect;
