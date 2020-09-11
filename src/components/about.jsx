import React, { Component } from 'react';
import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTerminal, faCode, faDatabase, faServer, faInfoCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faTerminal,faCode,faDatabase,faServer,faInfoCircle,faUser);


class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container pt-5 d-flex">
                    <h4>Todo list </h4><span className="mt-1 pl-3">V 0.1.0</span> 
                </div>
                <div className="container pt-2 bg-light p-3" >
                   <h3 className="pt-2 text-primary">Information</h3>
                    <h5 className="pt-1"><FontAwesomeIcon className="icons-About" icon={["fas", "terminal"]}/>Nodejs & Express</h5>
                    <h5 className="pt-1"><FontAwesomeIcon className="icons-About" icon={["fas", "code"]} />ReactJs</h5>
                    <h5 className="pt-1"><FontAwesomeIcon className="icons-About" icon={["fas", "database"]}/>MongoDb</h5>
                    <h5 className="pt-1"><FontAwesomeIcon className="icons-About" icon={["fas", "server"]} /><a className="linkss" href="https://joh-n-son-react-api.herokuapp.com/">Heroku</a></h5>
                    <h5 className="pt-1"><FontAwesomeIcon className="icons-About" icon={["fas", "info-circle"]}/><a className="linkss" href=" https://github.com/joshwambere/2do">Github</a></h5>
                    <h5 className=""><FontAwesomeIcon className="icons-About" icon={["fas", "user"]} /><a className="linkss" href="https://github.com/joshwambere">Johnson</a></h5>
                </div>
            </div>
         );
    }
}
 
export default About;