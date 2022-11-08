import Header from "./components/Header";
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';



function App() {
  return (
    <div className="App">

          <Button variant= "danger" onClick={() => {localStorage.setItem('theme', localStorage.getItem('theme') === 'dark' ? 'light' : 'dark'); 
        window.location.reload();}}>
          Change Mode 
        </Button>
      <Header 
        linkText="Learn React"
        linkUrl="https://reactjs.org" />
    </div>
  );
}

export default App;
