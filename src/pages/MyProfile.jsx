import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import defaultAvatar from "../assets/image.png";

const MyProfile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  // ✅ Sync state with user data
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return;

    const updatedName = name.trim() || user.displayName;
    const updatedPhoto = photo.trim() || user.photoURL;

    try {
      await updateUser({
        displayName: updatedName,
        photoURL: updatedPhoto,
      });

      setUser({
        ...user,
        displayName: updatedName,
        photoURL: updatedPhoto,
      });

      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update profile!");
    }
  };

  return (
    <section className="flex items-center justify-center bg-white dark:bg-gray-900 min-h-screen px-4 py-12">
      <Toaster position="top-center" />

      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-100 dark:border-gray-700">
        {!editing ? (
          <>
            {/* Avatar */}
            <div className="avatar mb-6">
              <div className="w-32 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-white dark:ring-offset-gray-800 mx-auto hover:scale-105 transition">
                <img
                  src={user?.photoURL || defaultAvatar}
                  alt="User"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              {user?.displayName || "Pet Lover"}
            </h2>

            <p className="text-sm font-medium text-primary mb-4">
              {user?.email || "No email found"}
            </p>

            {user?.metadata?.creationTime && (
              <p className="text-xs text-gray-500 mb-6">
                Joined:{" "}
                {new Date(
                  user.metadata.creationTime
                ).toLocaleDateString()}
              </p>
            )}

            <button
              onClick={() => setEditing(true)}
              className="btn btn-primary w-full max-w-xs font-bold rounded-full"
            >
              ✏️ Edit Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-6 animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Update Your Profile
            </h2>

            {/* Name */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-2">
                Name <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new name"
                className="input input-bordered input-primary w-full"
              />
            </div>

            {/* Photo URL */}
            <div className="flex flex-col text-left">
              <label className="font-semibold mb-2">
                Photo URL{" "}
                <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Enter new photo URL"
                className="input input-bordered input-primary w-full"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="btn btn-success flex-1 rounded-full"
              >
                ✔️ Save
              </button>

              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-ghost flex-1 rounded-full border"
              >
                ❌ Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
