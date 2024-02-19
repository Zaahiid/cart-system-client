import { useState } from "react";

const CustomerInfo = ({
  onSubmit,
  setShowForm,
  formData,
  setFormData,
  makePayment,
}) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowForm(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" md:w-10/12  md:h-1/2 lg::w-3/4  lg:h-3/4 bg-yellow-200 fixed top-20 right-[15%] md:top-32 md:right-[10%] lg:top-10 lg:right-[10%] rounded-md border border-yellow-600 shadow-md"
    >
      <button
        className="bg-red-500 px-2 rounded-full absolute right-1 top-1"
        onClick={() => setShowForm(false)}
      >
        X
      </button>
      <h1 className="text-xl font-medium text-black/80 underline mt-7 text-center">
        Please fill the information
      </h1>
      <div className="flex flex-col mx-7 mt-7">
        <label
          htmlFor="name"
          className="text-xl font-medium text-black/70 my-2"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="py-1 px-2 rounded-md text-lg bg-slate-50 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col mx-7 mt-3">
        <label
          htmlFor="email"
          className="text-xl font-medium text-black/70 my-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="py-1 px-2 rounded-md text-lg bg-slate-50 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col mx-7 mt-3">
        <label
          htmlFor="phone"
          className="text-xl font-medium text-black/70 my-2"
        >
          Phone:
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="py-1 px-2 rounded-md text-lg bg-slate-50 focus:outline-blue-400"
        />
      </div>
      <div className="flex flex-col mx-7 mt-3">
        <label
          htmlFor="address"
          className="text-xl font-medium text-black/70 my-2"
        >
          Address:
        </label>
        <textarea
          type="textarea"
          rows={3}
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="py-1 px-2 rounded-md text-lg bg-slate-50 focus:outline-blue-400"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-400 px-3 py-1 rounded-md text-lg text-white font-medium mt-5 ml-7"
        onClick={() => makePayment()}
      >
        Submit
      </button>
    </form>
  );
};

export default CustomerInfo;
