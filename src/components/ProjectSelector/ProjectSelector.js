import './ProjectSelector.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { changeProject } from '../../redux/actions';
import { getProjectNum } from '../../redux/selectors';

function ProjectSelector({projectsData}) {
    const dispatch = useDispatch();
    const currProject = useSelector(getProjectNum);

    return (
        <div className='files-container'>
            {projectsData.map((project, index) => {
                return (
                    <div className={(currProject===index ? 'selected ' : '') + 'file'} key={project.name} onDoubleClick={() => dispatch(changeProject(index))}>
                        <FontAwesomeIcon icon={faFolderOpen} size="3x"/>
                        <p className='file-name'>{project.name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default ProjectSelector;