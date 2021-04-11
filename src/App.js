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
          src="https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-19/s150x150/79270329_474591243199677_1158776008887762944_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_ohc=1iiUHq1u0nEAX8DAp3P&edm=ABfd0MgAAAAA&ccb=7-4&oh=217d84f905e92bd1c1df2f5f0c6dbab7&oe=6099167E&_nc_sid=7bff83"
          className="rounded mx-auto d-block"
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
