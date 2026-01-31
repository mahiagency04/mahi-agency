import React, { useEffect, useState } from "react";
import profile from "./Profile.module.css";
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className={profile.container}>
      <h3 className={profile.h3}>Profile</h3>

      <span className={profile.span}>
        {userData ? userData.name : "User"}
      </span>
      <hr className={profile.hr2} />

      <span className={profile.span}>
        {userData ? userData.Medical_Store_Name : "Medical Store Name"}
      </span>
      <hr className={profile.hr2} />

      <span className={profile.span}>
        GSTIN: {userData ? userData.GSTIN : "GSTIN Number"}
      </span>

      <hr className={profile.hr1} />

      <div className={profile.details}>
        <li
          className={profile.li}
          onClick={() => navigate("/address")}
        >
          Address
        </li>
        <hr className={profile.hr} />
        <li
          className={profile.li}
          onClick={() => { console.log("Edit Details clicked"); navigate("/edit-details"); }}
        >
          Edit Details
        </li>
        <hr className={profile.hr} />
        <li
          className={profile.li}
          onClick={() => navigate("/changepassword")}
        >
          Change Password
        </li>
      </div>
    </div>
  );
};

export default Profile;