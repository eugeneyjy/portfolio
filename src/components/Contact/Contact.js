import './Contact.css';

function Contact() {
    return (
        <div className='contact-wrapper'>
            <h1 className='contact-header'>Contact Me</h1>
            <form className='contact-form'>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' placeholder='Your name'/>

                <label htmlFor='subject'>Subject</label>
                <input type='text' id='subject' name='subject' placeholder='Subject'/>

                <label htmlFor='message'>Message</label>
                <textarea id='message' name='message' placeholder='Your message...'/>

                <button className='submit-button'>Send</button>
            </form>
        </div>
    );
}

export default Contact;