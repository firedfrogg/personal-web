/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
        imgSrc: '/images/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: '/images/nodejs.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: '/images/expressjs.svg',
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: '/images/mongodb.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: '/images/tensorflow.svg',
        label: 'Tensorflow',
        desc: 'Machine Learning Models'
    },
    {
        imgSrc: '/images/jupyter.svg',
        label: 'Jupyter',
        desc: 'Interactive Computing Platform'
    },
    {
        imgSrc: '/images/pandas.svg',
        label: 'Pandas',
        desc: 'Working With Datasets'
    },
    {
        imgSrc: '/images/postman.svg',
        label: 'Postman',
        desc: 'API Testing'
    },
    {
        imgSrc: '/images/wireshark.svg',
        label: 'Wireshark',
        desc: 'Network Tracing'
    },
    {
        imgSrc: '/images/mysql.svg',
        label: 'MySQL',
        desc: 'Database'
    },
];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">
                    Essential Tools I Use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    The following is the tools and technologies I currently use on my journey
                    to gain knowledge on this field.
                </p>
                
                <div className="reveal-up grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                            <SkillCard
                                classes="reveal-up"
                                key={key}
                                imgSrc={imgSrc}
                                label={label}
                                desc={desc}
                                />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Skill