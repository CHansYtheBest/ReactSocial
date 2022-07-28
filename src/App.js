import "./App.css";
import Header from "./components/header";
import Nav from "./components/nav";
import Profile from "./components/profile";

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
