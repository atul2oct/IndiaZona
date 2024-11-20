import React from 'react'

export const ReturnForm = () => {
    return (
      <form className="max-w-lg mx-auto mt-10 p-4 border rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Return & Exchange</h1>
        <div className="mb-4">
          <label htmlFor="orderId" className="block font-medium">
            Order ID
          </label>
          <input
            type="text"
            id="orderId"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block font-medium">
            Reason for Return/Exchange
          </label>
          <textarea
            id="reason"
            className="w-full px-4 py-2 border rounded-lg"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>
    );
  };
  
  export default ReturnForm;
  
