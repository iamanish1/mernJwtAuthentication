import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className=" container max-w-full  bg-white shadow-md flex justify-between">
          <div className="flex justify-center items-center flex-shrink">
            <div className=" text-2xl font-semibold font-sans m-2 max-[380px]:text-[5vmin] ">
              <span>Authentication</span>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center items-center m-2">
              <button
                className=" lg:bg-black  px-5 py-2 text-sm max-[380px]:bg-black text-[4vmin] m-2  
                bg-black  text-white rounded-full max-sm:px-2 max-sm:text-[4.5vmin] max-sm:rounded-[50vmin] "
              >
                <Link to={"/singup"}>Create Account</Link>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
