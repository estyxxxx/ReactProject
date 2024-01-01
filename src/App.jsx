import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './components/user/home';
import Admin from './components/admin/admin';
import Services from './components/admin/services';
import Appointments from './components/admin/appointments';

export const IsConnected = createContext(null);

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const connected = { isConnected, setIsConnected };
  return (
    <div className="App">
      <IsConnected.Provider value={connected}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Layout />}>
              <Route path={""} element={<Home />} ></Route>
              <Route path={"admin"} element={<Admin />}>
                <Route path={"services"} element={<Services />}></Route>
                <Route path={"appointments"} element={<Appointments />}></Route>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </IsConnected.Provider>
    </div>
  )
}

export default App
