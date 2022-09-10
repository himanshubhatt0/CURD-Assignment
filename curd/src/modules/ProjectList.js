import React, { useState } from "react";
import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./DeleteProductModal";
import EditProductModal from "./EditProductModal";

function ProjectList() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [createDate, setCreateDate] = useState("");
  const [obj, setObject] = useState([]);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editPreview, setEditPreview] = useState(null);
  const [editProductName, setEditProductName] = useState("");
  const [editDetail, setEditDetail] = useState("");
  const [editPrice, setEditPrice] = useState(null);
  const [editQuantity, setEditQuantity] = useState(null);
  const [editTotalPrice, setEditTotalPrice] = useState(null);
  const [editCreateDate, setEditCreateDate] = useState("");
  const [key, setKey] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState();

  const addProductHandler = () => {
    console.log(productName, detail, price, quantity, totalPrice, createDate);
    setObject([
      ...obj,
      {
        preview,
        productName,
        detail,
        price,
        quantity,
        totalPrice,
        createDate,
      },
    ]);
    setFile(null);
    setPreview(null);
    setProductName("");
    setDetail("");
    setQuantity(null);
    setPrice(null);
    setTotalPrice(null);
    setCreateDate("");
    setOpenAddModal(false);
  };

  const deleteIndexDetail = (index) => {
    console.log("index", index);
    setDeleteIndex(index);
    setOpenDeleteModal(true);
  };

  const deleteProductHandler = () => {
    obj.splice(deleteIndex, 1);
    setObject([...obj]);
    setOpenDeleteModal(false);
  };

  const editList = (index, object) => {
    setKey(index);
    setEditPreview(object["preview"]);
    setEditProductName(object["productName"]);
    setEditDetail(object["detail"]);
    setEditPrice(object["price"]);
    setEditQuantity(object["quantity"]);
    setEditTotalPrice(object["totalPrice"]);
    setEditCreateDate(object["createDate"]);
    setOpenEditModal(true);
  };

  const editProductHandler = () => {
    obj[key].productName = editProductName;
    obj[key].detail = editDetail;
    obj[key].price = editPrice;
    obj[key].quantity = editQuantity;
    obj[key].totalPrice = editTotalPrice;
    obj[key].createDate = editCreateDate;
    setOpenEditModal(false);
  };

  const onAddImage = (file) => {
    window.URL.revokeObjectURL(preview);
    if (!file) return;
    setPreview(window.URL.createObjectURL(file));
  };

  const editOnAddImage = (file) => {
    window.URL.revokeObjectURL(editPreview);
    if (!file) return;
    setPreview(window.URL.createObjectURL(file));
  };

  return (
    <div>
      <div className="p-4 border-b-2 border-black">
        <button
          className="bg-green-30 p-2 rounded "
          onClick={() => setOpenAddModal(true)}
        >
          Add Product
        </button>
      </div>
      <div>
        <table className="w-full">
          <tr className="text-left p-4 ">
            <th>Image</th>
            <th>Product Name</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Created Date</th>
          </tr>
          {obj.map((o, index) => {
            return (
              <tr className="pt-5 pb-5">
                <td>
                  {" "}
                  <img
                    src={o["preview"]}
                    id="image"
                    alt="Thumbnail"
                    className="w-40.5 h-15 rounded-full"
                  />
                </td>
                <td>{o["productName"]}</td>
                <td>{o["detail"]}</td>
                <td>{o["price"]}</td>
                <td>{o["quantity"]}</td>
                <td>{o["totalPrice"]}</td>
                <td>{o["createDate"]}</td>
                <td>
                  <div className="flex gap-2 items-center justify-center">
                    <button
                      className="bg-red p-2 rounded text-white-20"
                      onClick={() => deleteIndexDetail(index)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-green-30 p-2 rounded text-white-20"
                      onClick={() => editList(index, o)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      {openAddModal && (
        <AddProductModal
          openModel={openAddModal}
          setOpenModel={setOpenAddModal}
          productName={productName}
          setProductName={setProductName}
          detail={detail}
          setDetail={setDetail}
          price={price}
          setPrice={setPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          createDate={createDate}
          setCreateDate={setCreateDate}
          addProductHandler={addProductHandler}
          preview={preview}
          setPreview={setPreview}
          file={file}
          setFile={setFile}
          onAddImage={onAddImage}
        />
      )}
      {openEditModal && (
        <EditProductModal
          openModel={openEditModal}
          setOpenModel={setOpenEditModal}
          productName={editProductName}
          setProductName={setEditProductName}
          detail={editDetail}
          setDetail={setEditDetail}
          price={editPrice}
          setPrice={setEditPrice}
          quantity={editQuantity}
          setQuantity={setEditQuantity}
          totalPrice={editTotalPrice}
          setTotalPrice={setEditTotalPrice}
          createDate={editCreateDate}
          setCreateDate={setEditCreateDate}
          editProductHandler={editProductHandler}
          preview={editPreview}
          setPreview={setEditPreview}
          file={file}
          setFile={setFile}
          onAddImage={editOnAddImage}
        />
      )}
      {openDeleteModal && (
        <DeleteProductModal
          openModel={openDeleteModal}
          setOpenModel={setOpenDeleteModal}
          deleteProductHandler={deleteProductHandler}
        />
      )}
    </div>
  );
}

export default ProjectList;
