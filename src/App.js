//import logo from './logo.svg';
import "./App.css";
import ObjectivesComponent from "./components/ObjectivesComponent";
import ResumeAccordion from "./components/ResumeAccordion";       
/* import ThemeSwitcher from './components/ThemeSwitcher';
 <ThemeSwitcher/> */
function App() {
  return (
    <div className="App">
      <div className="reasumeHeader ">
        <img
          src="/data/assets/NaveenKumarSA.jpg"
          class="rounded mx-auto d-block"
          alt="..."
        ></img>   <p className="display-4">NAVEEN KUMAR S A</p>

      </div>
      <section>
        <ObjectivesComponent />
      </section>
      <section>
        <ResumeAccordion/>
      </section>
      <section>
       
      </section>
    </div>
  );
}

export default App;
