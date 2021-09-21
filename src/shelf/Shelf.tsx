import React, { useEffect, useState } from "react";
import "./Shelf.css";
import ShelfItem from "./shelf-item/ShelfItem";
import { Product } from "../common/types";

const Shelf: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://bah-zar-api.herokuapp.com/product";
    isLoading &&
      fetch(url)
        .then((res) => res.json())
        .then((products) => {
          setProducts(products);
          setIsLoading(false);
        });
    return () => setIsLoading(false);
  }, []);

  return (
    <div className="shelf">
      <div>{isLoading && <span>Loading...</span>}</div>
      {products &&
        products.map((product: Product) => (
          <ShelfItem key={product._id} {...product} />
        ))}
    </div>
  );
};

export default Shelf;