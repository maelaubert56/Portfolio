import './App.css';
import {useState, useEffect} from "react";

import Header from './Components/Header/Header';
import HelloBlock from './Components/HelloBlock/HelloBlock';
import PresentationBlock from './Components/PresentationBlock/PresentationBlock';
import ProjectsBlock from './Components/ProjectsBlock/ProjectsBlock';
import StudiesAndExperiencesBlock from './Components/StudiesAndExperiencesBlock/StudiesAndExperiencesBlock';
import TechnosBlock from './Components/TechnosBlock/TechnosBlock';
import ContactBlock from './Components/ContactBlock/ContactBlock';
import Footer from './Components/Footer/Footer';


function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);


    return (
    <div id="App">
        <Header theme={theme} setTheme={setTheme}/>
        <div>
            <HelloBlock theme={theme}/>
            <PresentationBlock />
            <ProjectsBlock />
            <StudiesAndExperiencesBlock />
            <TechnosBlock />
            <ContactBlock />
        </div>
        <Footer />
    </div>
  );
}

export default App;
