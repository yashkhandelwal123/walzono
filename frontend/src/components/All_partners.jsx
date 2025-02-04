import React from "react";
import { Link } from "react-router";

const biryaniData = [
  {
    id: 1,
    restaurant: "Parlour Name",
    rating: 4.4,
    deliveryTime: "35-40 MINS",
    name: "ServiceName Like Korean Glass Makeup",
    price: 269,
    for : "Women",
    imageUrl: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg",
  },
  {
    id: 2,
    restaurant: "Parlour Name",
    rating: 4.5,
    deliveryTime: "30-35 MINS",
    name: "ServiceName Like Bridal Makeup",
    price: 349,
    for : "Men",
    imageUrl: "https://png.pngtree.com/background/20230426/original/pngtree-salon-service-salon-design-hd-picture-image_2487132.jpg",
  },
];

const BiryaniCard = ({ item }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-10 m-4 w-full sm:w-1/2 lg:w-1/3">
      <div className="flex w-full">

        <div className="w-1/2">
          <div className="text-sm text-gray-500">By {item.restaurant}</div>
          <div className="flex items-center text-sm text-gray-500 mt-1">
            <span>⭐ {item.rating}</span>
            <span className="mx-2">·</span>
            <span>{item.deliveryTime}</span>
          </div>
        </div>

        <div className="w-1/2 items-center justify-center flex"><span className="text-semibold bg-gray-100 p-2 px-6 rounded-lg">{item.for}</span></div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col sm:flex-row">
        <div className="mt-5 flex-1">
          <div className="font-bold text-lg text-gray-800">{item.name}</div>
          <div className="text-lg font-semibold text-gray-900 mt-1">₹{item.price}</div>
          <div className="mt-5">
            <Link to={`/partner/${item.id}`} className="text-blue-500">More Details ➔</Link>
          </div>
        </div>
        <div className="relative mt-4 flex-1">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="rounded-xl w-full h-40 object-cover"
          />
          <button className="absolute w-1/2 bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold py-1 px-4 rounded shadow-md">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

const BiryaniList = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 sm:px-6 lg:px-8">
      {biryaniData.map((item) => (
        <BiryaniCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BiryaniList;
