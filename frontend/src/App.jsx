import React,{useState} from "react";
import MyRouter from "./routes/MyRouter";
import Footer from "./components/Footer"

const App = () => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage on load
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  return (
    <>
      <MyRouter user={user} setUser={setUser} />
      <Footer />
    </>
  );
  
};

export default App;
