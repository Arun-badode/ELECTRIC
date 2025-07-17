import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const BannerManager = () => {
  const [banners, setBanners] = useState([
    { id: 1, image: "/your-banner-image.png" },
  ]);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const newBanner = {
        id: banners.length + 1,
        image: URL.createObjectURL(selectedFile),
      };
      setBanners([...banners, newBanner]);
      setSelectedFile(null);
    }
  };

  const handleDelete = (id) => {
    setBanners(banners.filter((banner) => banner.id !== id));
  };

  return (
    <div className="container my-5">
      <div className="card p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h3 className="text-center mb-4">Upload Banners</h3>
        <form onSubmit={handleUpload}>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">
            Upload
          </button>
        </form>
      </div>

      <div className="my-5">
        <h4>Uploaded Banners</h4>
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {banners.map((banner, index) => (
                <tr key={banner.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={banner.image}
                      alt={`Banner ${banner.id}`}
                      style={{ maxWidth: "120px", borderRadius: "8px" }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(banner.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
              {banners.length === 0 && (
                <tr>
                  <td colSpan="3">No banners uploaded yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BannerManager;