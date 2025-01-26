// // src/PartnersList.js
// import React from 'react';
// import { Link } from 'react-router';


// const partners = [
//   {
//     id: 1,
//     name: 'Partner One',
//     address: '123 Main St, City, Country',
//     rating: 4.5,
//     image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg', // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: 'Partner Two',
//     address: '456 Elm St, City, Country',
//     rating: 4.0,
//     image: 'https://www.avikalp.com/cdn/shop/products/MWZ3642_wallpaper2.jpg?v=1654843681', // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: 'Partner Three',
//     address: '789 Oak St, City, Country',
//     rating: 5.0,
//     image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg', // Replace with actual image URL
//   },
//   {
//     id: 4,
//     name: 'Partner One',
//     address: '123 Main St, City, Country',
//     rating: 4.5,
//     image: 'https://m.media-amazon.com/images/I/81ADwG+gugL._AC_UF894,1000_QL80_.jpg', // Replace with actual image URL
//   },
//   {
//     id: 5,
//     name: 'Partner Two',
//     address: '456 Elm St, City, Country',
//     rating: 4.0,
//     image: 'https://watermark.lovepik.com/photo/20211202/large/lovepik-hair-salon-interior-picture_501431964.jpg', // Replace with actual image URL
//   },
//   {
//     id: 6,
//     name: 'Partner Three',
//     address: '789 Oak St, City, Country',
//     rating: 5.0,
//     image: 'https://c0.wallpaperflare.com/preview/732/98/492/beauty-salon-hair-dresser-table-furniture.jpg', // Replace with actual image URL
//   },
// ];


// // here we call api to get all partners that provide specific service

// const PartnersList = () => {
//   return (
//     <div className="p-4 min-h-screen bg-white">
//       <h2 className="text-2xl font-bold mb-4">Associated Partners</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {partners.map((partner) => (
//           <Link to={`/partner/${partner.id}`} key={partner.id} className="bg-gray-300 shadow-md rounded-lg p-4">
//             <img
//               src={partner.image}
//               alt={partner.name}
//               className="w-full h-52 object-cover rounded-t-lg"
//             />
//             <h3 className="text-lg font-semibold mt-2">{partner.name}</h3>
//             <p className="text-gray-600">{partner.address}</p>
//             <p className="text-yellow-500 mt-1">Rating: {partner.rating} ★</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersList;





// src/PartnerDetail.js

import React from 'react';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const partners = [
  {
    id: 1,
    name: 'Partner One',
    address: '123 Main St, City, Country',
    rating: 4.5,
    images: [
      'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg',
      'https://png.pngtree.com/background/20230426/original/pngtree-salon-service-salon-design-hd-picture-image_2487132.jpg',
      'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?cs=srgb&dl=pexels-delbeautybox-211032-853427.jpg&fm=jpg',

    ],
    openingTime: '9:00 AM',
    closingTime: '5:00 PM',
    prices: '$100 - $200',
  },
  {
    id: 2,
    name: 'Partner Two',
    address: '456 Elm St, City, Country',
    rating: 4.0,
    images: [
      'https://www.avikalp.com/cdn/shop/products/MWZ3642_wallpaper2.jpg?v=1654843681',
      'https://via.placeholder.com/150/00FF00',
      'https://via.placeholder.com/150/FFFF00',
    ],
    openingTime: '10:00 AM',
    closingTime: '6:00 PM',
    prices: '$150 - $250',
  },
  {
    id: 3,
    name: 'Partner Three',
    address: '789 Oak St, City, Country',
    rating: 5.0,
    images: [
      'https://m.media-amazon.com/images/I/81ADwG+gugL._AC_UF894,1000_QL80_.jpg',
      'https://via.placeholder.com/150/FF00FF',
      'https://via.placeholder.com/150/00FFFF',
    ],
    openingTime: '8:00 AM',
    closingTime: '4:00 PM',
    prices: '$200 - $300',
  },
  {
    id: 3,
    name: 'Partner Three',
    address: '789 Oak St, City, Country',
    rating: 5.0,
    images: [
      'https://m.media-amazon.com/images/I/81ADwG+gugL._AC_UF894,1000_QL80_.jpg',
      'https://via.placeholder.com/150/FF00FF',
      'https://via.placeholder.com/150/00FFFF',
    ],
    openingTime: '8:00 AM',
    closingTime: '4:00 PM',
    prices: '$200 - $300',
  },  
];

const PartnerDetail = () => {

  const {id} = useParams();
  console.log(id)
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
      <div className="flex gap-6 px-5 w-full">
        {partners.map((partner) => (
          <Link to={`/partner/${partner.id}`} key={partner.id} className="bg-white shadow-lg w-full rounded-lg overflow-hidden">
            <div className='w-full'>
              <div className="relative">
                <img
                  src={partner.images[0]}
                  alt={partner.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                  {partner.rating} ★
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{partner.name}</h3>
                <p className="text-gray-600">{partner.address}</p>
                <p className="text-gray-800 mt-2">
                  <span className="font-bold">Opening Hours:</span> {partner.openingTime} - {partner.closingTime}
                </p>
                <p className="text-gray-800 mt-1">
                  <span className="font-bold">Prices:</span> {partner.prices}
                </p>
                <div className="flex space-x-2 mt-4">
                  {partner.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Partner ${partner.name} Image ${index + 1}`}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-gray-200"
                    />
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartnerDetail;