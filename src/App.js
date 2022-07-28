import "./App.css";
import Header from "./components/Navigation/Header/Header";
import Nav from "./components/Navigation/Navbar/nav";
import Profile from "./components/Content/Profile/profile";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

export default App;
