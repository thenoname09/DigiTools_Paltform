import { use } from "react";
import ProductCard from "./ProductCard";


const Product = ({productPromise}) => {
 const products = use(productPromise)
 

    return (
        <div className="mt-6">
            <div className="text-center">
                <h2>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>


            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-5">
                {products.map(product => <ProductCard key={product.id} product={product}></ProductCard>
                
 )}


            </div>




        </div>
    );
};

export default Product;