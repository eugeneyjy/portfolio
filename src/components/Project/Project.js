import './Project.css';
import projectsData from '../../data/projectsData';

import { useSelector } from 'react-redux';
import { getProjectNum } from "../../redux/selectors";

import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ProjectSelector from '../ProjectSelector/ProjectSelector';

function Project() {
    const currProject = useSelector(getProjectNum);

    return (
        <div className='center-container'>
            <ProjectContainer projectData={projectsData[currProject]}/>
            <ProjectSelector projectsData={projectsData}/>
        </div>
    );
}

export default Project;