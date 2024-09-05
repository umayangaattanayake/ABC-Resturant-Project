import { useState, useEffect, useContext } from "react";
import { updateProfile } from "../api/profileApi";
import { UniversalContext } from '../context/UniversalContext';

const EditProfile = () => {
  const { setValue } = useContext(UniversalContext);
  const [profile, setProfile] = useState({
    id: null,
    userId: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    profilePicture: "",
    bio: "",
  });
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile"));
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedProfile) {
      setProfile(storedProfile);
    }
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await updateProfile(
        profile.id,
        user.id,
        profile.firstName,
        profile.lastName,
        profile.phoneNumber,
        profile.profilePicture,
        profile.bio
      );
      if (response.ok) {
        localStorage.setItem("profile", JSON.stringify(profile));
        setValue("profile", profile);
        setValue("AlertType", "success");
        setValue("AlertMessage", "Profile updated successfully");
        setValue("AlertVisibility", true);
      } else {
        setValue("AlertType", "danger");
        setValue("AlertMessage", response.message);
        setValue("AlertVisibility", true);
      }
    } catch (error) {
      setValue("AlertType", "danger");
      setValue("AlertMessage", "Error updating profile");
      setValue("AlertVisibility", true);
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setProfile((prevProfile) => ({ ...prevProfile, [id]: value }));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <div className="card" style={{ borderColor: '#007bff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#ffffff' }}>
        <div className="card-body" style={{ padding: '2rem' }}>
          <h3 className="card-title mb-4" style={{ color: '#007bff' }}>Edit Profile</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="firstName" style={{ color: '#343a40' }}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{ borderColor: '#007bff', borderWidth: '2px', backgroundColor: '#ffffff' }}
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="lastName" style={{ color: '#343a40' }}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{ borderColor: '#007bff', borderWidth: '2px', backgroundColor: '#ffffff' }}
                  placeholder="Enter your last name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="phoneNumber" style={{ color: '#343a40' }}>Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={profile.phoneNumber}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{ borderColor: '#007bff', borderWidth: '2px', backgroundColor: '#ffffff' }}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label fw-bold" htmlFor="bio" style={{ color: '#343a40' }}>Bio</label>
                <textarea
                  id="bio"
                  value={profile.bio}
                  onChange={handleInputChange}
                  className="form-control"
                  style={{ borderColor: '#007bff', borderWidth: '2px', backgroundColor: '#ffffff' }}
                  rows="6"
                  placeholder="Tell us about yourself"
                />
              </div>
            </div>
          </div>
          <button 
            className="btn btn-primary btn-lg mt-3"
            style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
            onClick={handleUpdate}
          >
            <i className="ri-save-line me-2 fs-18"></i> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
