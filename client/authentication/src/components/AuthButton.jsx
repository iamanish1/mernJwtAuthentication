import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../fireBase";
import axios from "axios";

const AuthButton = () => {
  const handelClick = async () => {
    try {
      // Add your Google OAuth authentication code here
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const url = "http://localhost:8000/api/auth/googleauth"
      const res = await axios.post(url, {
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
        uid: result.user.uid,
      });
      console.log(res);
      toast.success("Successfully logged in with Google");
      console.log(result);
      // For example, you can use the google-auth-library to handle OAuth flow
      // ...
      console.log("Google OAuth authentication code has been added.");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to authenticate with Google");
    }
  };

  return (
    <>
      <div>
        <div>
          <button
            type="button"
            onClick={handelClick}
            className="bg-black text-white px-3 py-2 w-full max-w-[150px]
                     rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm"
          >
            {" "}
            Google Account
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthButton;
