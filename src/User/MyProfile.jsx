import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosPublic from "../Hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import { getAuth, updateProfile } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const MyProfile = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const { user, setUser } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = "7db36bb09d61203fe2df5395815077ff";
  const image_hosting = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const profile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting, profile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);

    const auth = getAuth(app);

    await updateProfile(auth.currentUser, { photoURL: res.data.data.url });

    setUser({
      ...user,
      photoURL: res.data.data.url,
    });
  };

  //   const handleFileChange = (e) => {
  //     const file =e.target.file[0]
  //     console.log(file)
  //   }
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="min-h-screen pt-10 md:pt-12 lg:pt-20 px-6"
    >
      <div className=" text-3xl md:text-4xl text-center font-bold pt-20">
        <h2>My Profile</h2>
      </div>
      <div>
        <div class="">
          <div class="max-w-lg bg-gray-200 mx-auto my-10  rounded-lg shadow-md p-5">
            <img
              class="w-32 h-32 rounded-full mx-auto"
              src={user?.photoURL}
              alt="Profile picture"
            />
            <form
              className=" text-center  max-w-md py-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Other form fields */}
              <input
                className=" pl-16 md:pl-0"
                type="file"
                {...register("image")}
              />
              <button
                className=" my-4 md:my-4 lg:my-0 px-4 py-2 bg-green-700 text-white rounded-md"
                type="submit"
              >
                Update Profile
              </button>
            </form>
            <h2 class="text-center text-2xl font-semibold mt-1">
              {user?.displayName}
            </h2>
            <p class="text-center text-gray-600 mt-1">{user?.email}</p>
            <div class="flex justify-center mt-5">
              <a href="#" class="text-green-500 hover:text-green-700 mx-3">
                Twitter
              </a>
              <a href="#" class="text-green-500 hover:text-green-700 mx-3">
                LinkedIn
              </a>
              <a href="#" class="text-green-500 hover:text-green-700 mx-3">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
