import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import axiosInstance from "../../Utilities/axiosInstance";

const BannerManager = () => {
  const [banners, setBanners] = useState([]);
 

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axiosInstance.get(
          `/banner/getAllBanners`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            
            },
          }
        );
        if (response.data.success) {
          const formattedData = response.data.data.map((banner) => ({
            id: banner.id,
            image: banner.image[0],
          }));
          setBanners(formattedData);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

  // ✅ FIXED DELETE HANDLER
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this banner?")) {
      return;
    }

    try {
      await axiosInstance.delete(  `/banner/deleteBanner/${id}`, );
      // Remove from UI after successful delete
      setBanners(banners.filter((banner) => banner.id !== id));
      alert("Banner deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete banner. Please try again.");
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      setUploading(true);
      const response = await axiosInstance.post(
        `/banner/createBanner`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            
          },
        }
      );

      if (response.data.success) {
        alert("Banner uploaded successfully!");
        setSelectedFile(null);

        // ✅ Refresh banners after upload
        setBanners((prev) => [
          ...prev,
          {
            id: response.data.data.id,
            image: response.data.data.image[0],
          },
        ]);
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="container my-5">
      <div className="card p-4 mx-auto">
        <h3 className="text-center mb-4">Upload Banners</h3>
        <form onSubmit={handleUpload}>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary w-100"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>

      <div className="my-5">
        <h4>Uploaded Banners</h4>
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center">
            <thead className="bg-white">
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
