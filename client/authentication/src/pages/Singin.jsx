import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header";
import AuthButton from "../components/AuthButton";
const Singin = () => {
  const [data, setdata] = useState({
    email: "",
    password: "",
    username: "",
  });
  const naviGate = useNavigate();

  const handelonChange = (e) => {
    const { name, value } = e.target;
    setdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Assuming 'data' is the state holding your form data
    const { email, password } = data;

    console.log("Data for signup:", data);

    const API_URI = import.meta.env.VITE_API_URI;

    try {
      console.log("API_URI:", API_URI);

      // Send POST request to API with form data
      const response = await axios.post(API_URI, {
        email,
        password,
      });

      // Handle success
      naviGate("/profile",{
        state:{
          email : email ,
        }
      });
      toast.success("successfully login");
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors (e.g., network issues or validation errors)
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.warn("Enter a correct password");
        console.error("Error:", error.response.data.message);
      } else {
        console.error("An unexpected error occurred:", error.message);
        toast.warn("Enter a correct password");
      }
    }

    console.log("Submission completed");
  };

  return (
    <>
    <Header/>
      <section id="singup">
        <div className=" container mx-auto  p-4">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md">
            <div className="flex justify-center">
              <h1 className="text-3xl font-semibold font-sans uppercase">
                Login account
              </h1>
            </div>
            <form className="pt-6" onSubmit={handleSumbit}>
              <div>
                <label htmlFor="Name">Email :</label>
                <div className="bg-slate-100 p-2 mb-2">
                  <input
                    type="email"
                    placeholder="enter your Name.."
                    className="w-full h-full outline-none bg-transparent"
                    name="email"
                    required
                    onChange={handelonChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Name">Password :</label>
                <div className="bg-slate-100 p-2 mt-2">
                  <input
                    type="password"
                    placeholder="enter your Name.."
                    className="w-full h-full outline-none bg-transparent"
                    name="password"
                    required
                    onChange={handelonChange}
                  />
                </div>
                <div className="flex flex-row justify-center gap-10 max-sm:flex-col max-sm:gap-1">
                  <div>
                    <button
                      className="lg: bg-black text-white px-6 py-[1.5vmin] w-full max-w-[150px] text-[2.5vmin]
                     rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm max-md:text-sm  max-lg:mx-auto"
                    >
                      Login Account
                    </button>
                    <AuthButton type="email"/>
                  </div>
                </div>
              </div>
            </form>
            <p className="my-5 font-sans text-sm">
              Dont have account ?{" "}
              <Link
                to={"/singup"}
                className=" hover:text-blue-400 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Singin;
