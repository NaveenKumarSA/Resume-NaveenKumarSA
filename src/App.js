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
        <div className="resume_header_left">
          
          <p className="display-4">NAVEEN KUMAR S A</p>
          <img src="../../public/data/assets/img/profile_NaveenKumarSA.png" />
        </div>
        <div className="resume_header_right">
     
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQHEip_CCUFcuA/profile-displayphoto-shrink_800_800/0/1613315305404?e=1626307200&v=beta&t=m-ryPsVDS8T7OVOaDkcjYp5zK1UDQwUlHywvfRKe0A8"
            className="rounded mx-auto d-block profile_image"
            alt="..."
          />
        </div>
      </div>
      <section>
        <ObjectivesComponent />
      </section>
      <section>
        <ResumeAccordion />
      </section>
      <section></section>
    </div>
  );
}

export default App;
