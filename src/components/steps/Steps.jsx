import { useEffect, useRef } from "react";
import { howItWorks } from "../../helpers/ScrollStore";
const Steps = () => {
  const stepsRef = useRef(null);

  useEffect(() => {
    if (stepsRef) {
      howItWorks.set(stepsRef);
    }
  }, [stepsRef]);

  return (
    <section
      ref={stepsRef}
      id="how-it-works"
      className="hidden lg:block border-gray-200 rounded-lg shadow-lg shadow-gray-200 border-1 mt-12 p-2 mb-6 text-center max-w-7.5xl m-auto"
    >
      <h1 className="font-bold text-5xl text-gray-800 mt-6 mb-2">
        How it works
      </h1>
      <p className="text-xl text-gray-600 font-medium mt-4 mb-4 ">
        Premium designs, unlimited requests, super fast delivery, for one flat
        monthly fee.
      </p>
      <div className="flex justify-around items-center">
        <div className="relative text-center w-86">
          <h2 className="font-bold text-18xl bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-50 text-purple-300">
            1
          </h2>
          <div className="absolute bottom-20">
            <h3 className="font-black text-gray-800 text-4xl">Subscribe</h3>
            <p className="font-medium text-gray-500 text-lg">
              Subscribe to a plan & you’ll get an instant access to your private
              Slack channel.
            </p>
          </div>
        </div>
        <img className="w-20 h-24" src="/images/arrow.png" alt="arrow"></img>

        <div className="relative w-96 text-center">
          <h2 className="font-bold text-18xl bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-50 text-purple-300">
            2
          </h2>
          <div className="absolute bottom-20">
            <h3 className="font-black text-gray-800 text-4xl">Request</h3>
            <p className="font-medium text-gray-500 text-lg">
              Submit any number of requests. We'll work through them, one at a
              time, ensuring consistent updates every 24-48 hours
            </p>
          </div>
        </div>
        <img className="w-20 h-24" src="/images/arrow.png" alt="arrow"></img>

        <div className="relative w-86 text-center">
          <h2 className="font-bold text-18xl bg-clip-text text-transparent bg-gradient-to-b from-purple-300 to-purple-50 text-purple-300">
            3
          </h2>
          <div className="absolute bottom-20">
            <h3 className="font-black text-gray-800 text-4xl">Revise</h3>
            <p className="font-medium text-gray-500 text-lg">
              Need changes? We guarantee unlimited revisions until you're 200%
              satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
