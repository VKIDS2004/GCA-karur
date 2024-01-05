import Header from "./components/Header";
import "./app.scss";
import Home from "./Pages/Home";
import { Routes ,Route, Navigate} from "react-router-dom";
import Login from "./Pages/Login";
import ProtectedRoute from "./context/ProtectedRoute";
import { useEffect } from "react";
import ErrorPage from "./components/ErrorPage";

function App() {
  useEffect(()=>{
    
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="GCA-karur" element={<Login/>}/>
          <Route path="/GCA-karur/home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path="*" element={<Navigate to='GCA-karur' />}/>
      </Routes>
    </div>
  );
}

export default App;
