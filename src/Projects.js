import './Projects.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Post from './post'
function Projects() {
return(
    <div className="proj">
        <h1>
            Projects
        </h1>
        <ul className="container">
                <Post 
                image="https://cdn.lolwot.com/wp-content/uploads/2015/08/20-funny-and-creative-stock-images-found-online-5.jpg"
                name="Weird Fish Lady"
                link = "https://google.com"
                />
                <Post
                image="http://www.evidentlycochrane.net/wp-content/uploads/2017/08/to-have-a-pineapple-picture-id108352271.jpg"
                name="Hello Pineapple"
                link="https://google.com"
                />
                <Post
                image="https://cdn.lolwot.com/wp-content/uploads/2015/08/20-funny-and-creative-stock-images-found-online-1.jpg"
                name="Noodle Brain"
                link="https://google.com"
                />
                <Post
                image="http://www.funcage.com/blog/wp-content/uploads/2013/12/20-Extremely-Weird-Stock-Photographs015.jpg"
                name="Gitler Hunberg"
                link="https://google.com"
                />
                <Post
                image="http://uploads.neatorama.com/images/posts/592/95/95592/1491047764-3.jpg"
                name="Pizza Time"
                link="https://google.com"
                />
                <Post
                image="https://www.funcage.com/blog/wp-content/uploads/2013/12/20-Extremely-Weird-Stock-Photographs012.jpg"
                name="Handy"
                link="https://google.com"
                />
            </ul>
        <h1>
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