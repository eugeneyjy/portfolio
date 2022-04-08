import { useEffect, useState } from 'react';
import './Home.css';

function Home() {
    const contentText = [
                        'Welcome to my portfolio. I\'m an undergraduate senior computer science student that is graduating in Spring 2022. Feel free to navigate to different pages to discover facts about me and the projects I have done.',
                        'Please consider contact me if there is any vacancy that fit with my knowledge and skills. I\'m looking to start my career as a Fullstack Developer or Backend Developer.'
                        ];
    const paragraphLines = contentText.length;
    const [ typeWriterText, setTypeWriterText ] = useState('');
    const [ currTextLength, setCurrTextLength ] = useState(0);
    const [ lineCount, setLineCount ] = useState(0);
    const [ blink, setBlink ] = useState(true);

    // typewriter effect
    useEffect(() => {
        const timeout1 = setTimeout(() => {
            if(lineCount < paragraphLines) {
                if(currTextLength >= contentText[lineCount].length) {
                    if(lineCount !== paragraphLines-1) {
                        setTypeWriterText(typeWriterText+'\n');
                    }
                    setCurrTextLength(0);
                    setLineCount(lineCount+1);
                } else {
                    setTypeWriterText(typeWriterText+contentText[lineCount][currTextLength]);
                    setCurrTextLength(currTextLength+1);
                }
            }
        }, parseInt(Math.random() * (50-30) + 30));
        return () => clearTimeout(timeout1);
    }, [lineCount, currTextLength]); 

    useEffect(() =>{
        if(lineCount < paragraphLines) {
            return;
        }
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
          }, 500);
          return () => clearTimeout(timeout2);
    }, [lineCount, blink]);

    return(
        <div className='home-container'>
            <p className='title'>Hi, my name is</p>
            <p className='name'>EUGENE YONG</p>
            <p className='career'>I am a Computer Science Student</p>
            <br/>
            <div className='home-content'>
                <p>{typeWriterText}<span className='cursor-blink'>{blink ? '|' : ''}</span></p>
            </div>
        </div>
    );
}

export default Home;
