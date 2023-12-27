import "./main.css";
import { scrollToSection } from "../../helpers/Scroller.jsx";
import { useStore } from "@nanostores/react";
import { pricing } from "../../helpers/ScrollStore.js";
const MainComponent = () => {
  const pricingCards = useStore(pricing);

  return (
    <>
      {/* <div className="main"> */}
      <main className="text-center pt-12 lg:mt-12">
        <h1 className="text-gray-800 md:text-7xl text-4.5xl font-black text-center lg:w-hl md:w-hll m-auto pt-11 px-2 font-satoshi">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="text-gray-600 md:text-xl text-base font-medium text-center pt-7 px-2">
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success.
        </p>
        <button
          onClick={() => scrollToSection(pricingCards)}
          className="text-gray-50 font-bold text-xl bg-gray-800 w-52 h-14 rounded-lg mt-12 hover:-translate-y-1 hover:ease-in hover:duration-100 hover:delay-100 hover:border-1 hover:border-gray-600 hover:text-gray-600 hover:bg-gray-50"
        >
          View Pricing
        </button>
      </main>
      {/* </div> */}
    </>
  );
};

export default MainComponent;
