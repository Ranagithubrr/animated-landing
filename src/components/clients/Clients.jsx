import LogoCircle from "./LogoCircle";

const Clients = () => {
  return (
    <div className="bg-[#A3B4BD] py-12">
      <div className="px-4 mx-auto lg:flex sm:max-w-full md:max-w-screen-md lg:max-w-7xl 2xl:max-w-screen-2xl">
        <div className="w-full lg:w-1/2">
          <div className="max-w-4xl p-8 mx-auto text-center lg:text-left rounded-xl">
            <button className="px-8 py-1 my-12 text-sm text-black uppercase bg-white border border-black rounded-full">
              out clients
            </button>
            <h2 className="mb-4 text-3xl font-bold text-white">
              Solving problems with <br />
              3PL and FTZ Solutions for the <br />
              <span className="font-bold text-brand-primary">
                Worlds Biggest Brands
              </span>
            </h2>
            <p className="w-3/5 mx-auto mb-6 text-base text-gray-600 lg:mx-0">
              Discover how our FTZ services streamline your import/export
              processes and reduce costs.
            </p>
            <div className="flex justify-center space-x-4 lg:justify-normal">
              <button className="px-8 py-3 text-white rounded-sm outline-none bg-brand-secondary hover:bg-green-600">
                SERVICES
              </button>
              <button className="px-6 py-2 text-gray-800 bg-white rounded-sm outline-none hover:bg-gray-100">
                TECHNOLOGY
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <LogoCircle />
        </div>
      </div>
    </div>
  );
};

export default Clients;
