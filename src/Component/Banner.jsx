import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="flex justify-between  items-center mt-6 container mx-auto gap-9">

      {/* banner-left */}
      <div>
        <div class="badge badge-ghost bg-[ #e1e7ff] text-[#4F39F6] font-medium text-[16px] p-4   rounded-full ">
            <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-primary animate-ping"></div>
          <div className="status status-primary"> </div>
        </div>{"New: AI-Powered Tools Available"}


        </div>
        
       
        <h1 className="font-bold text-7xl text-[#101727] ">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-[#627382FF]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>

      {/* banner-right */}
      <div>
        <div>
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
