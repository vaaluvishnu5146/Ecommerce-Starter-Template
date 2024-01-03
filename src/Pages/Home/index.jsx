import { useEffect, useState } from "react";
import Billboard from "../../components/Billboard";
import ProductCard from "../../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Billboard />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((data, index) => (
              <ProductCard key={`${data.name}-${index}`} data={data} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
