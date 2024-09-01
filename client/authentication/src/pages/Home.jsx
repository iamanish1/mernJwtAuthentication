import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <Header />
      <section id="singup">
        <div className=" container mx-auto  p-4">
          <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md">
            <div>
              <div>
                <img
                  className=" rounded-md"
                  src="https://securityintelligence.com/wp-content/uploads/2018/10/si-advanced-authentication-feature.jpg"
                  alt=""
                />
              </div>
              <div>
                <button 
                className="lg: bg-black text-white px-4 py-2 w-full max-w-[150px]
                rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm font-sans uppercase
                "
                >
                 <Link to={"/singup"}>Click ME...!!!</Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
