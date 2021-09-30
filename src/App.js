
import icon from './gif9.gif'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import './App.css';
import {fab} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Particles from "react-particles-js"
import particlesConfig from './config/configParticles'

library.add(fab)

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: "hidden" }}>
      <div style={{ position: 'absolute'}}>
        <Particles width="100vw" height="100vh" params={particlesConfig}/>
      </div>
      <header className="App-header">
        <img src={icon} className="App-logo" alt="logo" />
        <h1>IncredibleZuess</h1>
        <p>
          Fullstack Developer<br/>
          JavaScript | Python | C++
        </p>
        <div class="container">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
