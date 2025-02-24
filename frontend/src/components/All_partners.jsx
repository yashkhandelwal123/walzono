import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import Select_partner from "./Select_partner";

const items = [
  {
    id: 1,
    restaurant: "Parlour Name",
    rating: 4.4,
    deliveryTime: "35-40 MINS",
    name: "ServiceName Like Korean Glass Makeup",
    price: 269,
    imageUrl: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg",
  },
  {
    id: 2,
    restaurant: "Parlour Name",
    rating: 4.5,
    deliveryTime: "30-35 MINS",
    name: "ServiceName Like Bridal Makeup",
    price: 349,
    imageUrl: "https://png.pngtree.com/background/20230426/original/pngtree-salon-service-salon-design-hd-picture-image_2487132.jpg",
  },
];

const BiryaniCard = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartItem = cart.find((cartItem) => cartItem.id === item.id);
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <div className="bg-white min-h-screen rounded-xl p-4 mt-10 m-4 w-full sm:w-1/2 lg:w-1/3">
      <div className="rounded-xl p-4 shadow-md w-full">

        <div className="flex w-full">
          <div className="w-1/2">
            <div className="text-sm text-gray-800">By {item.restaurant}</div>
            <div className="flex items-center text-sm text-gray-800 mt-1">
              <span>⭐ {item.rating}</span>
              <span className="mx-2">·</span>
              <span>{item.deliveryTime}</span>
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div className="flex flex-col sm:flex-row">
          <div className="mt-5 flex-1">
            <div className="font-bold text-lg text-gray-800">{item.name}</div>
            <div className="text-lg font-semibold text-gray-900 mt-1">₹{item.price}</div>
            <div className="mt-5">
              {/* <Link to={`/partner/${item.id}`} className="text-blue-500">More Details ➔</Link> */}
              <span onClick={() => setIsModalOpen(true)} className="text-blue-500 cursor-pointer">More Details ➔</span>
              {<Select_partner isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
            </div>
          </div>
          <div className="relative mt-4 flex-1">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="rounded-xl w-full h-40 object-cover"
            />
            {cartItem ? (
              <div className="absolute w-1/2 bottom-2 bg-black left-1/2 rounded-md transform -translate-x-1/2 flex justify-center items-center">
                <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-black text-white font-bold py-2 px-3 rounded shadow-md">-</button>
                <span className="mx-2 font-bold text-white">{cartItem.quantity}</span>
                <button onClick={() => dispatch(addToCart(item))} className="bg-black text-white font-bold py-2 px-3 rounded shadow-md">+</button>
              </div>
            ) : (
              <button onClick={() => dispatch(addToCart(item))} className="absolute py-2 w-1/3 bottom-2 left-1/2 transform -translate-x-1/2 bg-black text-white font-bold px-4 rounded-md shadow-md">
                Add
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

const BiryaniList = () => {
  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <BiryaniCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default BiryaniList;
