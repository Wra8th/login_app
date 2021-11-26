import Login from './components/login.js';
import './App.css';
import logo from "./logo.png";

function App() {
  return (
    <body
    style={{
      backgroundImage: `url(${logo})`,
      backgroundSize: "cover",
      height: "100vh",
      color: "#f5f5f5"
    }}
    >
      
        <Login />
      
    </body>
  );
}

export default App;
