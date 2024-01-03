import Billboard from "../../components/Billboard";
import ProductCard from "../../components/ProductCard";

export default function index() {
  return (
    <div>
      <Billboard />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductCard />
          </div>
        </div>
      </section>
    </div>
  );
}
