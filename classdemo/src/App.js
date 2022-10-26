import Header from "./components/Header";
import MainBody from "./components/MainBody";

function App() {
  return (
    <div className="App">
      <Header 
        linkText="Learn React"
        linkUrl="https://reactjs.org" />
      <MainBody />
    </div>
  );
}

export default App;
