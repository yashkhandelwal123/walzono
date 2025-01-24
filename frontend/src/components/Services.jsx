import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Face',
      icon: <i className="fas fa-face"></i>,
      img: "https://media.istockphoto.com/id/997567634/vector/woman-profile-line-icon.jpg?s=612x612&w=0&k=20&c=O2rxhhtLR1V6eBickRuZ8A85uA_hbeX612ygPunH2l4=",
      service: 'Our face services include facials, makeups, and other treatments to make your face look its best.'
    },
    {
      title: 'Hair',
      icon: <i className="fas fa-hair"></i>,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOzMqvc5RDg-d7gJR6Qp4-8rRGE3FS7LICw&s",
      service: 'Our hair services include haircuts, coloring, and other treatments to make your hair look its best.'
    },
    {
      title: 'Massage',
      icon: <i className="fas fa-massage"></i>,
        img: "https://cdn-icons-png.flaticon.com/512/3046/3046895.png",
      service: 'Our massage services include Swedish massages, deep tissue massages, and other treatments to help you relax and feel your best.'
    }
  ];

  return (
    <div className='flex flex-row justify-center items-center min-h-screen text-black bg-white'>
      <div className="grid grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div key={index} className=" p-4 shadow-md rounded-lg w-3/4 bg-[#D1D5DB] transition duration-500 hover:scale-110 mx-auto">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover mb-4 rounded mix-blend-multiply" />
            <h2 className="text-3xl text-center p-4 font-bold">{service.title}</h2>
            <div className="flex items-center">
              {/* {service.icon} */}
              <p className="ml-2 text-lg">{service.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

