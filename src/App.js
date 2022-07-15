import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Page from './pages/Page'
import Login from "./pages/Login"

import Header from './components/Header'
import Footer from './components/Footer'
import { UserContext } from "./components/UserContext";
import { useLocalStorage } from "./components/useLocalStorage";
function App() {

  const [user, setUser] = useLocalStorage("user", null);

  const value = {
    user,
    login: (username) => {
      setUser(username)
    },
    logout: () => {
      setUser(null)
    }
  }
  
  return (
    <BrowserRouter basename="/myapp_react1">
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
