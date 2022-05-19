import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ message, setMessage ] = useState('');

    async function sendMail(e) {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.API_URL}/sendmail`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ name, email, subject, message })
            });
    
            if(res.status === 200) {
                alert("Message Sent.");
            } else if(res.status === 500) {
                alert("Failed to send message");
            }
        } catch (err) {
            alert(err);
        }   
    }

    return (
        <div className='contact-wrapper'>
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