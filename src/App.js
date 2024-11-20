import { Route, Routes } from "react-router-dom";
import "./App.css";
import ReturnForm from "./component/ReturnForm";
import Navbar from "./component/Navbar";
import Error from "./Page/Error";


function App() {
  return (
    <main className='w-screen min-h-screen bg-white text-[#A1A1A1] flex flex-col
    font-inter'>
    
    
    <Routes>
    
      <Route path='/' element={<Navbar/>}>
        {/* Route for return */}
        
        <Route path='/dashboard/my-profile' element={<ReturnForm/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
      
    </main>
  );
}

export default App;
