import React from "react";

const Services = () => {
  return (
    <div className="z-20 2xl:-mt-[500px] bg-brand-primary pb-20">
      <div className="mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
              Cost-Saving FTZ Fulfillment
            </h3>
            <p className="text-center text-gray-100">
              Using our top-tier 3PL warehouses within Free Trade Zones, you can
              substantially reduce or eliminate taxes, duties, and trade fees,
              elevating your bottom line.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
              Unmatched FDA/EPA Approved Relabeling
            </h3>
            <p className="text-center text-gray-100">
              Tri-Link is the only Environmental Protection Agency (EPA)
              approved labeling facility, offering unparalleled FDA approved
              re-labeling of products.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
              World-Class Warehouse Services
            </h3>
            <p className="text-center text-gray-100">
              Our cutting-edge facilities with best-in-class security & 24/7
              monitoring meet the highest federal standards, so you can have
              peace of mind that your shipment is safe and secure.
            </p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="mb-4 text-2xl font-semibold text-center text-gray-100 lg:text-3xl">
              Efficient 3PL Services
            </h3>
            <p className="text-center text-gray-100">
              Streamline your supply chain with seamless global transport,
              strategically placed entry points, inventory management,
              fulfillment, and distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
