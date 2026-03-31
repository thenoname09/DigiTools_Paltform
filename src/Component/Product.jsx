import { use } from "react";
import ProductCard from "./ProductCard";


const Product = ({productPromise}) => {
 const products = use(productPromise)
 

    return (
        <div className="my-20">
            <div className=" min-w-3xl font text-center">
                <h2 className="font-extrabold text-5xl">Premium Digital Tools</h2>
                <p className="text-[#627382FF] mt-2 text-sm">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>

        <div className="space-x-2   mt-4  ">
          <button className="btn text-[16px] rounded-full  p-6 font-bold text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]"> Products</button>
          <button className="btn rounded-full font-bold text-[16px] border border-purple-700 p-6"> Cart</button>
        </div>


            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5 mt-9">
                {products.map(product => <ProductCard key={product.id} product={product}></ProductCard>
                
                )}


            </div>




        </div>
    );
};

export default Product;