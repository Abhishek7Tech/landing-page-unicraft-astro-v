
const Brands = () => {
  return (
    <div className="mt-12 mb-20">
      <p className="text-gray-400 font-medium text-sm mt-12 md:mt-20 p-2 text-center">
        Trusted By 250+ Companies
      </p>
      <div className="flex flex-col items-center md:flex-row flex-wrap justify-center mb-6">
        <img src="/images/zapier.png" alt="zapier-logo" className="w-43 h-16"></img>
        <img src="/images/spotify.png" alt="spotify-logo" className="w-43 h-16"></img>
        <img src="/images/zoom.png" alt="zoom-logo" className="w-43 h-16"></img>
        <img src="/images/slack.png" alt="slack-logo" className="w-43 h-16"></img>
        <img src="/images/amazon.png" alt="amazon-logo" className="w-43 h-16"></img>
        <img src="/images/adobe.png" alt="adobe-logo" className="w-43 h-16"></img>
      </div>
    </div>
  );
};

export default Brands;
