import { faAngular, faCss3, faGit, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Loader from "react-loaders";
import AnimateDletters from "../AnimateLetter";
import './About.scss';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimateDletters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
                    idx={15} />
                </h1>
                <p>Having 10 years of experience in the field of web development, Well versed knowledge on solving the cross browser compatibility issues both Web and Mobile platforms. </p>
                <p>I spends free time reading and going on travelling.</p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGit} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-scale-ripple"/>
        </>
    );
}


export default About;