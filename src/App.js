import "./App.css";
import Header from "./components/Header";
import SocialMedia from "./components/SocialMedia";
import ComingSoon from "./pages/ComingSoon";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <SocialMedia />
      {/* <ComingSoon /> */}
    </div>
  );
}

export default App;
