import { use, useState,  } from "react";
import ProductCard from "./ProductCard";
import Cart from "./cart";

const Product = ({ productPromise ,cartItems, setCartItems}) => {
  const products = use(productPromise);
  const [activeTab, setActiveTab] = useState("products");
  return (
    <div className="my-20">
      <div className=" min-w-3xl font text-center">
        <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
        <p className="text-[#627382FF] mt-2 text-sm">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>

        <div className="space-x-2   mt-4  ">
        <button
        onClick={() => setActiveTab("products")}
        className={`btn rounded-full p-6 font-bold ${activeTab === "products"
            ? "text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]"
            : "border border-purple-700"
        }`} >  Products
      </button>

      <button
        onClick={() => setActiveTab("cart")}
        className={`btn rounded-full p-6  font-bold r ${activeTab === "cart"
            ? "text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]"
            : "border border-purple-700"
        }`} > Cart
      </button>
        </div>



      </div>

{
activeTab === "products" ? <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-9 mt-9">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} cartItems={cartItems} setCartItems={setCartItems}></ProductCard>
        ))}
      </div> :  <div className="w-[65%] mx-auto mt-9 p-4 rounded-2xl shadow-lg border border-stone-200">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
      </div>

}
     

    </div>
  );
};

export default Product;
