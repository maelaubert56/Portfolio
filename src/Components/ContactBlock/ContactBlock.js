import './ContactBlock.css'

function ContactBlock() {
    return (
        <div id="ContactBlock">
            <div className="left">
                <h2>Let's talk together !</h2>
                <p>I’m currently student at Efrei Paris Engineering School, there i have to talk about me and other things like what I like and stuffs, blabla. Some more text there with another sentence.</p>
                <div>
                    <a href="#"><img src="/tiles/linkedin.png" alt="linkedin"/></a>
                    <a href="#"><img src="/tiles/github.png" alt="github"/></a>
                    <a href="#"><img src="/tiles/email.png" alt="email"/></a>
                </div>
            </div>
            <div className="right">
                <form action="#">
                    <input type="text" placeholder="Name..." required />
                    <input type="email" placeholder="Email..." required />
                    <textarea placeholder="Message..." required></textarea>
                    <button>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default ContactBlock;