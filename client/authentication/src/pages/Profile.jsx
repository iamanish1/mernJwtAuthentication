import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { useState, useEffect } from "react";

const Profile = () => {
  const [user, setUser] = useState([]); // Initially set to an empty array

  const USER_API = import.meta.env.VITE_USER_API;
  console.log("USER_API:", USER_API);

  const navigate = useNavigate(); // Hook for navigation

  const LoginUser = async () => {
    try {
      const response = await axios.get(USER_API);
      console.log("response:", response.data);
      setUser(response.data); // Set the first user object as state
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    LoginUser(); // Fetch user data on component mount
  }, []);

  const location = useLocation();
  const loginUser = user.filter((val) => val.email === location.state.email);
  console.log("loginUser:", loginUser);

  const handleLogout = () => {
    // Clear any authentication tokens or user data if necessary
    // For example, clear local storage or remove authentication headers
    localStorage.removeItem("authToken"); // Adjust this according to your app's auth mechanism

    // Redirect to the home page
    navigate("/");
  };

  return (
    <>
      {user.length === 0 && <p>Data loading...</p>}
      {user.length > 0 && (
        <>
          <Header
            type="afterLogin"
            profilePicture={loginUser[0].profilePicture}
          />
          <section id="signup">
            <div className="container mx-auto p-4">
              <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md">
                <div className="flex justify-center">
                  <div>
                    <h1 className="text-3xl font-semibold font-sans uppercase">
                      Profile
                    </h1>
                  </div>
                </div>
                <div className="flex justify-center flex-col items-center">
                  <div>
                    <img
                      className="rounded-full h-24 mt-4"
                      src={
                        loginUser.length > 0 ? loginUser[0].profilePicture : ""
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="uppercase text-4xl font-sans font-semibold mt-5">
                      {loginUser.length > 0
                        ? loginUser[0].username
                        : "No username available"}
                    </h3>
                  </div>
                  <div>
                    <h3 className="lowercase text-2xl font-sans font-semibold mt-5">
                      {loginUser.length > 0
                        ? loginUser[0].email
                        : "No email available"}
                    </h3>
                  </div>
                  <button onClick={handleLogout}
                   className="lg: bg-black text-white px-6 py-[1.5vmin] w-full max-w-[150px] text-[2.5vmin]
                    rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm max-md:text-sm  max-lg:mx-auto"
                  >Logout</button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Profile;
