// import './App.css';
import './App.scss'
// import Navigation from './Navigation/Navigation';
import Header  from './Components/Header/Header'
import Main from './Components/Main/main.jsx'
import GetStarted from './Components/GetStarted/GetStarted';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
