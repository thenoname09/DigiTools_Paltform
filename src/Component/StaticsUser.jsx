

const StaticsUser = () => {
    return (
        <div className=" bg-linear-to-l from-[#4f39f6] to-[#9514fa] items-center text-center ">
            <div className="stats stats-vertical lg:stats-horizontal m-12 space-x-8   ">
  <div className="stat ">
    
    <div className="stat-value font-extrabold text-white text-4xl sm:text-5xl lg:text-7x">31K+</div>
    <div className="stat-title text-white font-medium text-xl opacity-80">Active Users</div>
  </div>
 
  <div className="stat  lg:border-l lg:border-stone-500 gap-4  ">
    
    <div className="stat-value font-extrabold text-white text-4xl sm:text-5xl lg:text-7x">200+</div>
   <div className="stat-title text-white  font-medium text-xl opacity-80 ">Premium Tools</div>
  </div>

  <div className="stat  gap-4  border-l border-l-stone-500 ">
    
    <div className="stat-value font-extrabold text-white text-4xl sm:text-5xl lg:text-7x">4.9</div>
     <div className="stat-title text-white  font-medium text-xl opacity-80 ">Rating</div>
   
  </div>
</div>
        </div>
    );
};

export default StaticsUser;