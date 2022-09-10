import React from "react";
import Modal from "@mui/material/Modal";

function EditProductModal({
  openModel,
  setOpenModel,
  productName,
  setProductName,
  detail,
  setDetail,
  price,
  setPrice,
  quantity,
  setQuantity,
  totalPrice,
  setTotalPrice,
  createDate,
  setCreateDate,
  editProductHandler,
  preview,
  setPreview,
  file,
  setFile,
  onAddImage,
}) {
  const quantityHandler = (value) => {
    setQuantity(value);
    setTotalPrice(price * value);
  };
  const priceHandler = (value) => {
    setPrice(value);
    setTotalPrice(value * quantity);
  };
  return (
    <div>
      <Modal
        open={openModel}
        onClose={() => setOpenModel(false)}
        className="flex justify-center items-center"
      >
        <div className="w-160 bg-white-30 rounded-xl px-6.5 pt-5 pb-8">
          <div className="flex justify-between items-center">
            <div className="text-fs9 font-poppins-semibold font-semibold text-black">
              Edit Product
            </div>
            <img
              src="/images/close-icon.png"
              alt="Close"
              onClick={() => setOpenModel(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-1 mt-6">
            {preview == null ? (
              <div>Picture</div>
            ) : (
              <img
                src={preview}
                id="image"
                alt="Thumbnail"
                className="w-40.5 h-15 rounded-full"
              />
            )}
            <input
              filename={file}
              onChange={(e) => onAddImage(e.target.files[0])}
              type="file"
              accept="image/*"
              id="image-selection-btn"
            ></input>
            <div className="mt-5">
              <div className="mb-2">Product Name</div>
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2">Detail</div>
              <input
                type="text"
                placeholder="Detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2">Price</div>
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => priceHandler(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2">Quantity</div>
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => quantityHandler(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
              />
            </div>
            <div className="mt-5">
              <div className="mb-2">Total Price</div>
              <input
                type="number"
                placeholder="Total Price"
                value={totalPrice}
                onChange={(e) => setTotalPrice(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
                readOnly
              />
            </div>
            <div className="mt-5">
              <div className="mb-2">Create Date</div>
              <input
                type="date"
                placeholder="Create Date"
                value={createDate}
                onChange={(e) => setCreateDate(e.target.value)}
                className="border-2 w-full border-gray-20 p-2"
              />
            </div>
            <div className="flex gap-2 justify-end mt-5">
              <button
                className="bg-green-30 p-2 rounded text-white-20"
                onClick={() => editProductHandler()}
              >
                Update
              </button>
              <button
                className="bg-red p-2 rounded text-white-20"
                onClick={() => setOpenModel(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default EditProductModal;
