import React, {useState, useEffect} from 'react';
import './Skills.scss';
import AnimateDletters from '../AnimateLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGit, faHtml5, faJs, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    
    useEffect(()=>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <>
         <div className='container skills-page'>
             <div className='text-zone'>
                <h1>
                    <AnimateDletters letterClass={letterClass}
                    strArray={['Technical',' ', 'Skills']}
                    idx={15}/>
                </h1>
                <p>
                My skills include HTML5, CSS3, SASS, JavaScript, jQuery, Angular JS(1) and React JS.
                </p>
                <ul>
                    <li><FontAwesomeIcon color="#e34c26" icon={faHtml5}/></li>
                    <li><FontAwesomeIcon color='#000000' icon={faCss3}/></li>
                    <li><FontAwesomeIcon color='#CD679A' icon={faSass}/></li>
                    <li><FontAwesomeIcon color='#f0db4f' icon={faJs}/></li>
                    <li><FontAwesomeIcon color='#dd1b16' icon={faAngular}/></li>
                    <li><FontAwesomeIcon color='#61DBFB' icon={faReact}/></li>
                    <li><FontAwesomeIcon color= "#F1502F" icon={faGit}/></li>
                </ul>
             </div>
         </div>
         
        </>
    )
}

export default Skills;