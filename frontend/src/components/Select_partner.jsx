import React from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router";

function SalonShowcase() {
  return (
    <div className="container mx-auto p-4 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=''>
          <img
            src="https://m.media-amazon.com/images/I/81ADwG+gugL._AC_UF894,1000_QL80_.jpg"
            alt="Salon Showcase"
            className="w-full h-auto rounded-lg"
          />

          {/* about section */}
          <div className="container mx-auto px-4 py-12">
              <h2 className="text-4xl font-bold mb-8">About the process</h2>
              <div className="flex flex-col gap-6">
                {/* first section in about */}
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 rounded-full p-2">
                    <span className="text-gray-700 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Consultation</h3>
                    <p className="text-gray-600">
                      Detailed consultation by the stylist to understand your preferences
                      and suggest the best-suited cut
                    </p>
                  </div>
                </div>
                {/* second section in about */}
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 rounded-full p-2">
                    <span className="text-gray-700 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Haircut & styling</h3>
                    <p className="text-gray-600">
                      Top-class haircut followed by Schwarzkopf Osis Messup serum
                      application to seal the look
                    </p>
                  </div>
                </div>
                {/* thrid section in about */}
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 rounded-full p-2">
                    <span className="text-gray-700 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Haircut & styling</h3>
                    <p className="text-gray-600">
                      Top-class haircut followed by Schwarzkopf Osis Messup serum
                      application to seal the look
                    </p>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <div>
          {/* name of salon */}
          <div className='flex mx-auto '>
            <h1 className="text-4xl font-bold mb-2">Salon Showcase Beauty Salon</h1>
            <span className='flex items-center bg-green-500 px-2 py-1 mx-4 rounded-lg'>
                <span className="mr-2 text-bold text-white text-xl">4.5</span>
                <IoStar className="text-white" size={24} />
              </span>
          </div>

          {/* address of salon */}
          <p className="text-gray-600 mb-4"> Shri Ram ki Nangal via RIICO, Tonk Rd, Sitapura, Jaipur, Rajasthan 302022</p>

          {/* price of service */}
          <div className="flex mb-4 items-center">
            <div className='text-2xl font-bold'> ₹1,749 <span className='text-gray-600 text-sm mx-1 line-through'>₹1,999</span> </div>
            <span className='text-red-500 text-sm mx-1 text-bold'>79% off</span>
          </div>

          {/* book button */}
          <Link to={'/booking'} className="bg-black text-white px-4 py-2 rounded-lg">
            Continue to Book
          </Link>

          <div className='mt-4'>
            <span className='text-2xl font-bold'>Description</span>
            <div className='mt-4 text-gray-600 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores repellat possimus placeat cupiditate amet nisi accusamus illo quis, fugiat recusandae eos accusantium neque praesentium sequi. Id repellat iure est ipsa deleniti eum pariatur itaque iusto quo. Incidunt voluptatum ea officiis libero numquam, eveniet eum natus, qui optio tempora doloribus cum mollitia ex sit quia vel impedit delectus perferendis ad eius dolor omnis, earum enim possimus.</div>
          </div>

          {/* review section */}

          <div className="bg-white p-4 mt-20 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">All reviews</h2>
            {/* <div className="flex space-x-4 mb-4">
              <button className="bg-gray-200 px-4 py-2 rounded-md">Most detailed</button>
              <button className="bg-gray-200 px-4 py-2 rounded-md">In my area</button>
              <button className="bg-gray-200 px-4 py-2 rounded-md">Frequent users</button>
            </div> */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg flex items-center font-bold mb-1">Aliasgar <span className='mx-6 bg-[#07794C] text-white flex items-center rounded-lg px-2'> <IoStar className="text-white mr-1"/> 3.9</span></h3>
                <p className="text-gray-600 text-sm">Jan 21, 2025. For Haircut for men, 15 mins head massage, Beard Trim & Design, Skin brightening facial (Repechage), Aroma bomb pedicure</p>
                <div className="text-gray-800 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at, pariatur, suscipit ad, impedit qui sunt similique iste quos molestiae officia illo modi inventore quibusdam nam! Illum dolore itaque rerum.</div>
              </div>
            </div>
              <hr class="border-gray-300 my-4" />
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg flex items-center font-bold mb-1">John Doe <span className='mx-6 bg-[#07794C] text-white flex items-center rounded-lg px-2'> <IoStar className="text-white mr-1"/> 4.3</span></h3>
                <p className="text-gray-600 text-sm">Feb 15, 2025. Excellent service and friendly staff. Highly recommend!</p>
                <div className="text-gray-800 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio at, pariatur, suscipit ad, impedit qui sunt similique iste quos molestiae officia illo modi inventore quibusdam nam! Illum dolore itaque rerum.</div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
    // <div className="container mx-auto p-4 bg-white">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <div>
    //       <img
    //         src="https://m.media-amazon.com/images/I/81ADwG+gugL._AC_UF894,1000_QL80_.jpg"
    //         alt="Salon Showcase"
    //         className="w-full h-auto rounded-lg"
    //       />
    //     </div>

    //     <div>
    //       {/* Salon Name */}
    //       <div className="flex flex-col md:flex-row md:justify-between items-center mx-auto mb-4 space-y-4 md:space-y-0">
    //         <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-left">
    //           Salon Showcase Beauty Salon
    //         </h1>
    //         <span className="flex items-center bg-green-500 rounded-lg px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-2">
    //           <span className="mr-2 font-bold text-white text-lg md:text-xl lg:text-2xl">
    //             4.5
    //           </span>
    //           <IoStar
    //             className="text-white"
    //             size={20}
    //             md:size={24}
    //             lg:size={28}
    //           />
    //         </span>
    //       </div>

    //       {/* Salon Address */}
    //       <p className="text-gray-600 mb-4">
    //         Shri Ram ki Nangal via RIICO, Tonk Rd, Sitapura, Jaipur, Rajasthan
    //         302022
    //       </p>

    //       {/* Service Price */}
    //       <div className="flex mb-4 items-center">
    //         <div className="text-2xl font-bold">
    //           ₹1,749{" "}
    //           <span className="text-gray-600 text-sm mx-1 line-through">
    //             ₹1,999
    //           </span>
    //         </div>
    //         <span className="text-red-500 text-sm mx-1 font-bold">79% off</span>
    //       </div>

    //       {/* Booking Button */}
    //       <Link
    //         to={"/booking"}
    //         className="bg-black text-white px-4 py-2 rounded-lg"
    //       >
    //         Continue to Book
    //       </Link>

    //       {/* Description */}
    //       <div className="mt-4">
    //         <span className="text-2xl font-bold">Description</span>
    //         <div className="mt-4 text-gray-600 text-lg">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //           Asperiores repellat possimus placeat cupiditate amet nisi
    //           accusamus illo quis, fugiat recusandae eos accusantium neque
    //           praesentium sequi...
    //         </div>
    //       </div>

    //       {/* About Section (Now below Description on mobile only) */}
    //       <div className="container mx-auto px-4 py-12 mt-8 md:mt-0 md:col-start-1 md:col-span-1">
    //         <h2 className="text-4xl font-bold mb-8">About the process</h2>
    //         <div className="flex flex-col gap-6">
    //           {/* First Section in About */}
    //           <div className="flex items-center gap-4">
    //             <div className="bg-gray-200 rounded-full p-2">
    //               <span className="text-gray-700 font-bold">1</span>
    //             </div>
    //             <div>
    //               <h3 className="text-xl font-medium mb-2">Consultation</h3>
    //               <p className="text-gray-600">
    //                 Detailed consultation by the stylist to understand your
    //                 preferences and suggest the best-suited cut
    //               </p>
    //             </div>
    //           </div>
    //           {/* Second Section in About */}
    //           <div className="flex items-center gap-4">
    //             <div className="bg-gray-200 rounded-full p-2">
    //               <span className="text-gray-700 font-bold">2</span>
    //             </div>
    //             <div>
    //               <h3 className="text-xl font-medium mb-2">
    //                 Haircut & styling
    //               </h3>
    //               <p className="text-gray-600">
    //                 Top-class haircut followed by Schwarzkopf Osis Messup serum
    //                 application to seal the look
    //               </p>
    //             </div>
    //           </div>
    //           {/* Third Section in About */}
    //           <div className="flex items-center gap-4">
    //             <div className="bg-gray-200 rounded-full p-2">
    //               <span className="text-gray-700 font-bold">3</span>
    //             </div>
    //             <div>
    //               <h3 className="text-xl font-medium mb-2">
    //                 Haircut & styling
    //               </h3>
    //               <p className="text-gray-600">
    //                 Top-class haircut followed by Schwarzkopf Osis Messup serum
    //                 application to seal the look
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Reviews */}
    //       <div className="bg-white p-4 mt-20 rounded-lg">
    //         <h2 className="text-4xl font-bold mb-4">All reviews</h2>

    //         <div className="flex items-center justify-between mb-4">
    //           <div>
    //             <h3 className="text-lg flex items-center font-bold mb-1">
    //               Aliasgar{" "}
    //               <span className="mx-6 bg-[#07794C] text-white flex items-center rounded-lg px-2">
    //                 {" "}
    //                 <IoStar className="text-white mr-1" /> 3.9
    //               </span>
    //             </h3>
    //             <p className="text-gray-600 text-sm">
    //               Jan 21, 2025. For Haircut for men, 15 mins head massage, Beard
    //               Trim & Design, Skin brightening facial (Repechage), Aroma bomb
    //               pedicure
    //             </p>
    //             <div className="text-gray-800 mt-4">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit...
    //             </div>
    //           </div>
    //         </div>
    //         <hr className="border-gray-300 my-4" />
    //         <div className="flex items-center justify-between mb-4">
    //           <div>
    //             <h3 className="text-lg flex items-center font-bold mb-1">
    //               John Doe{" "}
    //               <span className="mx-6 bg-[#07794C] text-white flex items-center rounded-lg px-2">
    //                 {" "}
    //                 <IoStar className="text-white mr-1" /> 4.3
    //               </span>
    //             </h3>
    //             <p className="text-gray-600 text-sm">
    //               Feb 15, 2025. Excellent service and friendly staff. Highly
    //               recommend!
    //             </p>
    //             <div className="text-gray-800 mt-4">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit...
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default SalonShowcase;
