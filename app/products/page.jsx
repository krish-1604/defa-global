import ProductsCategory from "./category";
import Footer from "../components/footer";

export default function ProductsPage() {
  return (
    <div className="bg-[#004884]">
      <div className="min-h-[60vh] flex flex-col items-center justify-center  px-4 py-48">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Our Products
        </h1>
        <div className="w-20 h-1 bg-[#e2c36b] rounded mb-8" />
        <p className="text-xl md:text-2xl text-white text-center max-w-2xl">
          Explore our comprehensive range of high-quality products for various
          industries.
        </p>
      </div>
      <ProductsCategory />
    </div>
  );
}
