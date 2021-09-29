
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
        <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
      </header>
    </div>
  );
}

export default App;
