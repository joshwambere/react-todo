import React, { Component } from 'react';
import '../App.css';

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="container pt-5 d-flex">
                    <h4>Todo list </h4><span className="mt-1 pl-3">V 0.1.0</span>

                    <span className="pt-3">Infos</span>
                    <h5 className="pt-1"><b>Backend:</b> Nodejs & Express</h5>
                    <h5 className="pt-1"><b>Frontend:</b> ReactJs</h5>
                    <h5 className="pt-1"><b>Database:</b> MongoDb</h5>
                    <span className="pt-3">API Hosted on https://joh-n-son-react-api.herokuapp.com/</span>
                    <h5 className="pt-1"><b>More info about API check on :</b> https://github.com/joshwambere/2do</h5>
                    <h4 className="pt-3"><b>Dev:</b>Johnson</h4>
                    
                </div>
            </div>
         );
    }
}
 
export default About;