import userImage from "../assets/user.png";
import rocketImage from "../assets/rocket.png";
import packageImage from "../assets/package.png";
const StepsSection = () => {
  return (
    <div className="  bg-[#F9FAFC]  ">
        <div className="container mx-auto pt-25 pb-25">
        <div className="text-center ">
            <h2 className="font-extrabold text-5xl">Get Started in 3 Steps</h2>
             <p className="text-gray-500 mt-4">Start using premium digital tools in minutes, not hours.</p>
        </div>
      

      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6  mt-9 ">

        <div className=" bg-white rounded-xl shadow-sm p-4 border    border-gray-100   ">
          <div className="flex justify-end mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center     justify-center text-white text-sm font-semibold">
              01
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <img
                className="w-10 h-10 object-contain"
                src={userImage}
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Create Account
            </h2>
            <p className="text-gray-500 text-sm mb-10">
                Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>
        </div>

         <div className=" bg-white rounded-xl shadow-sm p-4 border   border-gray-100  ">
          <div className="flex justify-end mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center     justify-center text-white text-sm font-semibold">
              02
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <img
                className="w-10 h-10 object-contain"
                src={packageImage}
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Choose Products
            </h2>
            <p className="text-gray-500 text-sm mb-10">
                Browse our catalog and select the tools
that fit your needs.
            </p>
          </div>
        </div>

         <div className=" bg-white rounded-xl shadow-sm p-4 border  border-gray-100 ">
          <div className="flex justify-end mb-4">
            <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center     justify-center text-white text-sm font-semibold">
              03
            </div>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <img
                className="w-10 h-10 object-contain"
                src={rocketImage}
                alt=""
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Start Creating
            </h2>
            <p className="text-gray-500 text-sm mb-10">
               Download and start using your premium 
                tools immediately.
            </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default StepsSection;
