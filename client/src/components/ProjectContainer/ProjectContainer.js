import './ProjectContainer.css';

function ProjectContainer({projectData}) {
    return (
        <>
        <div className='project-container'>
            <div className='inner-content'>
                <h1 className='project-title'>{projectData.name}</h1>
                <div className='project-content'>
                    <div className='project-description'>
                        <p>Description: {projectData.description}</p>
                        <p>Categories: {projectData.categories.join(", ")}</p>
                        <p>Languages: {projectData.languages.join(", ")}</p>
                        <p>Tech: {projectData.tech.join(", ")}</p>
                    </div>
                    <img src={projectData.image} alt='project'/>
                </div>
                <button className='github-url'><a href={projectData.githubUrl} target='_blank' rel='noreferrer'>GitHub Portal</a></button>
            </div>
            <p className='instruction'>Double click folders to explore them</p>
        </div>
        </>
    );
}

export default ProjectContainer;