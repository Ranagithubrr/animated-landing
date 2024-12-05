const Transport = () => {
  const services = [
    { title: "Cost-Saving FTZ Fulfillment" },
    { title: "Unmatched FDA/EPA Approved Relabeling" },
    { title: "World-Class Warehouse Services" },
    { title: "Efficient 3PL Services" },
  ];

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-3xl font-semibold text-gray-700 mb-8">
        Worldwide Transport, Simplified
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-64 h-64 rounded-full bg-brand-bg text-white text-center px-4"
          >
            <p className="text-white font-semibold text-xl">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transport;
