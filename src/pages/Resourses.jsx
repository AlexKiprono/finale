import React, { useState } from "react";

function FAQItem({ question, answer }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="flex-1 text-base-content">{question}</span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition duration-200 ${
            expanded ? "rotate-45" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="7" width="16" height="2" rx="1" />
          <rect y="7" width="16" height="2" rx="1" className="rotate-90" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed">{answer}</div>
        </div>
      </div>
    </li>
  );
}

function Resources() {
  return (
    <div>
      <h2 className="flex flex-row flex-nowrap items-center mt-24">
        <span className="flex-grow block border-t border-black"></span>
        <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
          Resources
        </span>
        <span className="flex-grow block border-t border-black"></span>
      </h2>

      {/* Services Section */}
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Services Offered
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We provide a range of different services tailored to meet various
            needs
          </p>
        </div>

        <div className="space-y-8 mb-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Service Cards */}
          {[
            { title: "Service A", price: "$49", features: "3 Custom Features" },
            { title: "Service B", price: "$79", features: "5 Custom Features" },
            {
              title: "Service C",
              price: "$199",
              features: "Unlimited Custom Features",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
            >
              <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                {`Best option for ${
                  idx === 0
                    ? "individuals"
                    : idx === 1
                    ? "small businesses"
                    : "large enterprises"
                }`}
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  {service.price}
                </span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <span className="font-semibold">{service.features}</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:ring-teal-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-teal-900"
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mx-auto max-w-screen-md text-center">
          <p className="text-lg font-medium text-gray-800">
            Ready to get started?
          </p>
          <a
            href="#"
            className="text-teal-600 hover:text-teal-700 font-semibold"
          >
            Sign up now
          </a>
        </div>
      </div>

      {/* Community Section */}
      <section className="text-gray-600 body-font bg-white">
        <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight mb-3 text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
              Title of Project
            </h1>
            <p className="mb-8 leading-relaxed">
              Short description here, Short description here Short description
              here Short description here.
            </p>
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-flex text-white bg-emerald-600 border-0 py-2 px-6 hover:bg-emerald-600 rounded text-lg"
              >
                Start Exploring
              </a>
              <a
                href="#"
                className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 hover:bg-gray-200 rounded text-lg"
              >
                Read articles
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://www.svgrepo.com/show/490900/hot-air-balloon.svg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">
            Insurance FAQ
          </p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>
        <ul className="basis-1/2">
          <FAQItem
            question="How secure is my insurance information?"
            answer="We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential."
          />
          <FAQItem
            question="How can I customize my insurance coverage?"
            answer="Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget."
          />
          <FAQItem
            question="Is there a waiting period for insurance claims?"
            answer="There may be a waiting period for certain insurance claims, depending on the policy terms and conditions."
          />
        </ul>
      </div>
    </div>
  );
}

export default Resources;
