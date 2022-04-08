import './Project.css';
import projectImage from '../../assets/projectsImage/tic-tac-toe.png';
import projectsData from '../../data/projectsData';
import { useState } from 'react';

function Project() {
    const [ currProject, setCurrProject ] = useState(1);
    let images = {

    };

    return (
        <div className='center-container'>
            <div className='project-container'>
                <div className='inner-content'>
                    <h1 className='project-title'>{projectsData[currProject].name}</h1>
                    <div className='project-content'>
                        <div className='project-description'>
                            <p>Description: {projectsData[currProject].description}</p>
                            <p>Categories: {projectsData[currProject].categories.join(", ")}</p>
                            <p>Languages: {projectsData[currProject].languages.join(", ")}</p>
                            <p>Library: {projectsData[currProject].libraries.join(", ")}</p>
                        </div>
                        <img src={projectsData[currProject].image} alt='tic-tac-toe project'/>
                    </div>
                    <button>GitHub Portal</button>
                </div>
            </div>
            <p className='instruction'>Double click folders to explore them</p>
        </div>
    );
}

export default Project;