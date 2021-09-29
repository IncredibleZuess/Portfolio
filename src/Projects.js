import './Projects.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
function Projects() {
return(
    <div className="proj">
        <h1 className="hov">
            Projects
        </h1>
        <h1 className="hov">
            Contact
        </h1>
        <div className="spacing">
          <a href="https://stackoverflow.com/users/12074398/incrediblezuess" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon  icon={['fab', 'stack-overflow']}/></a>
          <a href={"https://github.com/IncredibleZuess"} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']}/></a>
          <a href="https://gitlab.com/IncredibleZuess" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'gitlab']}/></a>
        </div>
    </div>
)
}

export default Projects