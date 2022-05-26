import { useState } from 'react';
import Toast from '../Toast/Toast';
import { RotatingLines } from 'react-loader-spinner';
import './Contact.css';

function Contact() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ toastMsg, setToastMsg ] = useState('');
    const [ toastDuration, setToastDuration ] = useState(3000);
    const [ toastVisible, setToastVisible ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);

    async function sendMail(e) {
        setIsLoading(true);
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/sendmail`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });
            // const res = {status: 200};
            if(res.status === 200) {
                showToast('Email message sent');
            } else if(res.status === 500) {
                showToast("Failed to send message");
            }
        } catch (err) {
            showToast(err.message);
        }   
        setIsLoading(false);
    }

    function showToast(msg, duration=3000) {
        setToastMsg(msg);
        setToastDuration(duration);
        setToastVisible(true);
    }

    return (
        <div className='contact-wrapper'>
            { isLoading ? 
                <>
                    <div className='backdrop'></div>
                    <div className='spinner'>
                        <RotatingLines width='100'/> 
                    </div>
                </>
                : 
                ''
            }
            <Toast msg={toastMsg} duration={toastDuration} visible={toastVisible} setToastVisible={setToastVisible}/>
            <h1 className='contact-header'>Contact Me</h1>
            <form className='contact-form' onSubmit={sendMail}>
                <div className='name-email-wrapper'>
                    <div className='input-wrapper'>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text' 
                            id='name'
                            name='name'
                            placeholder='Your name'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='input-wrapper'>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='text' 
                            id='email'
                            name='email'
                            placeholder='Your email'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className='input-wrapper'>
                    <label htmlFor='subject'>Subject</label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        placeholder='Subject'
                        required
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>

                <div className='input-wrapper'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        placeholder='Your message...'
                        required
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>

                <button className='submit-button' type='submit'>Send</button>
            </form>
        </div>
    );
}

export default Contact;