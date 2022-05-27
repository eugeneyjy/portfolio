import './About.css';

function About() {
    return (
        <div className='about-container'>
            <div>
                <div className='about-me-container'>
                    <h1 className='about-title'>About Me</h1>
                    <p>Education: Bachelor degree in Oregon State University</p>
                    <p>Major: Computer Science</p>
                    <p>Interested area: Backend, FullStack, AI/Machine Learning</p>
                    <p>Hobby: Anime, Games, Piano</p>
                </div>
                <div className='skills-container'>
                    <h1 className='about-title'>Skills</h1>
                    <div className='skills-categories-container'>
                        <div className='skills-category'>
                            <h2>Languages</h2>
                            <ul>
                                <li>Python</li>
                                <li>Java</li>
                                <li>SQL</li>
                                <li>HTML/CSS/JavaScript</li>
                                <li>C/C++</li>
                                <li>Apex</li>
                            </ul>
                        </div>
                        <div className='skills-category'>
                            <h2>Techs</h2>
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>AWS</li>
                                <li>MongoDB</li>
                                <li>Android Studio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='experience-container'>
                    <h1 className='about-title'>Experience</h1>
                    <div className='experience'>
                        <h2>Student Salesforce Developer</h2>
                        <h3>June 2021 - Present</h3>
                        <div className='experience-tags'>
                            <span className='experience-tag'>Salesforce</span>
                            <span className='experience-tag'>SOQL</span>
                            <span className='experience-tag'>JavaScript</span>
                            <span className='experience-tag'>Apex</span>
                            <span className='experience-tag'>HTML</span>
                            <span className='experience-tag'>Unit Test</span>
                        </div>
                    </div>
                </div>
                <div className='coursework-container'>
                    <h1 className='about-title'>Coursework</h1>
                    <div className='coursework'>
                        <ul>
                            <li>Data Structures</li>
                            <li>Advanced Web Development (React.js)</li>
                            <li>Software Engineering</li>
                            <li>Cloud Application Development</li>
                            <li>Intro Artificial Intelligence</li>
                            <li>Machine Learning and Data Mining</li>
                            <li>Database Management Systems</li>
                            <li>Mobile Software Developement</li>
                            <li>Intro to Mathemetical Stats</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;