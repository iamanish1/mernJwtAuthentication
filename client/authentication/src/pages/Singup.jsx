import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
const Singup = ()=>{
    const [data,setdata] = useState({
        email : "",
        password : "",
        username : "", 
    }) 

    const handelonChange = (e)=>{
        const{name,value} = e.target
        setdata((preve)=>{
            return{
               ...preve,
               [name]:value 
            }
        })
    }

    const handleSumbit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
      
        // Assuming 'data' is the state holding your form data
        const { username, email, password } = data; 
      
        console.log("Data for signup:", data);
      
        const API_URI = "http://localhost:8000/api/auth/singup";
        
      
        try {
          console.log("API_URI:", API_URI);
      
          // Send POST request to API with form data
          const response = await axios.post(API_URI, {
            username,
            email,
            password,
          });
      
          // Handle success
          console.log("Response:", response.data);
        } catch (error) {
          // Handle errors (e.g., network issues or validation errors)
          if (error.response && error.response.data && error.response.data.message) {
            console.error("Error:", error.response.data.message);
          } else {
            console.error("An unexpected error occurred:", error.message);
          }
        }
      
        console.log("Submission completed");
      };
      
    return(
    <>
       <section id="singup"> 
        <div className=" container mx-auto  p-4">
            <div className="bg-white p-6 w-full max-w-md mx-auto rounded shadow-md"> 
                  <div className="flex justify-center">
                    <h1 className="text-3xl font-semibold font-sans uppercase">Create account</h1>
                  </div>
                  <form className='pt-6' onSubmit={handleSumbit}>
                     
                     <div>
                            <label htmlFor="Name">UserName :</label>
                            <div className="bg-slate-100 p-2 mb-2">
                            <input type="text"
                            placeholder='enter your Name..' 
                            className='w-full h-full outline-none bg-transparent'
                            name='username'
                            required
                            onChange={handelonChange}
                            />
                            
                            
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Name">Email :</label>
                            <div className="bg-slate-100 p-2 mb-2">
                            <input type="text"
                            placeholder='enter your Name..' 
                            className='w-full h-full outline-none bg-transparent'
                            name='email'
                            required
                            onChange={handelonChange}/>
                            
                            
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Name">Password :</label>
                            <div className="bg-slate-100 p-2 mt-2">
                            <input type="text"
                            placeholder='enter your Name..' 
                            className='w-full h-full outline-none bg-transparent'
                            name='password'
                            required
                            onChange={handelonChange}
                            /> 
                            
                            
                      </div>
                      <div className="flex flex-row justify-center gap-16 max-sm:flex-col max-sm:gap-3">
                      <div>
                      <button className='lg: bg-black text-white px-4 py-2 w-full max-w-[150px]
                     rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm'>Create Account</button>
                     </div>
                     <div>
                     <button className='bg-black text-white px-4 py-2 w-full max-w-[150px]
                     rounded-full hover:scale-110 transition-all mx-auto block mt-6 max-sm:px-1 max-sm:text-sm'> Google Account</button>
                     </div>
                     </div>
                    </div>
                 </form>  
                 <p className='my-5 font-sans text-sm'
                >Already have account ? <Link to={"/singin"} className=' hover:text-blue-400 hover:underline'
                >Login</Link></p>
     
    
            </div>
        </div>
    </section>
    </>
)}
export default Singup ; 