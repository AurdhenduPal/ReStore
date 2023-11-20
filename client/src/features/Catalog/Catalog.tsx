import { Button } from "@mui/material";
import { Product } from "../../app/Models/Product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5148/Products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  function addProduct() {
    setProducts((preState) => [
      ...preState,
      {
        id: preState.length + 101,
        name: "Product " + (preState.length + 1),
        price: preState.length * 100 + 100,
        brand: "Some brand",
        description: "some description",
        pictureUrl: "http://picsum.photos/200",
      },
    ]);
  }

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button>
    </>
  );
}
