import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const {
    image,
    serviceName,
    rating,
    price,
    description,
    serviceId,
    category,
  } = service;

  return (
    <div className="group relative bg-base-200 rounded-3xl overflow-hidden 
    shadow-lg hover:shadow-2xl transition-all duration-500 
    border border-base-300 h-full flex flex-col">

      {/* Image Wrapper with Margin */}
      <div className="p-4">
        <div className="relative h-52 w-full overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Rating Badge */}
          {/* <span className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 
          rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
            <FaStar className="text-yellow-300" />
            {rating}
          </span> */}
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-5 flex flex-col flex-1 text-center">
        <div className="flex-1">

          {/* Category */}
          <span className="inline-block mb-2 bg-primary/10 text-primary 
          text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-extrabold text-primary mb-2 leading-tight">
            {serviceName}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-neutral/70 mb-4 line-clamp-2">
            {description}
          </p>

          {/* Price + Review Side by Side */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <p className="text-xl font-bold text-accent">
              ${price}
            </p>

            <p className="flex items-center gap-1 text-sm font-semibold text-secondary">
              <FaStar className="text-yellow-400" />
              {rating} Review
            </p>
          </div>
        </div>

        {/* Simple Button */}
        <Link
          to={`/service/${serviceId}`}
          className="inline-flex items-center justify-center 
          rounded-full bg-secondary hover:bg-accent 
          text-white text-sm font-semibold 
          px-8 py-2 transition-all duration-300 
          hover:scale-105 hover:shadow-lg"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
