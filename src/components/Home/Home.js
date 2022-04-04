import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Home.scss';
import AnimateDletters from "../AnimateLetter";
import resume from '../../assets/resume.pdf'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['V', 'e', 'n', 'k', 'a', 't', 'e', 's', 'h'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    
   useEffect(()=>{
       return setTimeout(()=>{
           setLetterClass('text-animate-hover')
       }, 4000)
   }, []);

    return (
        <div className="container home-page">   
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={'${letterClass} _12'}>i,</span>
                    <br/>
                    <span className={'${letterClass} _12'}>I</span>
                    <span className={'${letterClass} _12'}>'m </span>
                <AnimateDletters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/> 
                <br/>
                <AnimateDletters letterClass={letterClass}
                strArray={jobArray}
                idx={24}/>
                </h1>
                <h2>Frontend Developer | React | Javascript</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                <a href={resume} className="flat-button" download="Venkatesh Ramalingam resume.pdf"> Download CV </a>
            </div>
        </div>
    )
}

export default Home;