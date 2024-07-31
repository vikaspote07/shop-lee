import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Alice Johnson",
    position: "CEO at TechCorp",
    testimonial:
      "This product has completely transformed the way our team works. It's intuitive, efficient, and has saved us countless hours.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Bob Smith",
    position: "Lead Developer at InnovateX",
    testimonial:
      "An essential tool for any developer. The features are outstanding and the support team is incredibly responsive.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Claire Adams",
    position: "Project Manager at WebWorks",
    testimonial:
      "I can't imagine managing our projects without this software. It keeps everything organized and on track.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="sm:flex sm:items-center px-6 py-4">
      <img
        className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full"
        src={testimonial.image}
        alt={testimonial.name}
      />
      <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p className="text-xl leading-tight">{testimonial.name}</p>
        <p className="text-sm leading-tight text-gray-600">
          {testimonial.position}
        </p>
        <div className="mt-4">
          <FaQuoteLeft className="text-indigo-600 inline-block" />
          <p className="text-gray-600 text-base italic">
            {testimonial.testimonial}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialPage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold text-center mb-8">
      What Our Clients Say
    </h1>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default TestimonialPage;
