import React from "react";
import Modal from "@mui/material/Modal";

function DeleteProductModal({ openModel, setOpenModel, deleteProductHandler }) {
  return (
    <div>
      <Modal
        open={openModel}
        onClose={() => setOpenModel(false)}
        className="flex justify-center items-center"
      >
        <div className="w-160 bg-white-30 rounded-xl px-6.5 pt-5 pb-8">
          <div>
            <div className="flex justify-between items-center">
              <div className="text-fs9 font-poppins-semibold font-semibold text-black">
                Delete Product
              </div>
              <div>
                <img
                  src="/images/close-icon.png"
                  alt="Close"
                  onClick={() => setOpenModel(false)}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center mt-5 items-center">
              <img src="/images/cross-red-icon.png" />
              <div className="text-ft7 text-black">Are You Sure ?</div>
              <div>Do you really want to do this?</div>
            </div>
          </div>
          <div className="flex gap-2 justify-center mt-5">
            <button
              className="bg-red p-2 rounded text-white-20"
              onClick={() => setOpenModel(false)}
            >
              Cancel
            </button>
            <button
              className="bg-green-30 p-2 rounded text-white-20"
              onClick={() => deleteProductHandler()}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteProductModal;
