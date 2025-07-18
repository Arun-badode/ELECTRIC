
import React, { useState } from "react";
const ProfileSetting = () => {
     const [activeTab, setActiveTab] = useState("profile");
      const user = {
    name: "User Name",
    email: "abc@example.com",
    phone: "+ 0123456789",
    address: "abc defj hijk",
  };
  return (
    <>
        <div className="card shadow-sm rounded">
            <div className="card-body">
              <h4 className="mb-3">Account Settings</h4>
              <div className="mb-3">
                <h5>Personal Information</h5>
                <div className="card p-3 mb-3">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.name}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      defaultValue={user.email}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      defaultValue={user.phone}
                    />
                  </div>
                  <button className="btn btn-primary">Update Information</button>
                </div>
              </div>
              <div className="mb-3">
                <h5>Change Password</h5>
                <div className="card p-3">
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <button className="btn btn-primary">Change Password</button>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProfileSetting
