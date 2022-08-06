import './App.css';
import NavComponent from './components/navbar/navbar';
import SectionOne from './components/profileSection/sectionOne';
import GridExample from './components/grid/grid';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavComponent/>
      <SectionOne/>
      <GridExample/>
    </div>
  );
}

export default App;
