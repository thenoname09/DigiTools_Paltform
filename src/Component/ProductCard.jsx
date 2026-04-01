import { useState } from "react";
import ProductCardFeatures from "./ProductCardFeatures";
import { toast } from "react-toastify";


const ProductCard = ({product,cartItems, setCartItems}) => {
    const {features} = product

   const [ isAddToCart, setAddToCart] = useState(false);

    const handleAddedToCart = () => {
     setAddToCart(true);
      const isFound = cartItems.find((item) => item.id === product.id);

    if (isFound) {
      toast.error("Item already in cart!");
      return;
    }

     setCartItems([...cartItems, product])
     toast.success("Item added to cart!")
    }
     
    return (
        
   <div className="">
                    
                    
        <div className="card w-full  bg-base-100 shadow-sm border border-stone-200 h-full flex flex-col transition duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl hover:border-purple-400">
  <div className="card-body h-full  flex flex-col ">

        <div className="flex-1 space-y-2">

    <div className="text-right">
           <span className="badge badge-md rounded-full font-semibold badge-warning text-center">{product.tag}</span>
    </div>
    

    <div className=" rounded-full max-w-15 p-3  border border-stone-300 flex-1">
        <img className=" object-cover   " src={product.icon} alt={product.name} />
    </div>

    <div className="grow">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-[#627382FF] mt-2 text-sm">{product.description}</p>
    </div>

    <div className="grow">
      <span className="text-2xl  font-bold  ">${product.price}
        <span className="text-[#627382FF] font-medium text-sm">/{product.period}</span></span>    
    
    </div>      
    <div className="text-[#627382FF] font-medium text-sm grow ">
     {
        features.map((features ,ind) => <ProductCardFeatures key={ind} features={features}></ProductCardFeatures> )
     }

    </div>
    
    </div>

    <div className="mt-6">
      <button onClick={ handleAddedToCart } className={`btn text-[16px] w-full rounded-full p-6 font-bold text-white ${isAddToCart ? "bg-green-600" : "bg-linear-to-l from-[#4f39f6] to-[#9514fa]"
    }`}>{isAddToCart ? "Added to Cart!" : "Buy Now"}</button>
    </div>

  </div>
</div>




                </div> 
        
    );
};

export default ProductCard;