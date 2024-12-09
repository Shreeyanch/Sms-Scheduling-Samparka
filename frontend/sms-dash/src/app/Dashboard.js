"use client";
import { useState } from "react";

const Dashboard = () => {
  // Initial customer data (this would come from your backend)
  const [customers, setCustomers] = useState([
    {
      customer_id: 1,
      customer_email: "customer1@example.com",
      password: "********",
      sms_rate: "$0.10",
    },
    {
      customer_id: 2,
      customer_email: "customer2@example.com",
      password: "********",
      sms_rate: "$0.15",
    },
    {
      customer_id: 3,
      customer_email: "customer3@example.com",
      password: "********",
      sms_rate: "$0.12",
    },
    // Add more customer data if needed
  ]);

  // Handle the change in SMS rate
  const handleSmsRateChange = (customerId, newRate) => {
    setCustomers((prevCustomers) =>
      prevCustomers.map((customer) =>
        customer.customer_id === customerId
          ? { ...customer, sms_rate: newRate }
          : customer
      )
    );

    // Here you can send the new SMS rate to your backend (e.g., using axios)
    // Example:
    // axios.put(`/api/customers/${customerId}`, { sms_rate: newRate })
    //   .then(response => {
    //     // Handle success
    //   })
    //   .catch(error => {
    //     // Handle error
    //   });
  };

  // Handle when the user finishes editing the SMS rate (on blur)
  const handleBlur = (e, customerId) => {
    const newRate = e.target.innerText;
    if (newRate && newRate !== "$0.00") {
      handleSmsRateChange(customerId, newRate);
    }
  };

  // Handle Enter key press to save the SMS rate
  const handleKeyDown = (e, customerId) => {
    if (e.key === "Enter") {
      const newRate = e.target.innerText;
      if (newRate && newRate !== "$0.00") {
        handleSmsRateChange(customerId, newRate);
      }
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Customer Dashboard</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Customer ID</th>
              <th className="px-6 py-3 text-left">Customer Email</th>
              <th className="px-6 py-3 text-left">Password</th>
              <th className="px-6 py-3 text-left">SMS Rate</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customer_id} className="border-b">
                <td className="px-6 py-4">{customer.customer_id}</td>
                <td className="px-6 py-4">{customer.customer_email}</td>
                <td className="px-6 py-4">{customer.password}</td>
                <td
                  className="px-6 py-4 cursor-pointer"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onBlur={(e) => handleBlur(e, customer.customer_id)}
                  onKeyDown={(e) => handleKeyDown(e, customer.customer_id)}
                >
                  {customer.sms_rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
