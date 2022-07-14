import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Page from './pages/Page'
import Login from "./pages/Login"

import Header from './components/Header'
import Footer from './components/Footer'
import { UserContext } from "./components/UserContext";

function App() {

  const [user, setUser] = useState(null)

  const value = {
    user,
    login: () => {
      setUser('John Snow')
    },
    logout: () => {
      setUser(null)
    }
  }
  
  return (
    <BrowserRouter>
      <UserContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Page />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
