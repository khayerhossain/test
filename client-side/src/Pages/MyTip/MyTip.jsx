import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import UpdateMyTips from "../UpdateMyTip/UpdateMyTip";

const MyTip = () => {
  const myTips = useLoaderData();
  const [tipsData, setTipsData] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setTipsData(myTips);
  }, [myTips]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#15961e",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/sharedata/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your Tips has been deleted.", "success");
              const remainingTipsData = tipsData.filter((tip) => tip._id !== id);
              setTipsData(remainingTipsData);
            }
          });
      }
    });
  };

  const openUpdateModal = (tip) => {
    setSelectedTip(tip);
    setModalOpen(true);
  };

  const closeUpdateModal = () => {
    setModalOpen(false);
    setSelectedTip(null);
  };

  const handleSaveUpdate = (updatedTip) => {
    const { _id, ...updatedData } = updatedTip;

    Swal.fire({
      title: "Updating...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    fetch(`http://localhost:3000/sharedata/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.close();
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your tip has been updated.", "success");
          const updatedTips = tipsData.map((tip) =>
            tip._id === _id ? updatedTip : tip
          );
          setTipsData(updatedTips);
          closeUpdateModal();
        } else {
          Swal.fire("No changes detected", "Nothing was updated.", "info");
        }
      })
      .catch((err) => {
        Swal.close();
        console.error("Update failed:", err);
        Swal.fire("Error", "Update failed, try again.", "error");
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-12 px-4 md:px-8 lg:px-16 space-y-6">
      {tipsData.map((tip) => (
        <div
          key={tip._id}
          className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row w-full md:w-10/12 mx-auto"
        >
          <img
            src={tip.image}
            alt={tip.title}
            className="w-auto md:w-72 h-60 object-cover rounded-xl m-4"
          />

          <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-1">
            <div className="flex flex-col gap-2 text-gray-800 flex-grow">
              <h2 className="text-2xl font-semibold">{tip.title}</h2>
              <span className="inline-block bg-gradient-to-r from-green-200 to-green-100 text-green-800 px-3 py-1 text-xs rounded-full w-fit mt-1">
                {tip.topic}
              </span>
              <p className="text-sm text-gray-700 mt-2">{tip.description}</p>
              <div className="text-xs flex flex-wrap gap-2 mt-2">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                  {tip.difficulty}
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  {tip.category}
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                  {tip.availability}
                </span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Shared by <span className="font-semibold">{tip.name}</span> (
                {tip.email})
              </div>
            </div>

            <div className="flex md:flex-col w-full md:w-auto justify-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => openUpdateModal(tip)}
                className="flex items-center gap-2 bg-black text-white text-sm px-4 py-2 rounded-md shadow-sm cursor-pointer"
              >
                <Pencil size={16} /> Update
              </button>
              <button
                onClick={() => handleDelete(tip._id)}
                className="flex items-center gap-2 bg-red-500 text-white text-sm px-4 py-2 rounded-md shadow-sm cursor-pointer mt-0 md:mt-2"
              >
                <Trash2 size={16} /> Delete
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <UpdateMyTips
        isOpen={modalOpen}
        onClose={closeUpdateModal}
        tip={selectedTip}
        onSave={handleSaveUpdate}
      />
    </div>
  );
};

export default MyTip;
