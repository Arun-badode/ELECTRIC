import React, { useState } from "react";

const MyProfile = () => {
      const [activeTab, setActiveTab] = useState("profile");
    
      const user = {
        name: "User Name",
        email: "abc@example.com",
        phone: "+ 0123456789",
        address: "abc defj hijk",
      };
    
  return (
    <>
       <div className="card mb-4 shadow-sm rounded">
            <div className="card-body">
              <h4 className="mb-3">My Profile</h4>
              <div className="d-flex align-items-center mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="rounded-circle me-3"
                  style={{ width: "80px", height: "80px" }}
                />
                <div>
                  <h5>{user.name}</h5>
                  <p className="text-muted mb-0">{user.email}</p>
                  <p className="text-muted mb-0">{user.phone}</p>
                </div>
              </div>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <button className="btn btn-primary btn-sm">Edit Profile</button>
            </div>
          </div>
    </>
  )
}

export default MyProfile
