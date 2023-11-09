import './ContactBlock.css'

function ContactBlock() {
    return (
        <div id="ContactBlock">
            <div className="left">
                <h2>Let's talk together !</h2>
                <p>I’m currently student at Efrei Paris Engineering School, there i have to talk about me and other things like what I like and stuffs, blabla. Some more text there with another sentence.</p>
                <div>
                    <img src="/tiles/linkedin.png" alt="linkedin"/>
                    <img src="/tiles/github.png" alt="github"/>
                    <img src="/tiles/email.png" alt="email"/>
                </div>
            </div>
            <div className="right">
                <form>
                    <input type="text" placeholder="Name..." />
                    <input type="text" placeholder="Email..." />
                    <textarea placeholder="Message..."></textarea>
                    <button>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactBlock;