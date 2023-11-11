import './StudiesAndExperiencesBlock.css'
import timeline from '../../assets/timeline.svg'



function StudiesAndExperiencesBlock() {

    const list = [
        {
            name: "Efrei Paris",
            date: "2021 - 2026",
            description: "Thirst year of a Engineering Degree in IT",
            image:  "/compagnies_logo/efrei.png",
            alt: "efrei"
        },
        {
            name: "INTM Groupe",
            date: "jan. 2023 - jun. 2023",
            description: "Part-Time as Business Developer after an internship of one month",
            image: "/compagnies_logo/intm.png",
            alt: "intm"
        },
        {
            name: "Asia Pacific University",
            date: "sept. 2023 - dec. 2023",
            description: "Exchange (one semester) in Kuala Lumpur, Malaysia",
            image: "/compagnies_logo/apu.png",
            alt: "APU"
        }
    ]

    return (
        <div id="StudiesAndExperiencesBlock">
            <h2>Studies and Experiences ✨</h2>
            <div>
                <img src={timeline} alt="timeline" />

                {list.map((item,index) => (
                    <div key={index} className='logo'>
                        <div>
                            <div>
                                <img src={item.image} alt={item.alt} />
                            </div>
                        </div>
                    </div>
                ))}

                {list.map((item,index) => (
                    <div key={index} className='description'>
                        <h3>{item.name}</h3>
                        <span>{item.date}</span>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudiesAndExperiencesBlock;