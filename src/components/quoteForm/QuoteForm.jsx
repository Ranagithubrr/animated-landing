import React from "react";
import { MdCall } from "react-icons/md";

const QuoteForm = () => {
  return (
    <div className="px-5 border-b-2 border-brand-primary">
      <div className="items-center px-2 pt-10 mx-auto lg:flex max-w-screen-2xl">
        <div className="w-full lg:w-1/2">
          <h4 className="text-3xl text-center font-semibo lg:text-left ld lg:text-5xl text-brand-primary">
            Get Started <br /> with a{" "}
            <span className="font-bold">Free Quote</span> <br /> or Consultation
          </h4>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="my-8">
            <p>Name *</p>
            <input
              type="text"
              placeholder="Name*"
              className="py-1 border-b-2 border-brand-primary"
            />
            {/* <p className="mt-4">This is a required field.</p> */}
          </div>
          <div className="my-8">
            <p>Surname </p>
            <input
              type="text"
              placeholder="Surname"
              className="py-1 border-b-2 border-brand-primary"
            />
          </div>
          <div className="my-8">
            <p>Email *</p>
            <input
              type="text"
              placeholder="Email *"
              className="py-1 border-b-2 border-brand-primary"
            />
            {/* <p className="mt-4">This is a required field.</p> */}
          </div>
          <div className="w-full my-8">
            <p>Message *</p>
            <textarea
              rows={3}
              placeholder="Message *"
              id=""
              className="w-full py-1 border-b-2 border-brand-primary"
            ></textarea>
            {/* <p className="mt-4">This is a required field.</p> */}
          </div>
          <div className="my-8">
            <button className="py-6 text-xl font-semibold text-gray-100 uppercase rounded px-28 bg-brand-secondary">
              Send
            </button>
            <div className="flex items-center mt-4">
              <p>If you are a human seeing this field, please leave it empty</p>
              <input
                type="text"
                className="ml-2 border-2 border-brand-primary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <div className="text-gray-100 bg-brand-secondary w-[350px] flex items-center justify-center py-8">
          <div>
            <MdCall className="text-5xl transform -rotate-90" />
          </div>
          <div className="ml-2 text-lg font-semibold text-center text-gray-100">
            <p>Reach out! </p>
            <span className="text-lg font-semibold text-gray-100">
              +1-888-487-7707
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
