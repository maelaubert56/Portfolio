import './TechnosBlock.css'

function TechnosBlock() {
    return (
        <div id="TechnosBlock">
            <h2>Technologies I use</h2>
            <div>
                <div>
                    <p>Front-End Developement</p>
                    <div>
                        <img src="/technos_logo/html5.png" alt="html5"/>
                        <img src="/technos_logo/css3.png" alt="css3"/>
                        <img src="/technos_logo/js.png" alt="js"/>
                    </div>
                    <img src="/technos_logo/reactjs.png" alt="react"/>
                    <img src="/technos_logo/vuejs.png" alt="vue"/>
                </div>
                <div>
                    <p>Back-End Developement</p>
                    <img src="/technos_logo/nodejs.png" alt="nodejs"/>
                    <img src="/technos_logo/expressjs.png" alt="expressjs"/>
                    <img src="/technos_logo/mysql.svg" alt="mysql"/>
                </div>
                <div>
                    <p>Other</p>
                    <img src="/technos_logo/git.png" alt="git"/>
                    <img src="/technos_logo/github.svg" alt="github"/>
                    <img src="/technos_logo/figma.png" alt="figma"/>
                </div>
            </div>
        </div>
    );
}

export default TechnosBlock;