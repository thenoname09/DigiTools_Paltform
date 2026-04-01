import { CiPlay1 } from "react-icons/ci";

import BannerImage from "../assets/banner.png";


const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between  items-center my-20 container mx-auto gap-3">

      {/* banner-left */}
      <div className="space-y-4">
        <div className="badge badge-ghost bg-[#e1e7ff] text-[#4F39F6] font-medium text-sm lg:text-[16px] p-4   rounded-full">
            <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-primary animate-ping"></div>
          <div className="status status-primary"> </div>
        </div>{"New: AI-Powered Tools Available"}


        </div>
        
       
        <h1 className="font-bold text-7xl text-[#101727] ">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-[#627382FF] text-lg">
          Access premium AI tools, design assets, templates, and productivity <br />
          bsoftware—all in one place. Start creating faster today. 
          <br />Explore Products
        </p>
        <div className="space-x-2   mt-7  ">
          <button className="btn text-[16px] rounded-full  p-6 font-bold text-white bg-linear-to-l from-[#4f39f6] to-[#9514fa]">Explore Products</button>
          <button className="btn rounded-full font-bold text-[16px] border border-purple-700 p-6"> <CiPlay1 /> Watch Demo</button>
        </div>
      </div>

      {/* banner-right */}
      <div>
        <div className="  object-contain">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
