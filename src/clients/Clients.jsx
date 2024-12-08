const Clients = () => {
  return (
    <div className="bg-[#A3B4BD] py-12">
      <div className="flex max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="p-8 rounded-xl max-w-4xl mx-auto">
            <button className="bg-white text-black border border-black rounded-full px-8 my-12 py-1 uppercase text-sm">out clients</button>
            <h2 className="text-3xl font-bold text-white mb-4">
              Solving problems with <br />
               3PL and FTZ Solutions for the{" "} <br />
              <span className="font-bold text-brand-primary">
                Worlds Biggest Brands
              </span>
            </h2>
            <p className="text-base text-gray-600 mb-6 w-3/5">
              Discover how our FTZ services streamline your import/export
              processes and reduce costs.
            </p>
            <div className="flex space-x-4">
              <button className="bg-brand-secondary text-white py-3 px-8 rounded-sm hover:bg-green-600 outline-none">
                SERVICES
              </button>
              <button className="bg-white text-gray-800 py-2 px-6 rounded-sm hover:bg-gray-100 outline-none">
                TECHNOLOGY
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">right</div>
      </div>
    </div>
  );
};

export default Clients;
