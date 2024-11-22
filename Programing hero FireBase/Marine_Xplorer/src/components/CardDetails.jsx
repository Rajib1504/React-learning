import { IoIosCalendar } from "react-icons/io";
import { FaPersonHiking } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const data = useLoaderData();
  const {
    ecoFriendlyFeatures,
    adventureTitle,
    includedItems,
    maxGroupSize,
    adventureLevel,
    duration,
    location,
    bookingAvailability,
    adventureCost,
    shortDescription,
    categoryName,
    image,
    specialInstructions,
  } = data;
  return (
    <div>
      <div className="card bg-base-100 ">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl text-gray-700">
            {adventureTitle}
          </h2>
          <p className="text-gray-500">{shortDescription}</p>
        </div>

        <figure className="px-2">
          <img
            src={image}
            alt={adventureTitle}
            className="rounded-xl max-w-full"
          />
        </figure>
        <div className="grid mt-3 grid-cols-5  gap-2">
          <div className="flex items-center justify-center flex-col">
            <FaPersonHiking className="text-3xl text-blue-400" />
            <p className="text-sm">{categoryName}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <IoIosCalendar className="text-3xl text-blue-400" />
            <p className="text-sm">{duration}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <BsFillPeopleFill className="text-3xl text-blue-400" />
            <p className="text-sm">{maxGroupSize}</p>
          </div>

          <div className="flex items-center justify-center flex-col">
            <MdLocationPin className="text-3xl text-blue-400" />
            <p className="text-sm">{location}</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <FaMoneyCheckAlt className="text-3xl text-blue-400" />
            <p className="text-sm">{adventureCost}</p>
          </div>
        </div>
        <div className="card-body space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="border shadow-md p-3 rounded-lg text-center">
              <p className="text-gray-500">Booking Availability</p>
              <p className="text-green-300">{bookingAvailability}</p>
            </div>
            <div className="border shadow-md p-3 rounded-lg text-center">
              <p className="text-gray-500">Adventure Level</p>
              <p className="text-red-400">{adventureLevel}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className=" shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Items Included
              </p>
              <ul className="list-disc list-inside">
                {includedItems.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Eco Features
              </p>
              <ul className="list-disc list-inside">
                {ecoFriendlyFeatures.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="shadow-xl p-3 rounded-lg">
              <p className="text-xl text-gray-500 text-center mb-2">
                Special Instructions
              </p>
              <ul className="list-disc list-inside">
                {specialInstructions.map((item, id) => (
                  <li key={id} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary btn-wide text-white">
              Talk to Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
