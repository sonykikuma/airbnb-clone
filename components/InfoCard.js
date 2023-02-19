import React from "react";
import Image from "next/legacy/image";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartFilledIcon } from "@heroicons/react/solid";

import { StarIcon } from "@heroicons/react/solid";

// mapbox-token=pk.eyJ1IjoiYWJoYXNvbmlhcyIsImEiOiJjbGRoOXFxdDcwNnZpM3Fta3JrY2tpejkzIn0.uW6jUAWj8aEiGntxjzCBdg
//style=mapbox://styles/abhasonias/cldh9vvr6000o01o4g2q4yryv
//access-token=pk.eyJ1IjoiYWJoYXNvbmlhcyIsImEiOiJjbGRoOXFxdDcwNnZpM3Fta3JrY2tpejkzIn0.uW6jUAWj8aEiGntxjzCBdg
const InfoCard = ({
  id,
  img,
  description,
  title,
  star,
  price,
  location,
  total,
}) => {
  return (
    <div
      className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t
    first:bg-red-400"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image
          src={img}
          alt=""
          layout="fill"
          object-fit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            {" "}
            <StarIcon
              className="h-5
           text-red-500"
            />
            {star}
          </p>

          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
