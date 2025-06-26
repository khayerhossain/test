import React, { useState, useEffect } from "react";

const UpdateMyTips = ({ isOpen, onClose, tip, onSave }) => {
  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    description: "",
    image: "",
    category: "",
    difficulty: "",
    availability: "",
  });

  useEffect(() => {
    if (tip) {
      setFormData(tip);
    }
  }, [tip]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Tip</h2>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          placeholder="Topic"
          className="border p-2 w-full mb-3 rounded"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
          placeholder="Difficulty"
          className="border p-2 w-full mb-3 rounded"
        />
        <input
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          placeholder="Availability"
          className="border p-2 w-full mb-3 rounded"
        />

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyTips;
