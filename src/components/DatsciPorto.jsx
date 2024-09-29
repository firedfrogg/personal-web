/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */

/**
 *
 * Node Modules
 */
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 *
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import DatsciPortoCard from "./DatsciPortoCard";

const portos = [
    {
        content: 'Developed a model for segmenting heart regions in MRI images, which qualified for the national qualifiers in the GEMASTIK 2024 competition.',
        name: 'GEMASTIK 2024',
        imgSrc: '/images/project-gemastik2024.png',
        company: 'GEMASTIK'
    },
    {
        content: 'Built a weather forecasting model that received an honorable mention at the AIRNOLOGY event hosted by Universitas Airlangga.',
        name: 'AIRNOLOGY',
        imgSrc: '/images/project-airnology2023.png',
        company: 'Universitas Airlangga'
    },
    {
        content: 'Created a traffic prediction system that reached the finalist stage at the RISTEK DATATHON, showcasing advanced forecasting techniques.',
        name: 'RISTEK DATATHON',
        imgSrc: '/images/project-datathon2023.png',
        company: 'Fasilkom UI'
    },
    {
        content: 'Worked on a machine learning model to identify pests and plant diseases, leading to a national qualification at GEMASTIK 2023.',
        name: 'GEMASTIK 2023',
        imgSrc: '/images/project-gemastik2023.png',
        company: 'GEMASTIK'
    },
    {
        content: 'Developed a model to predict housing prices, handling large volumes of messy data, which placed in the top 15 at the FindIT! competition.',
        name: 'FindIT! (2)',
        imgSrc: '/images/project-findit2.png',
        company: 'FindIT!'
    },
    {
        content: 'Created a vaccine prediction model for seasonal and H1N1 flu, managing complex datasets, and earned a top 15 placement at FindIT!',
        name: 'FindIT!',
        imgSrc: '/images/project-findit.png',
        company: 'FindIT!'
    },
];


const DatsciPorto = () => {

    useGSAP(() => {
        gsap.to('.scrub-slide', {
            scrollTrigger: {
                trigger: '.scrub-slide',
                start:'-200% 80%',
                end: '400% 80%',
                scrub: true,
            },
            x: '-1000'
        })
    });

    return (
        <section className="section overflow-hidden" id="portos">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Data Science Portfolios
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[100ch]">
                    Sorted by the <strong>most recent project.</strong>
                </p>
                <div className="scrub-slide flex items-stretch gap-3 w-fit">
                    {portos.map(({ content, name, imgSrc, company }, key) => (
                        <DatsciPortoCard
                        key={key}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                        content={content}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DatsciPorto