import Game from "./Pages/Game-page";
import Login from "./Pages/login-page";
import Register from "./Pages/sign-page";
import { Routes, Route} from 'react-router-dom';
import Profile from "./Pages/Profile-page";
import Users from "./Pages/Users-page";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Games" element={<Game/>} />
        <Route path="Games/profile" element={<Profile/>} />
        <Route path="Games/users" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
