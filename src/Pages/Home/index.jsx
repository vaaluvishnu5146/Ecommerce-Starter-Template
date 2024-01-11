import { useEffect, useContext } from "react";
import Billboard from "../../components/Billboard";
import ProductCard from "../../components/ProductCard";
import { CartContext } from "../../Contexts/Cart.context";
import API from "../../axios/custom-interceptors";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../../Redux/Reducers/products";

export default function Home() {
  const { cartItems = [], updateCart = () => {} } = useContext(CartContext);
  const dispatcher = useDispatch();
  const { data = [] } = useSelector((state) => state.products);

  useEffect(() => {
    API.get("/products")
      .then((response) => {
        if (response.status === 200) {
          dispatcher(saveProducts(response.data.data));
        }
      })
      .catch((error) => console.log(error));
  }, []);

  function handleAddToCart(data = {}) {
    let cartCopy = [...cartItems];
    cartCopy.push({ ...data, quantity: 1 });
    updateCart(cartCopy);
  }

  return (
    <div>
      <Billboard />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {data.map((item, index) => (
              <ProductCard
                key={`${item.name}-${index}`}
                data={item}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
