import { Outlet}from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
function App() {
return (  
   <>
  

 <Header/>
  <main className="min-h-[calc(100vh-120px)]">
     <Outlet />
  </main>
<Footer/>
    
    </>
 )
}

export default App
