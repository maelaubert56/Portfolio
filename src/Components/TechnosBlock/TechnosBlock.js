import './TechnosBlock.css'

function TechnosBlock() {
    return (
        <div id="TechnosBlock">

            <div className='banner'></div>
            <div className='content'>
                <h2>Technologies I use ⚙️</h2>
                <div>
                    <div className='techos_subpart'>
                        <p>Front-End Developement</p>
                        <div>
                            <div>
                                <img src="/technos_logo/html5.png" alt="html5"/>
                                <img src="/technos_logo/css3.png" alt="css3"/>
                                <img src="/technos_logo/js.png" alt="js"/>
                            </div>
                            <img src="/technos_logo/reactjs.png" alt="react"/>
                            <img src="/technos_logo/vuejs.png" alt="vue"/>
                        </div>
                    </div>
                    <div className='techos_subpart'>
                        <p>Back-End Developement</p>
                        <div>
                            <img src="/technos_logo/nodejs.png" alt="nodejs"/>
                            <img src="/technos_logo/expressjs.png" alt="expressjs"/>
                            <img src="/technos_logo/mysql.svg" alt="mysql"/>
                        </div>
                    </div>
                    <div className='techos_subpart'>
                        <p>Other</p>
                        <div>
                            <img src="/technos_logo/git.png" alt="git"/>
                            <img src="/technos_logo/github.svg" alt="github"/>
                            <img src="/technos_logo/figma.png" alt="figma"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnosBlock;