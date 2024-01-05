import { useEffect, useState, useContext } from "react";
import Billboard from "../../components/Billboard";
import ProductCard from "../../components/ProductCard";
import { CartContext } from "../../Contexts/Cart.context";

export default function Home() {
  const { cartItems = [], updateCart = () => {} } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => setProducts(result.data))
      .catch((error) => console.log(error));
  }, []);

  function handleAddToCart(data = {}) {
    let cartCopy = [...cartItems];
    cartCopy.push(data);
    updateCart(cartCopy);
  }

  return (
    <div>
      <Billboard />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((data, index) => (
              <ProductCard
                key={`${data.name}-${index}`}
                data={data}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
