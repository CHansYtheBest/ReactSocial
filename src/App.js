import "./App.css";
import Header from "./components/Navigation/Header/Header";
import Nav from "./components/Navigation/Navbar/nav";
import Profile from "./components/Content/Profile/profile";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <Profile
        name="Peepo"
        surname="The Frog"
        avatar="https://pbs.twimg.com/profile_images/1083056964840480768/gYcc4I4-_400x400.jpg"
        post=" Даша любит есть какахи."
      />
    </div>
  );
};

export default App;
