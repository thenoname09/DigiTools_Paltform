import ProductCardFeatures from "./ProductCardFeatures";


const ProductCard = ({product}) => {
    const {features} = product
    return (
        
   <div className="">
                    
                    
        <div className="card w-96 bg-base-100 shadow-sm border border-stone-200 h-full flex flex-col">
  <div className="card-body h-full flex flex-col">

        <div className="flex-1 space-y-2">

    <div className="text-right">
           <span className="badge badge-xs badge-warning text-center">{product.tag}</span>
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
      <button className="btn text-[16px] w-full rounded-full  p-6 font-bold text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]">Buy Now</button>
    </div>

  </div>
</div>




                </div> 
        
    );
};

export default ProductCard;