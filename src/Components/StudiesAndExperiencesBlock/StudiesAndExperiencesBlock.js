import './StudiesAndExperiencesBlock.css'
import timeline from '../../assets/timeline.svg'
import {useTranslation} from "react-i18next";



function StudiesAndExperiencesBlock() {

    const list = [
        {
            en: {
                    name: "Efrei Paris",
                    date: "2021 - 2026",
                    description: "Thirst year of a Engineering Degree in IT",
                    image:  "/compagnies_logo/efrei.png",
                    alt: "efrei"
                },
            fr:{
                    name: "Efrei Paris",
                    date: "2021 - 2026",
                    description: "Troisième année de d'un cursus d'ingénieur en informatique",
                    image:  "/compagnies_logo/efrei.png",
                    alt: "efrei"
                },
            es:{
                    name: "Efrei Paris",
                    date: "2021 - 2026",
                    description: "Thirst year of a Engineering Degree in IT",
                    image:  "/compagnies_logo/efrei.png",
                    alt: "efrei"
                },
            ge:{
                    name: "Efrei Paris",
                    date: "2021 - 2026",
                    description: "Thirst year of a Engineering Degree in IT",
                    image:  "/compagnies_logo/efrei.png",
                    alt: "efrei"
                }
        },{
            en: {
                name: "INTM Group",
                date: "jan. 2023 - jun. 2023",
                description: "Part-Time as Business Developer after an internship of one month",
                image: "/compagnies_logo/intm.png",
                alt: "intm"
            },
            fr:{
                name: "INTM Groupe",
                date: "jan. 2023 - jun. 2023",
                description: "Temps Partiel en parallèle de mes études en tant que Business Developer dans une ESN après un stage d'un mois.",
                image: "/compagnies_logo/intm.png",
                alt: "intm"
            },
            es:{
                name: "INTM Groupe",
                date: "jan. 2023 - jun. 2023",
                description: "Part-Time as Business Developer after an internship of one month",
                image: "/compagnies_logo/intm.png",
                alt: "intm"
            },
            ge:{
                name: "INTM Groupe",
                date: "jan. 2023 - jun. 2023",
                description: "Part-Time as Business Developer after an internship of one month",
                image: "/compagnies_logo/intm.png",
                alt: "intm"
            }
        },{
            en: {
                name: "Asia Pacific University",
                date: "sept. 2023 - dec. 2023",
                description: "Exchange (one semester) in Kuala Lumpur, Malaysia",
                image: "/compagnies_logo/apu.png",
                alt: "APU"
            },
            fr:{
                name: "Asia Pacific University",
                date: "sept. 2023 - dec. 2023",
                description: "Mobilité d'un semèstre à Kuala Lumpur, Malaisie",
                image: "/compagnies_logo/apu.png",
                alt: "APU"
            },
            es:{
                name: "Asia Pacific University",
                date: "sept. 2023 - dec. 2023",
                description: "Exchange (one semester) in Kuala Lumpur, Malaysia",
                image: "/compagnies_logo/apu.png",
                alt: "APU"
            },
            ge:{
                name: "Asia Pacific University",
                date: "sept. 2023 - dec. 2023",
                description: "Exchange (one semester) in Kuala Lumpur, Malaysia",
                image: "/compagnies_logo/apu.png",
                alt: "APU"
            }
        },
    ]
    const { t, i18n } = useTranslation()

    return (

        <div id="StudiesAndExperiencesBlock">
            <h2>{t('StudiesAndExperiences_Title')}</h2>
            <div>
                <img src={timeline} alt="timeline" />

                {list.map((item,index) => (
                    <div key={index} className='logo'>
                        <div>
                            <div>
                                <img src={item.en.image} alt={item.alt} />
                            </div>
                        </div>
                    </div>
                ))}

                {list.map((item,index) => (

                    <div key={index} className='description'>
                        <h3>{item.en.name}</h3>
                        <span>{item.en.date}</span>
                        <p>{item.en.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudiesAndExperiencesBlock;