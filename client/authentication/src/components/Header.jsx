/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Header = (props) => {
  // // eslint-disable-next-line no-unused-vars
  // const [user, setUser] = useState([]);  // Initially set to null

  // const USER_API = import.meta.env.VITE_USER_API;
  // console.log("USER_API:", USER_API);

  // const LoginUser = async () => {
  //   try {
  //     const response = await axios.get(USER_API);
  //     console.log("response:", response.data);
  //     setUser(response.data);  // Set the first user object as state
  //   } catch (error) {
  //     console.error("Error:", error.message);
  //   }
  // };

  // useEffect(() => {
  //   LoginUser();  // Fetch user data on component mount
  // }, []);

  return (
    <>
      <header>
        <div className=" container max-w-full  bg-white shadow-md flex justify-between">
          <div className="flex justify-center items-center flex-shrink">
            <div className=" text-2xl font-semibold font-sans m-2 max-[380px]:text-[5vmin] ">
              <span>
                <Link to="/">Authentication</Link>
              </span>
            </div>
          </div>
          <div className="flex justify-end items-center">
            {props.type === "afterLogin" && (
              <div className="h-12 w-12 bg-red-white rounded-full">
                {/* <img
                  className="rounded-[3vmin]"
                  src={props.profilePicture}  // use it when it neccessaary
                  alt=""
                /> */}
              </div>
            )}
          </div>
          <div className="">
            <div className="flex justify-center items-center m-2">
              <button
                className=" lg:bg-black  px-5 py-2 text-sm max-[380px]:bg-black text-[4vmin] m-2  
                bg-black  text-white rounded-full max-sm:px-2 max-sm:text-[4.5vmin] max-sm:rounded-[50vmin] max-sm:text-sm"
              >
                <Link to={"/singup"}>Create Account</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <p></p>
        </div>
      </header>
    </>
  );
};
export default Header;
