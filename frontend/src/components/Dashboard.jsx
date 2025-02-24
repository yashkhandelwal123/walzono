import React, { useState } from "react";
import { Plus, LayoutList, DollarSign, Scissors, Edit2 } from "lucide-react";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("orderHistory");
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    serviceName: "",
    description: "",
    price: "",
    image: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleAddService = () => {
    if (
      newService.serviceName &&
      newService.description &&
      newService.price &&
      newService.image
    ) {
      if (editingIndex !== null) {
        const updatedServices = [...services];
        updatedServices[editingIndex] = newService;
        setServices(updatedServices);
        setEditingIndex(null);
      } else {
        setServices([...services, newService]);
      }
      setNewService({ serviceName: "", description: "", price: "", image: "" });
    } else {
      alert("All fields are required.");
    }
  };

  const handleEditService = (index) => {
    setNewService(services[index]);
    setEditingIndex(index);
  };

  return (
    <div className="flex flex-col h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="w-full bg-gray-300 text-black p-4 shadow-md">
        <h1 className="text-xl font-bold">Parlour Dashboard</h1>
      </nav>

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 bg-gray-200 text-black p-4 space-y-4">
          <button
            className={`flex items-center p-2 rounded-xl w-full hover:bg-gray-300 ${
              activeSection === "orderHistory" && "bg-gray-300"
            }`}
            onClick={() => setActiveSection("orderHistory")}
          >
            <LayoutList className="mr-2" /> Order History
          </button>
          <button
            className={`flex items-center p-2 rounded-xl w-full hover:bg-gray-300 ${
              activeSection === "services" && "bg-gray-300"
            }`}
            onClick={() => setActiveSection("services")}
          >
            <Scissors className="mr-2" /> Services
          </button>
          <button
            className={`flex items-center p-2 rounded-xl w-full hover:bg-gray-300 ${
              activeSection === "payments" && "bg-gray-300"
            }`}
            onClick={() => setActiveSection("payments")}
          >
            <DollarSign className="mr-2" /> Payments
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          {activeSection === "orderHistory" && (
            <h1 className="text-2xl font-bold">Order History</h1>
          )}

          {activeSection === "services" && (
            <div>
              <h1 className="text-2xl font-bold mb-4">Manage Services</h1>
              <div className="mb-4 p-4 border rounded-xl shadow-md bg-gray-100">
                <input
                  name="serviceName"
                  placeholder="Service Name"
                  value={newService.serviceName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 mb-2 border rounded-md bg-white text-black"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={newService.description}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 mb-2 border rounded-md bg-white text-black"
                />
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  value={newService.price}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 mb-2 border rounded-md bg-white text-black"
                />
                <input
                  name="image"
                  type="text"
                  placeholder="Image URL"
                  value={newService.image}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 mb-2 border rounded-md bg-white text-black"
                />
                <button
                  onClick={handleAddService}
                  className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {editingIndex !== null ? "Update Service" : (<> <Plus className="inline-block mr-2" /> Add Service </>)}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-xl shadow-md bg-gray-100 relative"
                  >
                    <button
                      onClick={() => handleEditService(index)}
                      className="absolute top-2 right-2 p-1 bg-yellow-300 rounded-full hover:bg-yellow-400"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <h2 className="text-xl font-semibold mb-2">{service.serviceName}</h2>
                    <p className="text-gray-800 mb-2">{service.description}</p>
                    <p className="text-green-600 font-bold mb-2">${service.price}</p>
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.serviceName}
                        className="w-full h-32 object-cover rounded-md"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "payments" && (
            <h1 className="text-2xl font-bold">Payments</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
