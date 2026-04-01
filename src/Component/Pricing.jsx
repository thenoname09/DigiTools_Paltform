import { use } from "react";
import PricingCardFeatures from "./PricingCardFeatures";

const Pricing = ({ pricingPromise }) => {
  const pricing = use(pricingPromise);

  return (
    <div className="my-20">
      <div className="text-center space-y-3">
        <h2 className="font-extrabold text-5xl">Simple, Transparent Pricing</h2>
        <p className="text-sm text-[#627382FF]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* pricing Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3    container mx-auto gap-4 mt-9">
        {pricing.map((pricingData,) => (
          <div>
            <div
              className={`card  w-full   shadow-sm border  border-stone-200 h-full flex flex-col 
                 ${
                   pricingData.popular
                     ? "bg-linear-to-bl from-[#4f39f6] to-[#9514fa] text-white border-transparent shadow-xl "
                     : "bg-[#F9FAFC] border-stone-200"
                 } `}
            >
              <div className="card-body h-full flex flex-col">
                <div className="flex-1 space-y-2">
                  <div className="text-right">
                    {pricingData.popular === true && (
                      <span className="badge badge-lg badge-warning font-medium  grow">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="">
                    <h2 className="text-3xl font-bold">{pricingData.name}</h2>
                    <p
                      className={`${pricingData.popular ? "text-white/80" : "text-[#627382FF]"}  mt-2 text-sm`}
                    >
                      {pricingData.subtitle}
                    </p>
                  </div>

                  <div className="">
                    <span className="text-4xl  font-bold  ">
                      ${pricingData.price}
                      <span
                        className={`${pricingData.popular ? "text-white" : "text-[#627382FF]"}  mt-2 font-medium text-xl`}
                      >
                        /{pricingData.period}
                      </span>
                    </span>
                  </div>

                  <div className="">
                    {pricingData.features.map((features, ind) => (
                      <PricingCardFeatures
                        key={ind}
                        features={features}
                        pricingData={pricingData}
                      ></PricingCardFeatures>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    className={`btn w-full rounded-full p-4 font-bold text-sm
                 ${ pricingData.popular ? "bg-white text-purple-600"
                     : "bg-linear-to-l from-[#4f39f6] to-[#9514fa] text-white"
                   }`}
                  >
                    {pricingData.button_text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
