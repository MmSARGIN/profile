import React from "react";
import { useFormik } from 'formik';

const NewProduct = () => {
    const formik = useFormik({
        initialValues: {
            productName: '',
            price: '',
            address: '',
            phone: '',
            email: '',
            description: '',
            url: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return <div className="w-9/12 flex flex-col">
        <div className="w-full p-5 flex justify-center text-3xl">
            <h1 className="p-3  text-blue-600 font-bold">Add New Product</h1>
        </div>
        <div className="block p-6 shadow-lg bg-blue-100 h-full">
            <form onSubmit={formik.handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input type="text" className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="productName"
                            onChange={formik.handleChange}
                            value={formik.values.productName} aria-describedby="emailHelp123" placeholder="Product Name" />
                    </div>
                    <div className="form-group mb-6">
                        <input type="number"
                            onChange={formik.handleChange}
                            value={formik.values.price}
                            className="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="price"
                            aria-describedby="emailHelp124" placeholder="Price" />
                    </div>
                </div>
                <div className="form-group mb-6">
                    <textarea className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        placeholder="Address" />
                </div>
                <div className="form-group mb-6">
                    <input type="phone" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                        placeholder="Consultant Phone" />
                </div>
                <div className="form-group mb-6">
                    <input type="email" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} placeholder="Consultant Email" />
                </div>
                <div className="form-group mb-6">
                    <textarea className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="description"
                        onChange={formik.handleChange}
                        value={formik.values.description} placeholder="Description" />
                </div>
                <div className="form-group mb-6">
                    <input type="url" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="url"
                        onChange={formik.handleChange}
                        value={formik.values.url}
                        placeholder="Image URL" />
                </div>


                <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Add</button>
            </form>
        </div>
    </div>;
};

export default NewProduct;
