import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {}, []);

  return <div>프로덕트 {id}</div>;
};

export default Product;
